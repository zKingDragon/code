export default function Footer() {
  return (
    <footer className="bg-[#2c1810] border-t-4 border-[#1f6032] py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="font-['Press_Start_2P'] text-[#ffe29a] text-xs mb-4">
            CORAÇÃO DA MATA © 2025
          </p>
          <p className="font-['VT323'] text-[#32936f] text-lg">
            Desenvolvido com ♥ para amantes de jogos retrô
          </p>
        </div>
        
        {/* Pixel texture effect */}
        <div className="mt-6 h-4 opacity-30" style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            #32936f,
            #32936f 8px,
            transparent 8px,
            transparent 16px
          )`
        }} />
      </div>
    </footer>
  )
}
