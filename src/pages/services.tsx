// pages/services.tsx
import Link from 'next/link';
import { prefix } from '@/utils/path';

// Heroicons
import {
  CpuChipIcon,
  CloudIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

export default function Services() {
  const sections = [
    {
      id: 'system',
      title: 'System Integration',
      desc: 'Support business workloads via multi-vendor infrastructure, virtualization, SDN, HCI, Server & Storage, Wireless networks.',
      long: 'We integrate multi-vendor technologies to form scalable, reliable systems that power AI and enterprise workloads. From virtualization and HCI to SDN and secure wireless networks, our engineers ensure end-to-end compatibility and performance.',
      Icon: CpuChipIcon,
    },
    {
      id: 'cloud',
      title: 'Enterprise IT & Cloud Management',
      desc: 'Manage performance monitoring, VPN, backups, cloud migration, managed services, vulnerability scans, intrusion detection, security training.',
      long: 'Our IT services include robust cloud migration, VPN deployment, and continuous performance monitoring. We also provide managed services, remote backups, and cyber risk protection with security scans, training, and compliance-ready monitoring.',
      Icon: CloudIcon,
    },
    {
      id: 'idc',
      title: 'IDC Design & Smart Hands',
      desc: 'Rack-and-Stack, structured cabling, programming, on-site troubleshooting, CCTV and wireless design/installation, remote monitoring.',
      long: 'We deliver complete physical infrastructure services from IDC layout and rack-and-stack to structured cabling and remote monitoring. Our smart hands teams support everything from hardware setup to troubleshooting and CCTV deployment.',
      Icon: WrenchScrewdriverIcon,
    },
    {
      id: 'document',
      title: 'Enterprise Document Management',
      desc: 'Custom DMS platforms, version tracking, metadata indexing, file collaboration, internal/external file management.',
      long: 'Our custom-built Document Management Systems (DMS) offer secure version control, metadata search, and collaborative tools. We help organizations streamline their digital records while maintaining regulatory and access compliance.',
      Icon: DocumentTextIcon,
    },
  ];


  return (
    <main className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-600 mb-4">
          Our Services
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg sm:text-xl">
          With 15+ years of expertise, Galaxy3 delivers end-to-end AI-scale infrastructure and IT
          solutions—from edge systems to cloud integrations and document management.
        </p>
      </section>

      {/* Service Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map(({ id, title, desc, Icon }) => (
            <Link key={id} href={`#${id}`} className="group">
              <div className="bg-gradient-to-tr from-white to-blue-50 rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition">
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h2 className="text-xl font-semibold text-blue-700 mb-2">{title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {sections.map(({ id, title, long }, i) => {
            // background color
            const bgVariants = [
              'from-blue-50 to-white',
              'from-indigo-50 to-white',
              'from-purple-50 to-white',
              'from-slate-50 to-white',
            ];
            const bg = bgVariants[i % bgVariants.length];

            const titleColors = [
              'text-blue-700',
              'text-indigo-700',
              'text-purple-700',
              'text-gray-800',
            ];
            const titleColor = titleColors[i % titleColors.length];

            return (
              <div
                key={id}
                id={id}
                className={`scroll-mt-28 rounded-xl shadow-md bg-gradient-to-br ${bg} p-8 md:p-10`}
              >
                <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${titleColor}`}>
                  {title}
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {long}
                </p>
              </div>
            );
          })}
        </div>
      </section>




      {/* CTA Section */}
      <section
        id="contact"
        className="relative bg-gradient-to-r from-blue-50 to-blue-100 text-center py-20 px-4"
      >
        {/* background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-multiply"
          style={{ backgroundImage: `url(${prefix}/images/datacenter-bg.jpg)` }}
        />

        {/* content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-snug">
            Ready to power your AI infrastructure?
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            Let our engineering team design, build, and support your next-generation data center.
          </p>
          <Link href="/contact">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition duration-300">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
