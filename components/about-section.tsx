import { Gamepad2, Puzzle, User, } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="sobre" className="relative bg-[#1f6032] py-16 overflow-hidden">
      {/* Jungle background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-32 bg-[#32936f]" style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 50%, 95% 70%, 90% 50%, 85% 70%, 80% 50%, 75% 70%, 70% 50%, 65% 70%, 60% 50%, 55% 70%, 50% 50%, 45% 70%, 40% 50%, 35% 70%, 30% 50%, 25% 70%, 20% 50%, 15% 70%, 10% 50%, 5% 70%, 0 50%)'
        }} />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-[#32936f]" style={{
          clipPath: 'polygon(0 50%, 5% 30%, 10% 50%, 15% 30%, 20% 50%, 25% 30%, 30% 50%, 35% 30%, 40% 50%, 45% 30%, 50% 50%, 55% 30%, 60% 50%, 65% 30%, 70% 50%, 75% 30%, 80% 50%, 85% 30%, 90% 50%, 95% 30%, 100% 50%, 100% 100%, 0 100%)'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-['Press_Start_2P'] text-[#ffe29a] text-xl sm:text-2xl text-center mb-12 drop-shadow-[0_2px_0_rgba(209,71,40,1)]">
          SOBRE O JOGO
        </h2>

        <div className="max-w-4xl mx-auto bg-[#3b2618] border-8 border-[#2c1810] p-8" style={{
          boxShadow: '8px 8px 0 0 rgba(44,24,16,0.8)'
        }}>
          <p className="font-['VT323'] text-[#ffe29a] text-xl sm:text-2xl mb-8 leading-relaxed text-center">
            Embarque em uma aventura pixelada através da selva mais perigosa do mundo retrô! 
            Enfrente criaturas selvagens, colete power-ups e descubra segredos escondidos em cada canto desta floresta misteriosa.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="bg-[#2c1810] border-4 border-[#32936f] p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-[#d14728] border-4 border-[#1f6032] p-3">
                  <Gamepad2 className="w-8 h-8 text-[#ffe29a]" />
                </div>
              </div>
              <h3 className="font-['Press_Start_2P'] text-[#ffe29a] text-xs mb-2">JOGABILIDADE</h3>
              <p className="font-['VT323'] text-[#32936f] text-lg">
                Controles simples e divertidos
              </p>
            </div>

            <div className="bg-[#2c1810] border-4 border-[#32936f] p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-[#d14728] border-4 border-[#1f6032] p-3">
                  <Puzzle className="w-8 h-8 text-[#ffe29a]" />
                </div>
              </div>
              <h3 className="font-['Press_Start_2P'] text-[#ffe29a] text-xs mb-2">PUZZLE</h3>
              <p className="font-['VT323'] text-[#32936f] text-lg">
                Desvende misterios com os desafios que virão
              </p>
            </div>

            <div className="bg-[#2c1810] border-4 border-[#32936f] p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-[#d14728] border-4 border-[#1f6032] p-3">
                  <User className="w-8 h-8 text-[#ffe29a]" />
                </div>
              </div>
              <h3 className="font-['Press_Start_2P'] text-[#ffe29a] text-xs mb-2">SINGLEPLAYER</h3>
              <p className="font-['VT323'] text-[#32936f] text-lg">
                Aventure-se sozinho na selva pixelada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
