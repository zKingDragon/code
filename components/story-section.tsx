import Image from 'next/image'

export default function StorySection() {
  return (
    <section id="historia" className="relative bg-gradient-to-b from-[#1f6032] to-[#2c1810] py-16 overflow-hidden">
      {/* Mystical fog effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffe29a]/20 to-transparent animate-pulse" />
      </div>

      {/* Fireflies/spirits */}
      <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-[#ffe29a] rounded-full animate-pulse opacity-70" />
      <div className="absolute top-[40%] right-[15%] w-3 h-3 bg-[#ffe29a] rounded-full animate-pulse opacity-80" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-[60%] left-[20%] w-2 h-2 bg-[#ffe29a] rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[30%] right-[30%] w-2 h-2 bg-[#ffe29a] rounded-full animate-pulse opacity-75" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-['Press_Start_2P'] text-[#ffe29a] text-xl sm:text-2xl text-center mb-12 drop-shadow-[0_2px_0_rgba(209,71,40,1)]">
          A LENDA DO CURUPIRA
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Curupira illustration */}
            <div className="relative">
              <div className="bg-[#3b2618] border-8 border-[#d14728] p-4" style={{
                boxShadow: '8px 8px 0 0 rgba(209,71,40,0.6)'
              }}>
                <div className="bg-[#2c1810] border-4 border-[#32936f] p-8 aspect-square flex items-center justify-center">
                  {/* Placeholder for Curupira pixel art */}
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto mb-4 bg-[#d14728] border-4 border-[#1f6032] relative pixelated" style={{
                      clipPath: 'polygon(30% 0%, 70% 0%, 80% 10%, 85% 20%, 90% 40%, 85% 60%, 90% 80%, 80% 100%, 70% 100%, 60% 95%, 50% 100%, 40% 95%, 30% 100%, 20% 100%, 10% 80%, 15% 60%, 10% 40%, 15% 20%, 20% 10%)'
                    }}>
                      <div className="absolute top-[15%] left-[35%] w-4 h-4 bg-[#ffe29a] rounded-full" />
                      <div className="absolute top-[15%] right-[35%] w-4 h-4 bg-[#ffe29a] rounded-full" />
                      <div className="absolute bottom-[40%] left-1/2 -translate-x-1/2 w-12 h-8 bg-[#1f6032]" />
                    </div>
                    <p className="font-['VT323'] text-[#32936f] text-xl">ARTE DO CURUPIRA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story text */}
            <div className="bg-[#3b2618] border-8 border-[#2c1810] p-8" style={{
              boxShadow: '8px 8px 0 0 rgba(44,24,16,0.8)'
            }}>
              <div className="space-y-4">
                <p className="font-['VT323'] text-[#ffe29a] text-xl sm:text-2xl leading-relaxed">
                  <span className="text-[#d14728] font-bold text-2xl">⚠</span> No coração da floresta amazônica, onde os pixels se misturam com a magia ancestral, vive o lendário <span className="text-[#d14728] font-bold">CURUPIRA</span>.
                </p>
                
                <p className="font-['VT323'] text-[#32936f] text-xl sm:text-2xl leading-relaxed">
                  Guardião da selva com os pés virados para trás, ele protege a natureza de todos que ousam destruí-la. Sua fúria é tão pixelada quanto mortal!
                </p>

                <div className="bg-[#2c1810] border-4 border-[#32936f] p-4 mt-6">
                  <p className="font-['VT323'] text-[#ffe29a] text-lg sm:text-xl leading-relaxed">
                    <span className="text-[#d14728]">▶</span> Uma equipe de exploradores invadiu a floresta em busca de riquezas...
                  </p>
                  <p className="font-['VT323'] text-[#ffe29a] text-lg sm:text-xl leading-relaxed mt-2">
                    <span className="text-[#d14728]">▶</span> Mas o Curupira não permitirá que levem seus tesouros!
                  </p>
                  <p className="font-['VT323'] text-[#ffe29a] text-lg sm:text-xl leading-relaxed mt-2">
                    <span className="text-[#d14728]">▶</span> Descubra a verdade sobre suas intenções...
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <div className="w-4 h-4 bg-[#d14728] animate-pulse pixelated" />
                  <p className="font-['Press_Start_2P'] text-[#d14728] text-xs">
                    SERÁ VOCÊ O HERÓI OU O VILÃO?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
