'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear status when user starts typing
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle')
      setErrorMessage('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Failed to send message')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
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
        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg font-mono text-sm">
            ✅ Thank you! Your message has been sent successfully. I'll get back to you soon.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg font-mono text-sm">
            ❌ {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-lg font-mono text-sm transition-colors ${
            isSubmitting
              ? 'bg-palette-soft-gray text-gray-500 cursor-not-allowed'
              : 'bg-palette-warm-brown text-white hover:bg-palette-dark-brown'
          }`}
        >
          {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
        </button>
      </form>
    </div>
  )
}
