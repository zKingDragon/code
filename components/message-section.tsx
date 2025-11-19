export default function MessageSection() {
  return (
    <section id="mensagem" className="relative bg-gradient-to-b from-[#1f6032] to-[#2c1810] py-20 overflow-hidden">
      {/* Nature elements floating */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Leaves */}
        <div className="absolute top-[15%] left-[10%] w-6 h-6 bg-[#32936f] rotate-45 animate-float opacity-60 pixelated" style={{
          clipPath: 'polygon(50% 0%, 65% 25%, 75% 35%, 80% 55%, 70% 75%, 55% 85%, 50% 100%, 45% 85%, 30% 75%, 20% 55%, 25% 35%, 35% 25%)'
        }} />
        <div className="absolute top-[70%] right-[15%] w-8 h-8 bg-[#1f6032] -rotate-45 animate-float opacity-50 pixelated" style={{
          clipPath: 'polygon(50% 0%, 65% 25%, 75% 35%, 80% 55%, 70% 75%, 55% 85%, 50% 100%, 45% 85%, 30% 75%, 20% 55%, 25% 35%, 35% 25%)',
          animationDelay: '1s'
        }} />
        <div className="absolute bottom-[20%] left-[20%] w-7 h-7 bg-[#32936f] rotate-12 animate-float opacity-70 pixelated" style={{
          clipPath: 'polygon(50% 0%, 65% 25%, 75% 35%, 80% 55%, 70% 75%, 55% 85%, 50% 100%, 45% 85%, 30% 75%, 20% 55%, 25% 35%, 35% 25%)',
          animationDelay: '2s'
        }} />
        
        {/* Glowing spirits */}
        <div className="absolute top-[40%] left-[5%] w-3 h-3 bg-[#ffe29a] rounded-full animate-pulse opacity-80 blur-sm" />
        <div className="absolute top-[55%] right-[8%] w-4 h-4 bg-[#ffe29a] rounded-full animate-pulse opacity-60 blur-sm" style={{ animationDelay: '0.7s' }} />
        <div className="absolute bottom-[35%] right-[25%] w-3 h-3 bg-[#ffe29a] rounded-full animate-pulse opacity-70 blur-sm" style={{ animationDelay: '1.4s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main message container */}
          <div className="bg-[#3b2618] border-8 border-[#d14728] p-12 relative" style={{
            boxShadow: '12px 12px 0 0 rgba(209,71,40,0.6)'
          }}>
            {/* Decorative corners */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#ffe29a] border-4 border-[#2c1810] pixelated" />
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#ffe29a] border-4 border-[#2c1810] pixelated" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#ffe29a] border-4 border-[#2c1810] pixelated" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#ffe29a] border-4 border-[#2c1810] pixelated" />

            {/* Nature icon */}
            <div className="flex justify-center mb-8">
              <div className="bg-[#1f6032] border-6 border-[#32936f] p-6 relative" style={{
                boxShadow: '6px 6px 0 0 rgba(50,147,111,0.5)'
              }}>
                <div className="text-6xl sm:text-8xl">🌿</div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#ffe29a] rounded-full animate-ping" />
              </div>
            </div>

            {/* Message title */}
            <h2 className="font-['Press_Start_2P'] text-[#ffe29a] text-lg sm:text-xl text-center mb-8 leading-relaxed drop-shadow-[0_2px_0_rgba(209,71,40,1)]">
              MENSAGEM DA FLORESTA
            </h2>

            {/* Main quote box */}
            <div className="bg-[#2c1810] border-4 border-[#32936f] p-8 mb-6 relative">
              {/* Quote marks */}
              <div className="absolute -top-6 left-4 text-6xl text-[#d14728] font-['Press_Start_2P']">"</div>
              <div className="absolute -bottom-6 right-4 text-6xl text-[#d14728] font-['Press_Start_2P']">"</div>

              <p className="font-['VT323'] text-[#ffe29a] text-2xl sm:text-3xl md:text-4xl text-center leading-relaxed pt-4 pb-4">
                A natureza não é um recurso a ser explorado,
                <br />
                mas um lar a ser <span className="text-[#32936f] font-bold">RESPEITADO</span> e <span className="text-[#32936f] font-bold">PROTEGIDO</span>.
              </p>
            </div>

            {/* Additional message boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-[#1f6032] border-4 border-[#32936f] p-4 text-center">
                <div className="text-3xl mb-2">🌳</div>
                <p className="font-['VT323'] text-[#ffe29a] text-lg">
                  Preserve a floresta
                </p>
              </div>
              <div className="bg-[#1f6032] border-4 border-[#32936f] p-4 text-center">
                <div className="text-3xl mb-2">🦜</div>
                <p className="font-['VT323'] text-[#ffe29a] text-lg">
                  Proteja a vida selvagem
                </p>
              </div>
              <div className="bg-[#1f6032] border-4 border-[#32936f] p-4 text-center">
                <div className="text-3xl mb-2">💚</div>
                <p className="font-['VT323'] text-[#ffe29a] text-lg">
                  Respeite a natureza
                </p>
              </div>
            </div>

            {/* Footer message */}
            <div className="mt-8 text-center">
              <div className="inline-block bg-[#d14728] border-4 border-[#1f6032] px-6 py-3">
                <p className="font-['Press_Start_2P'] text-[#ffe29a] text-xs sm:text-sm leading-relaxed">
                  ⚡ JUNTOS PELA AMAZÔNIA ⚡
                </p>
              </div>
            </div>
          </div>

          {/* Signature */}
          <div className="text-center mt-8">
            <p className="font-['VT323'] text-[#32936f] text-xl sm:text-2xl">
              — O Curupira, Guardião da Selva
            </p>
          </div>
        </div>
      </div>

      {/* Bottom decorative plants */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-30">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#1f6032] to-transparent" style={{
          clipPath: 'polygon(0 40%, 3% 30%, 6% 50%, 9% 35%, 12% 55%, 15% 30%, 18% 50%, 21% 35%, 24% 60%, 27% 40%, 30% 55%, 33% 35%, 36% 50%, 39% 30%, 42% 55%, 45% 35%, 48% 60%, 51% 40%, 54% 55%, 57% 35%, 60% 50%, 63% 30%, 66% 55%, 69% 35%, 72% 60%, 75% 40%, 78% 55%, 81% 35%, 84% 50%, 87% 30%, 90% 55%, 93% 35%, 96% 50%, 99% 30%, 100% 40%, 100% 100%, 0 100%)'
        }} />
      </div>
    </section>
  )
}
