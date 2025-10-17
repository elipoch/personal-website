export default function AboutHero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
              <div className="space-y-8 text-gray-600 font-mono leading-relaxed">
                <div>
                  <h3 className="text-lg font-mono font-normal text-palette-warm-brown mb-3">WHO I AM</h3>
                  <p className="text-sm">
                    I'm a Sales Engineer passionate about all things data — helping organizations build trust, drive value, and see the bigger picture behind every dataset. I love connecting technology and people, translating complex data management concepts into clear, impactful solutions that make sense for everyone involved.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-mono font-normal text-palette-warm-brown mb-3">WHAT I OFFER</h3>
                  <p className="text-sm">
                    At <a href="https://www.ataccama.com/" target="_blank" rel="noopener noreferrer" className="text-palette-warm-brown hover:text-palette-dark-brown underline">Ataccama</a>, a unified data trust platform, I specialize in Data Quality, Data Governance, and Master Data Management. I help enterprise and strategic customers unlock the full potential of their data and build solutions that work effortlessly — and that they genuinely love.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-mono font-normal text-palette-warm-brown mb-3">WHAT I DO FOR FUN</h3>
                  <p className="text-sm">
                    Outside of work, I'm usually exploring new data/AI tools, experimenting with my 3d printer, learning more about functional product design and art in general or hunting down the perfect flat white.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 mt-12">
                <a
                  href="/contacts"
                  className="inline-flex items-center px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors font-mono text-sm"
                >
                  LET'S CONNECT
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-8 py-3 text-gray-900 border border-gray-300 hover:bg-gray-50 transition-colors font-mono text-sm"
                >
                  DOWNLOAD RESUME
                </a>
              </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-lg overflow-hidden">
              <img 
                src="/pics/about_me_photo.png" 
                alt="Eliza Pochinova" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
