'use client'

import { useState } from 'react'

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'professional' | 'personal'>('professional')

  const professionalProjects = [
    {
      title: 'WIP',
      description: 'Work in progress',
      technologies: ['TO', 'BE', 'ADDED', 'SOON'],
    },
  ]

  const personalProjects = [
    {
      title: '3D PRINTING',
      description: 'Modeling and printing things',
      technologies: ['Bambu Lab P1P', 'Shapr3D'],
      links: [
        { name: 'Model 1', url: '#' },
        { name: 'Model 2', url: '#' },
        { name: 'Model 3', url: '#' },
        { name: 'Model 4', url: '#' },
        { name: 'Model 5', url: '#' },
      ],
    },
    {
      title: 'FUSE FACADE FINDS',
      description: 'Sharing beauty of ordinary things, one electric box at a time',
      technologies: [],
      links: [],
    },
    {
      title: 'WIP',
      description: 'Work in progress',
      technologies: [],
      links: [],
    },
  ]

  const currentProjects = activeTab === 'professional' ? professionalProjects : personalProjects
  const sectionBgColor = activeTab === 'professional' ? 'bg-palette-soft-blue/20' : 'bg-palette-light-brick-red/20'

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-normal text-palette-warm-brown mb-8">
            Featured Projects
          </h2>
          
          {/* Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-palette-cream border border-palette-soft-gray rounded-lg p-2">
              <button
                onClick={() => setActiveTab('professional')}
                className={`px-8 py-3 text-sm font-mono transition-colors rounded-md ${
                  activeTab === 'professional'
                    ? 'bg-palette-soft-blue text-white'
                    : 'text-palette-soft-gray hover:text-palette-warm-brown'
                }`}
              >
                PROFESSIONAL
              </button>
              <button
                onClick={() => setActiveTab('personal')}
                className={`px-8 py-3 text-sm font-mono transition-colors rounded-md ${
                  activeTab === 'personal'
                    ? 'bg-palette-light-brick-red text-white'
                    : 'text-palette-soft-gray hover:text-palette-warm-brown'
                }`}
              >
                PERSONAL
              </button>
            </div>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className={`${sectionBgColor} rounded-lg p-8`}>
          <div className="space-y-12">
            {currentProjects.map((project, index) => (
              <div key={index} className="border-b border-palette-soft-gray pb-12 last:border-b-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div>
                    <h3 className="text-xl font-mono font-normal text-palette-warm-brown mb-4">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-6 font-mono leading-relaxed">
                      {project.description}
                    </p>
                    {project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs text-gray-500 border border-gray-200 px-3 py-1 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    {project.links && project.links.length > 0 && (
                      <div className="space-y-2">
                        {project.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            className="block text-xs text-palette-warm-brown hover:text-palette-dark-brown font-mono underline"
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="h-64 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400 text-xs font-mono">Project Image</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}