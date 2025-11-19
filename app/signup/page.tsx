'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import florestBackground from '@/public/FlorestBackground.jpg'

export default function SignUpPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const { signup } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Por favor, insira um email válido (exemplo: usuario@email.com)')
      return
    }

    // Validação de nome
    if (name.trim().length < 2) {
      setError('O nome deve ter pelo menos 2 caracteres')
      return
    }
    
    if (password !== confirmPassword) {
      setError('As senhas não coincidem')
      return
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres')
      return
    }
    
    setIsLoading(true)
    
    try {
      console.log('Tentando criar conta com:', { name, email, passwordLength: password.length })
      await signup(name, email, password)
      router.push('/dashboard')
    } catch (error: any) {
      console.error('Signup error:', error)
      setError(error.message || 'Erro ao criar conta')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#2d5016] relative overflow-hidden flex items-center justify-center p-4">
      {/* Retro jungle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url(${florestBackground.src})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat'
             }}>
        </div>
      </div>

      {/* Decorative jungle elements
      <div className="absolute top-10 left-10 w-32 h-32 opacity-20">
        <img src="/retro-8-bit-pixel-art-jungle-leaf-green.jpg" alt="" className="w-full h-full pixelated" />
      </div>
      <div className="absolute bottom-10 right-10 w-40 h-40 opacity-20">
        <img src="/retro-8-bit-pixel-art-jungle-vine-tropical.jpg" alt="" className="w-full h-full pixelated" />
      </div> */}

      {/* Main signup card */}
      <div className="relative z-10 w-full max-w-md">
        {/* Decorative pixel art tree above card */}

        {/* Signup card */}
        <div className="bg-[#8b4513] p-1 pixel-borders shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
          <div className="bg-[#d4a574] p-8">
            {/* Title */}
            <h1 className="font-pixel text-xl text-[#2d5016] text-center mb-8 leading-relaxed">
              CRIAR CONTA
            </h1>

            {error && (
              <div className="mb-4 p-3 bg-[#d14728] border-2 border-[#8b4513] font-body text-sm text-[#f5e6d3] text-center">
                {error}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
              {/* Nome field */}
              <div>
                <label htmlFor="name" className="block font-body text-sm text-[#2d5016] mb-2">
                  NOME
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8b4513]">
                    <img src="/retro-8-bit-pixel-art-user-icon.jpg" alt="" className="w-5 h-5 pixelated" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoComplete="off"
                    className="w-full bg-[#f5e6d3] border-2 border-[#8b4513] pl-12 pr-4 py-3 font-body text-[#2d5016] focus:outline-none focus:border-[#6b8e23]"
                    placeholder="Seu nome"
                  />
                </div>
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block font-body text-sm text-[#2d5016] mb-2">
                  EMAIL
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8b4513]">
                    <img src="/retro-8-bit-pixel-art-envelope-mail-icon.jpg" alt="" className="w-5 h-5 pixelated" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="off"
                    className="w-full bg-[#f5e6d3] border-2 border-[#8b4513] pl-12 pr-4 py-3 font-body text-[#2d5016] focus:outline-none focus:border-[#6b8e23]"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              {/* Password field */}
              <div>
                <label htmlFor="password" className="block font-body text-sm text-[#2d5016] mb-2">
                  SENHA
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8b4513]">
                    <img src="/retro-8-bit-pixel-art-lock-key-icon.jpg" alt="" className="w-5 h-5 pixelated" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                    minLength={6}
                    className="w-full bg-[#f5e6d3] border-2 border-[#8b4513] pl-12 pr-4 py-3 font-body text-[#2d5016] focus:outline-none focus:border-[#6b8e23]"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Confirm Password field */}
              <div>
                <label htmlFor="confirm-password" className="block font-body text-sm text-[#2d5016] mb-2">
                  CONFIRMAR SENHA
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8b4513]">
                    <img src="/retro-8-bit-pixel-art-lock-key-icon.jpg" alt="" className="w-5 h-5 pixelated" />
                  </div>
                  <input
                    type="password"
                    id="confirm-password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                    minLength={6}
                    className="w-full bg-[#f5e6d3] border-2 border-[#8b4513] pl-12 pr-4 py-3 font-body text-[#2d5016] focus:outline-none focus:border-[#6b8e23]"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#6b8e23] border-4 border-[#2d5016] px-8 py-4 font-pixel text-sm text-[#f5e6d3] hover:bg-[#556b1e] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] active:shadow-none active:translate-x-1 active:translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isLoading ? 'CRIANDO...' : 'CRIAR CONTA'}
              </button>
            </form>

            {/* Login link */}
            <div className="mt-6 text-center">
              <p className="font-body text-sm text-[#2d5016]">
                Já tem conta?{' '}
                <Link href="/login" className="text-[#6b8e23] hover:underline font-bold">
                  Fazer login
                </Link>
              </p>
            </div>

            {/* Back to home link */}
            <div className="mt-4 text-center">
              <Link href="/" className="font-body text-xs text-[#8b4513] hover:underline">
                ← Voltar para home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
