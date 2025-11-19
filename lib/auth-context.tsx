'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth, db } from './firebase'

interface AuthContextType {
  isAuthenticated: boolean
  user: { name: string; email: string; uid: string } | null
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<{ name: string; email: string; uid: string } | null>(null)
  const [loading, setLoading] = useState(true)

  // Listen to Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // User is signed in, get user data from Firestore
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid))
        if (userDoc.exists()) {
          const userData = userDoc.data()
          setUser({
            name: userData.name,
            email: firebaseUser.email || '',
            uid: firebaseUser.uid
          })
          setIsAuthenticated(true)
        }
      } else {
        // User is signed out
        setUser(null)
        setIsAuthenticated(false)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const firebaseUser = userCredential.user
      
      // Get user data from Firestore
      const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid))
      if (userDoc.exists()) {
        const userData = userDoc.data()
        setUser({
          name: userData.name,
          email: firebaseUser.email || '',
          uid: firebaseUser.uid
        })
        setIsAuthenticated(true)
      }
    } catch (error: any) {
      console.error('Login error:', error)
      
      // Mensagens de erro mais amigáveis
      let errorMessage = 'Erro ao fazer login'
      
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'Usuário não encontrado. Crie uma conta primeiro!'
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Senha incorreta'
      } else if (error.code === 'auth/invalid-credential') {
        errorMessage = 'Email ou senha incorretos. Verifique seus dados ou crie uma conta.'
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Email inválido'
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = 'Muitas tentativas. Tente novamente mais tarde'
      } else if (error.code === 'auth/api-key-not-valid') {
        errorMessage = 'Firebase não configurado! Configure o arquivo .env.local (veja README_FIREBASE.md)'
      }
      
      throw new Error(errorMessage)
    }
  }

  const signup = async (name: string, email: string, password: string) => {
    try {
      // Validações antes de enviar para o Firebase
      if (!email || !email.includes('@')) {
        throw new Error('Email inválido')
      }
      
      if (!name || name.trim().length < 2) {
        throw new Error('Nome deve ter pelo menos 2 caracteres')
      }
      
      if (!password || password.length < 6) {
        throw new Error('A senha deve ter pelo menos 6 caracteres')
      }

      console.log('Criando usuário no Firebase Auth...')
      
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password)
      const firebaseUser = userCredential.user
      
      console.log('Usuário criado, salvando no Firestore...')
      
      // Save user data in Firestore collection 'users'
      await setDoc(doc(db, 'users', firebaseUser.uid), {
        name: name.trim(),
        email: email.trim(),
        createdAt: new Date().toISOString()
      })
      
      console.log('Dados salvos com sucesso!')
      
      setUser({
        name: name.trim(),
        email: email.trim(),
        uid: firebaseUser.uid
      })
      setIsAuthenticated(true)
    } catch (error: any) {
      console.error('Signup error:', error)
      
      // Mensagens de erro mais amigáveis
      let errorMessage = 'Erro ao criar conta'
      
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'Este email já está em uso'
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'A senha deve ter pelo menos 6 caracteres'
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Email inválido. Use o formato: exemplo@email.com'
      } else if (error.code === 'auth/api-key-not-valid') {
        errorMessage = 'Firebase não configurado! Configure o arquivo .env.local (veja README_FIREBASE.md)'
      } else if (error.message) {
        errorMessage = error.message
      }
      
      throw new Error(errorMessage)
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      setUser(null)
      setIsAuthenticated(false)
    } catch (error) {
      console.error('Logout error:', error)
      throw error
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, signup, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
