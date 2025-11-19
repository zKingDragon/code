import Image from 'next/image'

export default function CharactersSection() {
  const characters = [
    {
      name: 'EXPLORADORA',
      role: 'A Aventureira',
      description: 'Corajosa e destemida, sempre em busca da próxima aventura. Se prepare para jogar com ela.',
      color: '#d14728',
      bgColor: '#1f6032',
      image: '/aventureiraFrente.gif'
    },
    {
      name: 'O SENHOR DA CABANA',
      role: 'Antigo Morador',
      description: 'Inteligente e cauteloso, prefere planejar cada movimento. Mestre em resolver puzzles.',
      color: '#32936f',
      bgColor: '#2c1810',
      image: '/aventureiraFrente.gif'
    },
    {
      name: 'CHEFE DA EMPRESA',
      role: 'O Ambicioso',
      description: 'Misterioso líder da expedição. Será que suas intenções são realmente nobres?',
      color: '#ffe29a',
      bgColor: '#3b2618',
      image: '/aventureiraFrente.gif'
    },
    {
      name: 'CURUPIRA',
      role: 'Guardião da Floresta',
      description: 'Protetor ancestral da selva. Com pés virados para trás, ele caça aqueles que ameaçam a natureza.',
      color: '#d14728',
      bgColor: '#1f6032',
      image: '/curupiraBaseFrente.gif'
    }
  ]

  return (
    <section id="personagens" className="relative bg-[#2c1810] py-16 overflow-hidden">
      {/* Decorative jungle elements */}
      <div className="absolute top-0 left-0 w-full h-24 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f6032] to-transparent" style={{
          clipPath: 'polygon(0 0, 5% 40%, 10% 20%, 15% 50%, 20% 30%, 25% 60%, 30% 20%, 35% 50%, 40% 30%, 45% 60%, 50% 20%, 55% 50%, 60% 30%, 65% 60%, 70% 20%, 75% 50%, 80% 30%, 85% 60%, 90% 20%, 95% 50%, 100% 0, 100% 100%, 0 100%)'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-['Press_Start_2P'] text-[#ffe29a] text-xl sm:text-2xl text-center mb-4 drop-shadow-[0_2px_0_rgba(209,71,40,1)]">
          PERSONAGENS
        </h2>
        <p className="font-['VT323'] text-[#32936f] text-xl sm:text-2xl text-center mb-12">
          Conheça os protagonistas desta aventura pixelada
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {characters.map((character, index) => (
            <div 
              key={index}
              className="group bg-[#3b2618] border-8 border-[#2c1810] p-6 hover:border-[#d14728] transition-all duration-300 hover:-translate-y-2"
              style={{
                boxShadow: '6px 6px 0 0 rgba(44,24,16,0.8)',
              }}
            >
              {/* Character pixel art placeholder */}
              <div className="relative mb-6">
                <div 
                  className="w-full aspect-square border-4 border-[#1f6032] flex items-center justify-center pixelated relative overflow-hidden"
                  style={{ backgroundColor: character.bgColor }}
                >
                  {/* Pixel art frame effect */}
                  <div className="absolute inset-0 border-4 border-[#32936f]/20" />
                  <div className="absolute inset-4 border-4 border-[#32936f]/10" />
                  
                  {/* Character icon or image */}
                  <Image 
                    src={character.image} 
                    alt={character.name}
                    width={280}
                    height={280}
                    className="pixelated object-contain transform group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Scanline effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000]/10 to-transparent pointer-events-none" 
                    style={{
                      backgroundSize: '100% 4px',
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)'
                    }}
                  />
                </div>

              </div>

              {/* Character info */}
              <div className="text-center">
                <h3 
                  className="font-['Press_Start_2P'] text-xs sm:text-sm mb-2 leading-relaxed"
                  style={{ color: character.color }}
                >
                  {character.name}
                </h3>
                
                <div className="bg-[#2c1810] border-2 border-[#32936f] px-2 py-1 mb-3 inline-block">
                  <p className="font-['VT323'] text-[#ffe29a] text-base">
                    {character.role}
                  </p>
                </div>

                <p className="font-['VT323'] text-[#32936f] text-lg leading-relaxed">
                  {character.description}
                </p>
              </div>

              {/* Stats bar decoration - only for first character */}
              {index === 0 && (
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-['Press_Start_2P'] text-[#ffe29a] text-xs">HP</span>
                    <div className="flex-1 h-3 bg-[#2c1810] border-2 border-[#1f6032]">
                      <div 
                        className="h-full bg-[#d14728]"
                        style={{ width: `${80 + (index * 5)}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-['Press_Start_2P'] text-[#ffe29a] text-xs">MP</span>
                    <div className="flex-1 h-3 bg-[#2c1810] border-2 border-[#1f6032]">
                      <div 
                        className="h-full bg-[#32936f]"
                        style={{ width: `${60 + (index * 10)}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
