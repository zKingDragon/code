'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'
import { useState, useRef } from 'react'

export default function HeroSection() {
  const { isAuthenticated } = useAuth()
  const [leftLeaves, setLeftLeaves] = useState<Array<{ id: number; x: number; delay: number }>>([])
  const [rightLeaves, setRightLeaves] = useState<Array<{ id: number; x: number; delay: number }>>([])
  const leftLeafId = useRef(0)
  const rightLeafId = useRef(0)

  const handleLeftPalmHover = () => {
    const newLeaves = Array.from({ length: 5 }, () => ({
      id: leftLeafId.current++,
      x: Math.random() * 100,
      delay: Math.random() * 0.5
    }))
    setLeftLeaves(prev => [...prev, ...newLeaves])
    setTimeout(() => {
      setLeftLeaves(prev => prev.slice(5))
    }, 3000)
  }

  const handleRightPalmHover = () => {
    const newLeaves = Array.from({ length: 5 }, () => ({
      id: rightLeafId.current++,
      x: Math.random() * 100,
      delay: Math.random() * 0.5
    }))
    setRightLeaves(prev => [...prev, ...newLeaves])
    setTimeout(() => {
      setRightLeaves(prev => prev.slice(5))
    }, 3000)
  }

  return (
    <section id="inicio" className="relative min-h-[600px] flex items-center justify-center overflow-hidden overflow-x-hidden bg-gradient-to-b from-[#1a0f08] via-[#2c1810] to-[#1f6032]">
      {/* Distant jungle silhouette */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#1f6032]/20 to-[#1f6032]/40" />
      
      {/* Animated fog/mist effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffe29a]/10 to-transparent animate-pulse" />
      </div>

      {/* Ground layer with grass */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1f6032] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#1f6032]" style={{
        clipPath: 'polygon(0 40%, 2% 35%, 4% 45%, 6% 30%, 8% 40%, 10% 25%, 12% 35%, 14% 50%, 16% 30%, 18% 45%, 20% 35%, 22% 50%, 24% 30%, 26% 40%, 28% 25%, 30% 45%, 32% 30%, 34% 50%, 36% 35%, 38% 45%, 40% 30%, 42% 40%, 44% 25%, 46% 35%, 48% 50%, 50% 30%, 52% 45%, 54% 35%, 56% 50%, 58% 30%, 60% 40%, 62% 25%, 64% 45%, 66% 30%, 68% 50%, 70% 35%, 72% 45%, 74% 30%, 76% 40%, 78% 25%, 80% 35%, 82% 50%, 84% 30%, 86% 45%, 88% 35%, 90% 50%, 92% 30%, 94% 40%, 96% 25%, 98% 45%, 100% 35%, 100% 100%, 0 100%)'
      }} />

      {/* Background plants and bushes */}
      <div className="absolute bottom-16 left-[10%] w-24 h-24 bg-[#32936f] opacity-60 rounded-full blur-sm" />
      <div className="absolute bottom-20 right-[15%] w-32 h-32 bg-[#1f6032] opacity-50 rounded-full blur-sm" />
      <div className="absolute bottom-12 left-[25%] w-20 h-20 bg-[#32936f] opacity-40 rounded-full blur-md" />
      <div className="absolute bottom-24 right-[30%] w-28 h-28 bg-[#1f6032] opacity-45 rounded-full blur-sm" />

      {/* Hanging vines */}
      <div className="absolute top-0 left-[20%] w-2 h-32 bg-gradient-to-b from-[#1f6032] to-transparent opacity-70" />
      <div className="absolute top-0 left-[40%] w-2 h-40 bg-gradient-to-b from-[#32936f] to-transparent opacity-60" />
      <div className="absolute top-0 right-[25%] w-2 h-36 bg-gradient-to-b from-[#1f6032] to-transparent opacity-65" />
      <div className="absolute top-0 right-[45%] w-2 h-28 bg-gradient-to-b from-[#32936f] to-transparent opacity-55" />

      {/* Pixelated leaves floating */}
      <div className="absolute top-[20%] left-[15%] w-4 h-4 bg-[#fcf40d] rotate-45 animate-float opacity-80" />
      <div className="absolute top-[30%] right-[20%] w-3 h-3 bg-[#fcf40d] rotate-12 animate-float opacity-70" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[50%] left-[35%] w-5 h-5 bg-[#fcf40d] -rotate-45 animate-float opacity-60" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[40%] right-[40%] w-4 h-4 bg-[#fcf40d] rotate-90 animate-float opacity-75" style={{ animationDelay: '1.5s' }} />

      {/* Left Palm Tree - Responsive */}
      <div 
        className="absolute top-[5%] sm:top-[10%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] pointer-events-auto z-30 cursor-pointer hover:scale-105 transition-transform duration-300"
        onMouseEnter={handleLeftPalmHover}
        style={{ left: '-30px', transform: 'rotate(-10deg)' }}
      >
        <Image
          src="/retro-pixel-palm-tree-left.png"
          alt="Palm Tree Left"
          width={400}
          height={400}
          className="w-full h-full object-contain pixelated transform scale-x-[-1]"
        />
        {/* Falling leaves animation container */}
        {leftLeaves.map(leaf => (
          <div
            key={leaf.id}
            className="absolute top-[50%] w-4 h-4 sm:w-5 sm:h-5 bg-[#32936f] animate-leafFall pixelated"
            style={{
              left: `${leaf.x}%`,
              animationDelay: `${leaf.delay}s`,
              transform: 'rotate(45deg)',
              clipPath: 'polygon(50% 0%, 65% 25%, 75% 35%, 80% 55%, 70% 75%, 55% 85%, 50% 100%, 45% 85%, 30% 75%, 20% 55%, 25% 35%, 35% 25%)'
            }}
          />
        ))}
      </div>

      {/* Right Palm Tree - Responsive */}
      <div 
        className="absolute top-[5%] sm:top-[10%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] pointer-events-auto z-30 cursor-pointer hover:scale-105 transition-transform duration-300"
        onMouseEnter={handleRightPalmHover}
        style={{ right: '-30px', transform: 'rotate(10deg)' }}
      >
        <Image
          src="/retro-pixel-palm-tree-right.png"
          alt="Palm Tree Right"
          width={400}
          height={400}
          className="w-full h-full object-contain pixelated"
        />
        {/* Falling leaves animation container */}
        {rightLeaves.map(leaf => (
          <div
            key={leaf.id}
            className="absolute top-[50%] w-4 h-4 sm:w-5 sm:h-5 bg-[#1f6032] animate-leafFall pixelated"
            style={{
              left: `${leaf.x}%`,
              animationDelay: `${leaf.delay}s`,
              transform: 'rotate(-45deg)',
              clipPath: 'polygon(50% 0%, 65% 25%, 75% 35%, 80% 55%, 70% 75%, 55% 85%, 50% 100%, 45% 85%, 30% 75%, 20% 55%, 25% 35%, 35% 25%)'
            }}
          />
        ))}
      </div>


      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-['Press_Start_2P'] text-[#ffe29a] text-2xl sm:text-4xl md:text-5xl mb-8 leading-relaxed drop-shadow-[0_4px_0_rgba(209,71,40,1)]">
          AVENTURA NA SELVA RETRÔ
        </h1>
        <p className="font-['VT323'] text-[#ffe29a] text-xl sm:text-2xl md:text-3xl mb-12 leading-relaxed drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
          Explore a floresta pixelada em uma jornada épica! Enfrente desafios, colete tesouros e sobreviva na selva mais perigosa do mundo 8-bit.
        </p>
        {isAuthenticated ? (
          <Link href="/install">
            <button className="font-['Press_Start_2P'] bg-[#d14728] hover:bg-[#32936f] text-[#ffe29a] px-8 py-4 text-sm sm:text-base border-4 border-[#1f6032] shadow-[4px_4px_0_0_rgba(31,96,50,1)] hover:shadow-[2px_2px_0_0_rgba(31,96,50,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              JOGAR DEMO
            </button>
          </Link>
        ) : (
          <Link href="/login">
            <button className="font-['Press_Start_2P'] bg-[#d14728] hover:bg-[#32936f] text-[#ffe29a] px-8 py-4 text-sm sm:text-base border-4 border-[#1f6032] shadow-[4px_4px_0_0_rgba(31,96,50,1)] hover:shadow-[2px_2px_0_0_rgba(31,96,50,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer">
              ACESSAR O JOGO
            </button>
          </Link>
        )}
      </div>
    </section>
  )
}
