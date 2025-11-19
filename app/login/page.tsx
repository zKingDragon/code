'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import florestBackground from '@/public/FlorestBackground.jpg'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    try {
      await login(email, password)
      router.push('/dashboard')
    } catch (error: any) {
      console.error('Login error:', error)
      setError(error.message || 'Erro ao fazer login')
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

      {/* Decorative jungle elements */}
      <div className="absolute top-20 left-5 md:left-20 w-24 h-32 opacity-30">
        
      </div>
      <div className="absolute bottom-20 right-5 md:right-20 w-28 h-36 opacity-30">
        
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto">
        {/* Login card */}
        <div className="w-full">
          <div className="bg-[#8b4513] p-1 pixel-borders shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
            <div className="bg-[#d4a574] p-8">
              {/* Title */}
              <h1 className="font-pixel text-2xl text-[#2d5016] text-center mb-2 leading-relaxed">
                BEM-VINDO
              </h1>
              <p className="font-body text-center text-[#8b4513] mb-8">
                Entre para acessar o jogo
              </p>

              {error && (
                <div className="mb-4 p-4 bg-[#d14728] border-2 border-[#8b4513] pixel-borders">
                  <p className="font-body text-sm text-[#f5e6d3] text-center mb-2">
                    ⚠️ {error}
                  </p>
                  {error.includes('Verifique seus dados ou crie uma conta') && (
                    <div className="text-center mt-2">
                      <Link 
                        href="/signup" 
                        className="inline-block bg-[#6b8e23] border-2 border-[#2d5016] px-4 py-2 font-pixel text-xs text-[#f5e6d3] hover:bg-[#556b1e] transition-colors"
                      >
                        CRIAR CONTA AGORA
                      </Link>
                    </div>
                  )}
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block font-body text-sm text-[#2d5016] mb-2">
                    EMAIL
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      <img src="/retro-8-bit-pixel-art-envelope-mail-icon.jpg" alt="" className="w-5 h-5 pixelated" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
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
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      <img src="/retro-8-bit-pixel-art-lock-key-icon.jpg" alt="" className="w-5 h-5 pixelated" />
                    </div>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full bg-[#f5e6d3] border-2 border-[#8b4513] pl-12 pr-4 py-3 font-body text-[#2d5016] focus:outline-none focus:border-[#6b8e23]"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#6b8e23] border-4 border-[#2d5016] px-8 py-4 font-pixel text-lg text-[#f5e6d3] hover:bg-[#556b1e] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] active:shadow-none active:translate-x-1 active:translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isLoading ? 'ENTRANDO...' : 'ENTRAR'}
                </button>
              </form>

              {/* Signup link */}
              <div className="mt-6 text-center">
                <p className="font-body text-sm text-[#2d5016]">
                  Não tem conta?{' '}
                  <Link href="/signup" className="text-[#6b8e23] hover:underline font-bold">
                    Criar conta
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
    </div>
  )
}
