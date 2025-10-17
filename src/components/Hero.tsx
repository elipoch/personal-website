export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-palette-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
              <h1 className="text-5xl md:text-7xl font-mono font-normal text-palette-warm-brown mb-8 leading-tight">
                Hi, I'm{' '}
                <span className="font-medium text-palette-dark-brown">Eliza</span>
              </h1>
            <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="/about"
                  className="inline-flex items-center px-8 py-3 text-palette-warm-brown border border-palette-soft-gray rounded-lg hover:bg-palette-soft-blue hover:text-white transition-colors font-mono text-sm"
                >
                  ABOUT ME
                </a>
                <a
                  href="/contacts"
                  className="inline-flex items-center px-8 py-3 bg-palette-warm-brown text-white rounded-lg hover:bg-palette-dark-brown transition-colors font-mono text-sm"
                >
                  GET IN TOUCH
                </a>
            </div>
          </div>
            <div className="flex items-center">
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-palette-soft-gray font-mono leading-relaxed">
                  I believe data should work{' '}
                  <span className="text-palette-soft-blue">for</span> people,{' '}
                  <span className="text-red-700">not against</span> them.
                </p>
                <p className="text-lg md:text-xl text-palette-soft-gray font-mono leading-relaxed">
                  I help enterprise teams build trusted data foundations and see real results — with solutions they enjoy using and rely on every day.
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
