'use client'

import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth()

  return (
    <nav className="relative bg-[#3b2618] border-b-4 border-[#1f6032] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-['Press_Start_2P'] text-[#ffe29a] text-xs sm:text-sm">
            CORAÇÃO DA MATA
          </div>
          <div className="flex gap-3 sm:gap-6 flex-wrap items-center">
            <Link
              href="/#inicio"
              className="font-['Press_Start_2P'] text-[#ffe29a] text-[9px] sm:text-xs hover:text-[#d14728] transition-colors"
            >
              Início
            </Link>
            <Link
              href="/#sobre"
              className="font-['Press_Start_2P'] text-[#ffe29a] text-[9px] sm:text-xs hover:text-[#d14728] transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="/#historia"
              className="font-['Press_Start_2P'] text-[#ffe29a] text-[9px] sm:text-xs hover:text-[#d14728] transition-colors"
            >
              História
            </Link>
            <Link
              href="/#personagens"
              className="font-['Press_Start_2P'] text-[#ffe29a] text-[9px] sm:text-xs hover:text-[#d14728] transition-colors"
            >
              Personagens
            </Link>
            <Link
              href="/#como-jogar"
              className="font-['Press_Start_2P'] text-[#ffe29a] text-[9px] sm:text-xs hover:text-[#d14728] transition-colors"
            >
              Como Jogar
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  className="font-['Press_Start_2P'] text-[#ffe29a] text-[9px] sm:text-xs hover:text-[#d14728] transition-colors"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="font-['Press_Start_2P'] text-[#ffe29a] text-[9px] sm:text-xs hover:text-[#d14728] transition-colors"
                >
                  Sair
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="font-['Press_Start_2P'] text-[#ffe29a] text-[9px] sm:text-xs hover:text-[#d14728] transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* Retro pixel border effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.3) 2px,
            rgba(0,0,0,0.3) 4px
          )`
        }} />
      </div>
    </nav>
  )
}
