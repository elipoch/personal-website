import ContactForm from '@/components/ContactForm'
import ContactLocation from '@/components/ContactLocation'

export default function Contacts() {
  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactLocation />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
