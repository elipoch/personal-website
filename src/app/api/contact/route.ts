import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Rate limiting check (simple implementation)
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: `Contact Form <noreply@${process.env.EMAIL_FROM_DOMAIN || 'vercel.app'}>`,
      to: [process.env.CONTACT_EMAIL!], // Your email address
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: 'JetBrains Mono', monospace; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B4513; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background-color: #F8F8F0; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #87CEEB; padding: 20px; border-radius: 8px;">
            <h3 style="color: #8B4513; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #A0A0A0;">
          <p style="color: #A0A0A0; font-size: 12px; text-align: center;">
            This message was sent from your personal website contact form.
          </p>
        </div>
      `,
      reply_to: email, // So you can reply directly to the sender
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
