// pages/contact.tsx
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

interface InfoItemProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

function InfoItem({ icon, title, desc }: InfoItemProps) {
  return (
    <div className="flex items-start space-x-4">
      {/* icon */}
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

export default function ContactInfo() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Info</h2>

      {/* metric */}
      <div className="grid gap-12 max-w-5xl mx-auto
                      grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <InfoItem
          icon={<PhoneIcon className="w-6 h-6" />}
          title="Call Us"
          desc="+1 332-237-7696"
        />

        <InfoItem
          icon={<MapPinIcon className="w-6 h-6" />}
          title="Our Location"
          desc="260 Madison Avenue, 8th Floor, New York, NY 10016"
        />

        <InfoItem
          icon={<EnvelopeIcon className="w-6 h-6" />}
          title="Our Email"
          desc="info@galaxy3it.com"
        />
      </div>
    </section>
  );
}
