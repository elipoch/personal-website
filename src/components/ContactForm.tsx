'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="bg-palette-cream">
      <h2 className="text-xl font-mono font-normal text-palette-warm-brown mb-8">GET IN TOUCH</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="field-container">
            <label htmlFor="name" className="block text-xs font-mono text-palette-soft-gray mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full notebook-field"
              placeholder="Your name"
            />
          </div>
          <div className="field-container">
            <label htmlFor="email" className="block text-xs font-mono text-palette-soft-gray mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full notebook-field"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        <div className="field-container">
          <label htmlFor="subject" className="block text-xs font-mono text-palette-soft-gray mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full notebook-field"
            placeholder="What's this about?"
          />
        </div>
        <div className="field-container">
          <label htmlFor="message" className="block text-xs font-mono text-palette-soft-gray mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full notebook-field"
            placeholder="Your message goes here"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-palette-warm-brown text-white py-3 px-6 rounded-lg font-mono text-sm hover:bg-palette-dark-brown transition-colors"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  )
}
