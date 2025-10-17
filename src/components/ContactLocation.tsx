export default function ContactLocation() {
  return (
    <div className="bg-palette-soft-blue/20 p-8 rounded-lg">
      <p className="text-sm text-palette-soft-gray mb-8 font-mono leading-relaxed">
        I'm always up for great conversations and exciting opportunities. If you have an idea, a question, or just want to exchange perspectives, let's connect!
      </p>
      
      <div className="space-y-8">
        <div className="border-b border-palette-soft-gray pb-6">
          <div className="flex items-center space-x-3 mb-2">
            <svg className="w-5 h-5 text-palette-warm-brown" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <h3 className="font-mono text-sm text-palette-warm-brown">Location</h3>
          </div>
          <p className="text-palette-soft-gray font-mono text-sm">Amsterdam, NL</p>
        </div>
        
        <div className="border-b border-palette-soft-gray pb-6">
          <div className="flex items-center space-x-3 mb-2">
            <svg className="w-5 h-5 text-palette-warm-brown" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <h3 className="font-mono text-sm text-palette-warm-brown">LinkedIn</h3>
          </div>
          <a
            href="https://www.linkedin.com/in/elizavetapochinova/"
            className="text-palette-soft-gray hover:text-palette-warm-brown transition-colors font-mono text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/elizavetapochinova
          </a>
        </div>
      </div>
    </div>
  )
}
