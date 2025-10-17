export default function Skills() {
  const skills = [
    'Data Quality & Observability',
    'Data Governance & Compliance', 
    'Data Lineage & Metadata Management',
    'Consultative & Value-Based Selling',
    'Technical Pre-Sales & POCs',
    'Master Data Management',
    'Data Architecture & Integration',
    'AI-Driven Data Management',
  ]

  return (
    <section className="py-20 px-6 bg-palette-soft-blue/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-normal text-palette-warm-brown mb-4">
            Skills & Expertise
          </h2>
          <p className="text-sm text-palette-soft-gray max-w-2xl mx-auto font-mono">
            Technologies and areas I work with
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="text-center">
              <h3 className="text-sm font-mono text-palette-warm-brown mb-2">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
