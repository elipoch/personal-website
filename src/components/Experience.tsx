export default function Experience() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications and mentoring junior developers.',
      achievements: [
        'Improved application performance by 40%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipelines',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Developed responsive web applications using React and modern JavaScript frameworks.',
      achievements: [
        'Built 15+ client websites',
        'Reduced page load times by 30%',
        'Implemented accessibility standards',
      ],
    },
    {
      title: 'Junior Developer',
      company: 'StartupXYZ',
      period: '2019 - 2020',
      description: 'Started my professional journey building web applications and learning best practices.',
      achievements: [
        'Completed 10+ projects',
        'Learned multiple frameworks',
        'Contributed to team code reviews',
      ],
    },
  ]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-mono font-normal text-palette-warm-brown mb-4">
              Work Experience
            </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto font-mono">
            My professional journey in the tech industry
          </p>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-b border-gray-200 pb-12 last:border-b-0">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                    <h3 className="text-lg font-mono font-normal text-palette-warm-brown mb-1">
                      {exp.title}
                    </h3>
                  <p className="text-sm text-gray-600 font-mono mb-2">
                    {exp.company}
                  </p>
                </div>
                <span className="text-gray-500 font-mono text-sm">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-600 mb-4 font-mono text-sm leading-relaxed">
                {exp.description}
              </p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="text-gray-600 font-mono text-sm">
                    • {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
