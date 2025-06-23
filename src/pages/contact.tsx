import { useState } from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

interface InfoItemProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}


function InfoItem({ icon, title, desc }: InfoItemProps) {
  return (
    <div className="flex items-start space-x-4">
      {/* icon container */}
      <div className="shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
        {icon}
      </div>

      {/* text */}
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  // Fake submit handler — replace with real API / Formspree if needed
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="py-20 px-4">
      {/*header*/}
      <h1 className="text-4xl font-bold text-center mb-16">Contact Us</h1>

      {/*info cards*/}
      <section className="mb-24">
        <div className="grid gap-12 max-w-5xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <InfoItem icon={<PhoneIcon className="w-6 h-6" />} title="Call Us"       desc="+1 332-237-7696" />
          <InfoItem icon={<MapPinIcon className="w-6 h-6" />} title="Our Location" desc="260 Madison Avenue, 8th Floor, New York, NY 10016" />
          <InfoItem icon={<EnvelopeIcon className="w-6 h-6" />} title="Our Email"   desc="info@galaxy3it.com" />
        </div>
      </section>

      {/*Section 3: quick message form*/}
      <section className="max-w-xl mx-auto bg-white/60 backdrop-blur rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
          Send Us a Message
        </h2>

        {sent ? (
          <p className="text-green-600 font-medium text-center">
            ✔️ Thank you! We&apos;ll get back to you shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 w-full rounded-md border-gray-300 p-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 w-full rounded-md border-gray-300 p-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 w-full rounded-md border-gray-300 p-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
