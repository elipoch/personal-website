export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      period: '2015 - 2019',
      description: 'Graduated with honors, focusing on software engineering and algorithms.',
      gpa: '3.8/4.0',
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Tech Academy',
      period: '2019',
      description: 'Intensive 6-month program covering modern web development technologies.',
      gpa: 'Certificate',
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-mono font-normal text-palette-warm-brown mb-4">
              Education
            </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto font-mono">
            My educational background and continuous learning journey
          </p>
        </div>
        
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="border-b border-gray-200 pb-12 last:border-b-0">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                    <h3 className="text-lg font-mono font-normal text-palette-warm-brown mb-1">
                      {edu.degree}
                    </h3>
                  <p className="text-sm text-gray-600 font-mono mb-2">
                    {edu.institution}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 font-mono text-sm block">
                    {edu.period}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    {edu.gpa}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 font-mono text-sm leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
