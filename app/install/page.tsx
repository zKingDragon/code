'use client'

import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function InstallPage() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [floatingLeaves, setFloatingLeaves] = useState<Array<{ id: number; x: number; y: number; delay: number; duration: number }>>([])

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, router])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const leaves = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10
    }))
    setFloatingLeaves(leaves)
  }, [])

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#2c1810] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 animate-pulse" style={{
        background: 'radial-gradient(circle at 50% 50%, #32936f 0%, transparent 70%)',
        animation: 'pulse 4s ease-in-out infinite'
      }} />

      {/* Retro arcade texture background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 4px,
          rgba(255,226,154,0.5) 4px,
          rgba(255,226,154,0.5) 8px
        ),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 4px,
          rgba(255,226,154,0.5) 4px,
          rgba(255,226,154,0.5) 8px
        )`
      }} />

      {floatingLeaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute w-8 h-8 opacity-20 pixelated pointer-events-none"
          style={{
            left: `${leaf.x}%`,
            top: `${leaf.y}%`,
            animation: `float ${leaf.duration}s ease-in-out infinite`,
            animationDelay: `${leaf.delay}s`,
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        >
          <img src="/retro-8-bit-pixel-art-jungle-leaf-green.jpg" alt="" className="w-full h-full" />
        </div>
      ))}

      <div 
        className="absolute top-0 left-10 w-20 h-40 opacity-30 transition-transform duration-300 ease-out animate-swing"
        style={{
          transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
          transformOrigin: 'top center'
        }}
      >
        <img src="/retro-8-bit-pixel-art-jungle-leaves-vine-hanging.jpg" alt="" className="w-full h-full pixelated" />
      </div>
      <div 
        className="absolute top-0 right-10 w-20 h-40 opacity-30 transition-transform duration-300 ease-out animate-swing"
        style={{
          transform: `translate(${-mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px) scale-x-[-1]`,
          transformOrigin: 'top center',
          animationDelay: '0.5s'
        }}
      >
        <img src="/retro-8-bit-pixel-art-jungle-leaves-vine-hanging.jpg" alt="" className="w-full h-full pixelated" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="mb-8 animate-fadeInDown">
          <Link 
            href="/dashboard"
            className="inline-flex items-center gap-2 font-['VT323'] text-[#ffe29a] text-xl hover:text-[#d14728] transition-all hover:translate-x-[-4px]"
          >
            ← Voltar para dashboard
          </Link>
        </div>

        <div className="max-w-4xl mx-auto animate-fadeInUp">
          <div className="bg-[#3b2618] border-4 border-[#1f6032] p-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.7)] transition-all duration-300">
            <div className="bg-[#2c1810] border-4 border-[#d14728] p-8 md:p-12">
              <div className="text-center mb-12 animate-scaleIn">
                <h1 className="font-['Press_Start_2P'] text-[#ffe29a] text-2xl md:text-4xl mb-6 leading-relaxed drop-shadow-[0_4px_0_rgba(209,71,40,1)] animate-pulse">
                  INSTALAR JOGO
                </h1>
                <p className="font-['VT323'] text-[#32936f] text-xl md:text-2xl leading-relaxed">
                  Escolha sua plataforma e comece a aventura!
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {/* Windows */}
                <div className="bg-[#3b2618] border-4 border-[#1f6032] p-6 text-center hover:border-[#d14728] transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                  <div className="text-6xl mb-4 transition-transform duration-300 hover:scale-110 inline-block">🪟</div>
                  <h3 className="font-['Press_Start_2P'] text-[#ffe29a] text-sm mb-4 leading-relaxed">
                    WINDOWS
                  </h3>
                  <p className="font-['VT323'] text-[#32936f] text-lg mb-6">
                    Windows 10 ou superior
                  </p>
                  <button className="w-full font-['Press_Start_2P'] bg-[#d14728] hover:bg-[#32936f] text-[#ffe29a] px-6 py-3 text-xs border-4 border-[#1f6032] shadow-[4px_4px_0_0_rgba(31,96,50,1)] hover:shadow-[2px_2px_0_0_rgba(31,96,50,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:scale-95 cursor-pointer">
                    BAIXAR
                  </button>
                </div>

                {/* Mac */}
                <div className="bg-[#3b2618] border-4 border-[#1f6032] p-6 text-center hover:border-[#d14728] transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <div className="text-6xl mb-4 transition-transform duration-300 hover:scale-110 inline-block">🍎</div>
                  <h3 className="font-['Press_Start_2P'] text-[#ffe29a] text-sm mb-4 leading-relaxed">
                    MAC OS
                  </h3>
                  <p className="font-['VT323'] text-[#32936f] text-lg mb-6">
                    macOS 11 ou superior
                  </p>
                  <button className="w-full font-['Press_Start_2P'] bg-[#d14728] hover:bg-[#32936f] text-[#ffe29a] px-6 py-3 text-xs border-4 border-[#1f6032] shadow-[4px_4px_0_0_rgba(31,96,50,1)] hover:shadow-[2px_2px_0_0_rgba(31,96,50,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:scale-95 cursor-pointer">
                    BAIXAR
                  </button>
                </div>

                {/* Linux */}
                <div className="bg-[#3b2618] border-4 border-[#1f6032] p-6 text-center hover:border-[#d14728] transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                  <div className="text-6xl mb-4 transition-transform duration-300 hover:scale-110 inline-block">🐧</div>
                  <h3 className="font-['Press_Start_2P'] text-[#ffe29a] text-sm mb-4 leading-relaxed">
                    LINUX
                  </h3>
                  <p className="font-['VT323'] text-[#32936f] text-lg mb-6">
                    Ubuntu 20.04 ou superior
                  </p>
                  <button className="w-full font-['Press_Start_2P'] bg-[#d14728] hover:bg-[#32936f] text-[#ffe29a] px-6 py-3 text-xs border-4 border-[#1f6032] shadow-[4px_4px_0_0_rgba(31,96,50,1)] hover:shadow-[2px_2px_0_0_rgba(31,96,50,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:scale-95 cursor-pointer">
                    BAIXAR
                  </button>
                </div>
              </div>

              <div className="bg-[#1f6032] border-4 border-[#32936f] p-6 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <h3 className="font-['Press_Start_2P'] text-[#ffe29a] text-sm mb-6 leading-relaxed text-center">
                  REQUISITOS DO SISTEMA
                </h3>
                <div className="grid md:grid-cols-2 gap-6 font-['VT323'] text-[#ffe29a] text-lg">
                  <div className="hover:bg-[#2c1810]/30 p-4 rounded transition-colors">
                    <h4 className="font-['Press_Start_2P'] text-xs mb-3 text-[#d14728]">MÍNIMO</h4>
                    <ul className="space-y-2">
                      <li>• Processador: Dual Core 2.0 GHz</li>
                      <li>• Memória: 2 GB RAM</li>
                      <li>• Gráficos: 512 MB VRAM</li>
                      <li>• Armazenamento: 500 MB</li>
                    </ul>
                  </div>
                  <div className="hover:bg-[#2c1810]/30 p-4 rounded transition-colors">
                    <h4 className="font-['Press_Start_2P'] text-xs mb-3 text-[#d14728]">RECOMENDADO</h4>
                    <ul className="space-y-2">
                      <li>• Processador: Quad Core 3.0 GHz</li>
                      <li>• Memória: 4 GB RAM</li>
                      <li>• Gráficos: 1 GB VRAM</li>
                      <li>• Armazenamento: 1 GB</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#3b2618] border-2 border-[#32936f] animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                <h3 className="font-['Press_Start_2P'] text-[#ffe29a] text-xs mb-4 leading-relaxed">
                  INSTRUÇÕES DE INSTALAÇÃO
                </h3>
                <ol className="font-['VT323'] text-[#32936f] text-xl space-y-2 list-decimal list-inside">
                  <li className="hover:text-[#ffe29a] transition-colors">Baixe o instalador para sua plataforma</li>
                  <li className="hover:text-[#ffe29a] transition-colors">Execute o arquivo baixado</li>
                  <li className="hover:text-[#ffe29a] transition-colors">Siga as instruções na tela</li>
                  <li className="hover:text-[#ffe29a] transition-colors">Inicie o jogo e divirta-se!</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pixel decorative border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#1f6032]" style={{
        clipPath: 'polygon(0 50%, 5% 0, 10% 50%, 15% 0, 20% 50%, 25% 0, 30% 50%, 35% 0, 40% 50%, 45% 0, 50% 50%, 55% 0, 60% 50%, 65% 0, 70% 50%, 75% 0, 80% 50%, 85% 0, 90% 50%, 95% 0, 100% 50%, 100% 100%, 0 100%)'
      }} />
    </div>
  )
}
