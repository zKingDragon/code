import { Puzzle, Footprints, Search } from 'lucide-react'

export default function HowToPlaySection() {
  const gameplayFeatures = [
    {
      icon: Puzzle,
      title: 'RESOLVER PUZZLES',
      description: 'Desvende enigmas da floresta para abrir caminhos e descobrir segredos escondidos',
      color: '#d14728',
      tips: ['Use sua lógica', 'Observe o ambiente', 'Combine itens']
    },
    {
      icon: Footprints,
      title: 'FUGIR DO CURUPIRA',
      description: 'Escape do guardião quando ele aparecer! Seus passos invertidos podem confundir você',
      color: '#32936f',
      tips: ['Fique atento aos sons', 'Use esconderijos', 'Não olhe para trás!']
    },
    {
      icon: Search,
      title: 'RECOLHER PISTAS',
      description: 'Colete evidências sobre as verdadeiras intenções do Curupira e da expedição',
      color: '#ffe29a',
      tips: ['Examine documentos', 'Ouça conversas', 'Conecte os fatos']
    }
  ]

  return (
    <section id="como-jogar" className="relative bg-gradient-to-b from-[#1f6032] via-[#2c1810] to-[#1f6032] py-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-[10%] left-[5%] w-16 h-16 bg-[#32936f] rounded-full blur-xl animate-pulse" />
        <div className="absolute top-[60%] right-[10%] w-24 h-24 bg-[#d14728] rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[20%] left-[15%] w-20 h-20 bg-[#ffe29a] rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-['Press_Start_2P'] text-[#ffe29a] text-xl sm:text-2xl mb-4 drop-shadow-[0_2px_0_rgba(209,71,40,1)]">
            COMO JOGAR
          </h2>
          <p className="font-['VT323'] text-[#32936f] text-xl sm:text-2xl max-w-3xl mx-auto">
            Domine as mecânicas principais para sobreviver na selva
          </p>
        </div>

        {/* Main gameplay grid */}
        <div className="max-w-6xl mx-auto space-y-8">
          {gameplayFeatures.map((feature, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              {/* Icon/Visual side */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="bg-[#3b2618] border-8 border-[#2c1810] p-8" style={{
                  boxShadow: '8px 8px 0 0 rgba(44,24,16,0.8)'
                }}>
                  <div 
                    className="border-4 border-[#1f6032] p-12 flex items-center justify-center relative"
                    style={{ backgroundColor: feature.color }}
                  >
                    <feature.icon className="w-32 h-32 text-[#ffe29a] drop-shadow-[4px_4px_0_rgba(0,0,0,0.3)]" strokeWidth={2.5} />
                    
                    {/* Pixel corners */}
                    <div className="absolute top-2 left-2 w-4 h-4 bg-[#ffe29a] pixelated" />
                    <div className="absolute top-2 right-2 w-4 h-4 bg-[#ffe29a] pixelated" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 bg-[#ffe29a] pixelated" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 bg-[#ffe29a] pixelated" />
                  </div>
                </div>
              </div>

              {/* Text/Info side */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="bg-[#3b2618] border-8 border-[#2c1810] p-8 h-full" style={{
                  boxShadow: '8px 8px 0 0 rgba(44,24,16,0.8)'
                }}>
                  {/* Step number */}
                  <div className="inline-block bg-[#d14728] border-4 border-[#1f6032] px-4 py-2 mb-4">
                    <span className="font-['Press_Start_2P'] text-[#ffe29a] text-sm">
                      PASSO {index + 1}
                    </span>
                  </div>

                  <h3 
                    className="font-['Press_Start_2P'] text-sm sm:text-base mb-4 leading-relaxed"
                    style={{ color: feature.color }}
                  >
                    {feature.title}
                  </h3>

                  <p className="font-['VT323'] text-[#ffe29a] text-xl sm:text-2xl mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Tips box */}
                  <div className="bg-[#2c1810] border-4 border-[#32936f] p-4">
                    <p className="font-['Press_Start_2P'] text-[#32936f] text-xs mb-3">
                      ⚡ DICAS:
                    </p>
                    <ul className="space-y-2">
                      {feature.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="font-['VT323'] text-[#ffe29a] text-lg flex items-start gap-2">
                          <span className="text-[#d14728] mt-1">▸</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls info */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-[#3b2618] border-8 border-[#2c1810] p-8" style={{
            boxShadow: '8px 8px 0 0 rgba(44,24,16,0.8)'
          }}>
            <h3 className="font-['Press_Start_2P'] text-[#ffe29a] text-sm sm:text-base text-center mb-6">
              🎮 CONTROLES BÁSICOS
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { key: 'W A S D', action: 'MOVER' },
                { key: 'SPACE', action: 'INTERAGIR' },
              ].map((control, index) => (
                <div key={index} className="bg-[#2c1810] border-4 border-[#32936f] p-4 text-center">
                  <div className="bg-[#d14728] border-2 border-[#1f6032] px-3 py-2 mb-2">
                    <span className="font-['Press_Start_2P'] text-[#ffe29a] text-xs">
                      {control.key}
                    </span>
                  </div>
                  <p className="font-['VT323'] text-[#32936f] text-lg">
                    {control.action}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
