export default function ContactInfo() {
  const contactMethods = [
    {
      icon: 'Email',
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: 'Phone',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: 'Location',
      title: 'Location',
      value: 'San Francisco, CA',
      link: '#',
    },
    {
      icon: 'LinkedIn',
      title: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      link: 'https://linkedin.com/in/yourprofile',
    },
    {
      icon: 'GitHub',
      title: 'GitHub',
      value: 'github.com/yourusername',
      link: 'https://github.com/yourusername',
    },
    {
      icon: 'Twitter',
      title: 'Twitter',
      value: '@yourusername',
      link: 'https://twitter.com/yourusername',
    },
  ]

  return (
    <div className="bg-gray-50 p-8">
      <h2 className="text-xl font-editorial font-normal text-gray-900 mb-8">Contact Information</h2>
      <div className="space-y-6">
        {contactMethods.map((method, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
            <h3 className="font-mono text-sm text-gray-900 mb-1">{method.title}</h3>
            <a
              href={method.link}
              className="text-gray-600 hover:text-gray-900 transition-colors font-mono text-sm"
              target={method.link.startsWith('http') ? '_blank' : undefined}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {method.value}
            </a>
          </div>
        ))}
      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-editorial font-normal text-gray-900 mb-4">Let's work together!</h3>
        <p className="text-gray-600 mb-4 font-mono text-sm leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities 
          to be part of your vision.
        </p>
        <p className="text-gray-600 font-mono text-sm">
          <strong className="font-mono">Response time:</strong> Usually within 24 hours
        </p>
      </div>
    </div>
  )
}
