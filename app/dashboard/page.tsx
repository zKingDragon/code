'use client'

import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function DashboardPage() {
  const { isAuthenticated, user, logout } = useAuth()
  const router = useRouter()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [floatingLeaves, setFloatingLeaves] = useState<Array<{ id: number; x: number; y: number; delay: number; duration: number }>>([])
  const [leftVineHover, setLeftVineHover] = useState(false)
  const [rightVineHover, setRightVineHover] = useState(false)
  const [leftVineMousePos, setLeftVineMousePos] = useState({ x: 0, y: 0 })
  const [rightVineMousePos, setRightVineMousePos] = useState({ x: 0, y: 0 })

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
    const leaves = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10
    }))
    setFloatingLeaves(leaves)
  }, [])

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#2c1810] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 animate-pulse" style={{
        background: 'radial-gradient(circle at 50% 50%, #32936f 0%, transparent 70%)',
        animation: 'pulse 4s ease-in-out infinite'
      }} />

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
          className="absolute w-6 h-6 opacity-20 pixelated pointer-events-none"
          style={{
            left: `${leaf.x}%`,
            top: `${leaf.y}%`,
            animation: `float ${leaf.duration}s ease-in-out infinite`,
            animationDelay: `${leaf.delay}s`,
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
          }}
        >
          <img src="/retro-8-bit-pixel-art-jungle-leaf-green.jpg" alt="" className="w-full h-full" />
        </div>
      ))}

      <div 
        className="absolute top-0 left-10 w-16 h-32 opacity-30 transition-transform duration-300 ease-out animate-swing"
        style={{
          transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
          transformOrigin: 'top center'
        }}
      >
        <img src="/retro-8-bit-pixel-art-jungle-leaves-vine-hanging.jpg" alt="" className="w-full h-full pixelated" />
      </div>
      <div 
        className="absolute top-0 right-10 w-16 h-32 opacity-30 transition-transform duration-300 ease-out animate-swing"
        style={{
          transform: `translate(${-mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px) scale-x-[-1]`,
          transformOrigin: 'top center',
          animationDelay: '0.5s'
        }}
      >
        <img src="/retro-8-bit-pixel-art-jungle-leaves-vine-hanging.jpg" alt="" className="w-full h-full pixelated" />
      </div>

      <nav className="relative z-10 bg-[#3b2618] border-b-4 border-[#1f6032] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-['Press_Start_2P'] text-sm md:text-xl text-[#ffe29a] hover:text-[#d14728] transition-colors">
            CORAÇÃO DA MATA
          </Link>
          <div className="flex items-center gap-4 md:gap-6">
            <span className="font-['VT323'] text-lg md:text-xl text-[#ffe29a]">
              Olá, {user?.name || 'Aventureiro'}!
            </span>
            <button 
              onClick={handleLogout}
              className="font-['VT323'] text-base md:text-lg text-[#ffe29a] hover:text-[#d14728] transition-colors"
            >
              Sair
            </button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Hero section */}
        <div className="text-center mb-8 animate-fadeInDown">
          <h1 className="font-['Press_Start_2P'] text-2xl md:text-4xl text-[#ffe29a] mb-4 leading-relaxed drop-shadow-[0_4px_0_rgba(209,71,40,1)]">
            JOGAR AGORA
          </h1>
          <p className="font-['VT323'] text-lg md:text-2xl text-[#32936f]">
            Sua aventura na selva começa aqui!
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12 animate-scaleIn relative">
          {/* Cipó esquerdo - poligonal com clipPath */}
          <div 
            className="absolute -left-16 md:-left-24 top-0 w-12 md:w-20 h-full transition-transform duration-300 ease-out z-0 cursor-pointer flex items-center justify-center"
            onMouseEnter={() => setLeftVineHover(true)}
            onMouseLeave={() => setLeftVineHover(false)}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const x = (e.clientX - rect.left) / rect.width - 0.5
              const y = (e.clientY - rect.top) / rect.height - 0.5
              setLeftVineMousePos({ x: x * 30, y: y * 20 })
            }}
            style={{
              transform: leftVineHover 
                ? `translateX(${leftVineMousePos.x}px) translateY(${leftVineMousePos.y}px) rotate(${leftVineMousePos.x * 0.5}deg)`
                : 'translateX(0) translateY(0) rotate(0deg)',
              transformOrigin: 'top center'
            }}
          >
            <div 
              className="w-4 h-full bg-gradient-to-b from-[#1f6032] via-[#32936f] to-[#1f6032] opacity-70">
              {/* Padrão de textura */}
              <div className="w-full h-full" style={{
                backgroundImage: `repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 2px,
                  rgba(0,0,0,0.2) 2px,
                  rgba(0,0,0,0.2) 4px
                )`
              }} />
            </div>
            {/* Folhas no cipó */}
            {[10, 25, 40, 55, 70, 85].map((position, i) => (
              <div
                key={i}
                className="absolute w-6 h-6 pixelated"
                style={{
                  top: `${position}%`,
                  left: i % 2 === 0 ? '-8px' : 'auto',
                  right: i % 2 === 1 ? '-8px' : 'auto',
                  transform: `rotate(${i % 2 === 0 ? -45 : 45}deg)`,
                  opacity: 0.8
                }}
              >
                <div 
                  className="w-full h-full bg-[#2d5016]"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                  }}
                />
              </div>
            ))}
          </div>

          {/* Cipó direito - poligonal com clipPath (espelhado) */}
          <div 
            className="absolute -right-16 md:-right-24 top-0 w-12 md:w-20 h-full transition-transform duration-300 ease-out z-0 cursor-pointer flex items-center justify-center"
            onMouseEnter={() => setRightVineHover(true)}
            onMouseLeave={() => setRightVineHover(false)}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const x = (e.clientX - rect.left) / rect.width - 0.5
              const y = (e.clientY - rect.top) / rect.height - 0.5
              setRightVineMousePos({ x: x * 30, y: y * 20 })
            }}
            style={{
              transform: rightVineHover 
                ? `translateX(${rightVineMousePos.x}px) translateY(${rightVineMousePos.y}px) rotate(${rightVineMousePos.x * 0.5}deg)`
                : 'translateX(0) translateY(0) rotate(0deg)',
              transformOrigin: 'top center'
            }}
          >
            <div 
              className="w-4 h-full bg-gradient-to-b from-[#1f6032] via-[#32936f] to-[#1f6032] opacity-70"
            >
              {/* Padrão de textura */}
              <div className="w-full h-full" style={{
                backgroundImage: `repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 2px,
                  rgba(0,0,0,0.2) 2px,
                  rgba(0,0,0,0.2) 4px
                )`
              }} />
            </div>
            {/* Folhas no cipó */}
            {[10, 25, 40, 55, 70, 85].map((position, i) => (
              <div
                key={i}
                className="absolute w-6 h-6 pixelated"
                style={{
                  top: `${position}%`,
                  left: i % 2 === 0 ? '-8px' : 'auto',
                  right: i % 2 === 1 ? '-8px' : 'auto',
                  transform: `rotate(${i % 2 === 0 ? 45 : -45}deg)`,
                  opacity: 0.8
                }}
              >
                <div 
                  className="w-full h-full bg-[#2d5016]"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                  }}
                />
              </div>
            ))}
          </div>

          <div className="bg-[#3b2618] border-4 border-[#1f6032] p-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.7)] transition-all duration-300 relative z-10">
            <div className="bg-[#2c1810] border-4 border-[#d14728] p-2 md:p-4">
              {/* Game embed frame */}
              <div className="relative bg-black aspect-video border-4 border-[#1f6032] overflow-hidden">
                {/* Construct 2/3 Game - O Coração da Mata */}
                <iframe 
                  src="/game/index.html" 
                  className="w-full h-full border-0"
                  title="O Coração da Mata - Jogo"
                  allow="gamepad; keyboard-map *; fullscreen"
                />
                
                {/* Game stats overlay */}
                <div className="absolute top-2 left-2 bg-[#2c1810]/90 border-2 border-[#1f6032] px-3 py-2 pointer-events-none z-10">
                  <p className="font-['VT323'] text-[#ffe29a] text-sm md:text-base">
                    🎮 O CORAÇÃO DA MATA
                  </p>
                </div>
                
                <div className="absolute top-2 right-2 bg-[#2c1810]/90 border-2 border-[#1f6032] px-3 py-2 pointer-events-none z-10">
                  <p className="font-['VT323'] text-[#ffe29a] text-sm md:text-base">
                    ❤️ JOGAR ONLINE
                  </p>
                </div>
              </div>

              {/* Game controls info */}
              <div className="mt-4 p-4 bg-[#1f6032] border-2 border-[#32936f]">
                <p className="font-['VT323'] text-[#ffe29a] text-base md:text-lg text-center">
                  <span className="font-['Press_Start_2P'] text-xs">CONTROLES:</span> ← ↑ → Mover | ESPAÇO Interagir
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="bg-[#3b2618] border-4 border-[#1f6032] p-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]">
            <div className="bg-[#2c1810] p-6 md:p-8 text-center">
              <h2 className="font-['Press_Start_2P'] text-[#ffe29a] text-lg md:text-2xl mb-4 leading-relaxed">
                QUER JOGAR OFFLINE?
              </h2>
              <p className="font-['VT323'] text-[#32936f] text-xl md:text-2xl mb-6 leading-relaxed">
                Baixe o jogo para seu computador e jogue sem internet!
              </p>
              
              <Link href="/install">
                <button className="font-['Press_Start_2P'] bg-[#d14728] hover:bg-[#32936f] text-[#ffe29a] px-8 md:px-12 py-4 md:py-6 text-sm md:text-xl border-4 border-[#1f6032] shadow-[6px_6px_0_0_rgba(31,96,50,1)] hover:shadow-[4px_4px_0_0_rgba(31,96,50,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:scale-95">
                  BAIXAR JOGO
                </button>
              </Link>

              <div className="mt-6 flex justify-center gap-4 md:gap-8 text-4xl md:text-5xl">
                <span className="hover:scale-110 transition-transform cursor-pointer">🪟</span>
                <span className="hover:scale-110 transition-transform cursor-pointer">🍎</span>
                <span className="hover:scale-110 transition-transform cursor-pointer">🐧</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          {[
            { 
              icon: '🎯', 
              title: 'CONQUISTAS', 
              desc: 'Desbloqueie troféus e desafios' 
            },
            { 
              icon: '📊', 
              title: 'ESTATÍSTICAS', 
              desc: 'Acompanhe seu progresso' 
            },
            { 
              icon: '🌍', 
              title: 'EXPLORE', 
              desc: 'Descubra novos mundos' 
            }
          ].map((feature, i) => (
            <div key={i} className="bg-[#3b2618] border-4 border-[#1f6032] p-1 hover:border-[#d14728] transition-all hover:scale-105">
              <div className="bg-[#2c1810] p-4 md:p-6 text-center">
                <div className="text-3xl md:text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-['Press_Start_2P'] text-[#ffe29a] text-[10px] md:text-xs mb-2 leading-relaxed">
                  {feature.title}
                </h3>
                <p className="font-['VT323'] text-[#32936f] text-base md:text-lg">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pixel decorative border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#1f6032]" style={{
        clipPath: 'polygon(0 50%, 5% 0, 10% 50%, 15% 0, 20% 50%, 25% 0, 30% 50%, 35% 0, 40% 50%, 45% 0, 50% 50%, 55% 0, 60% 50%, 65% 0, 70% 50%, 75% 0, 80% 50%, 85% 0, 90% 50%, 95% 0, 100% 50%, 100% 100%, 0 100%)'
      }} />
    </div>
  )
}
