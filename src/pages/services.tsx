// pages/services.tsx
import Link from 'next/link';

// Heroicons
import {
  CpuChipIcon,
  CloudIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import { prefix } from '@/utils/path';

export default function Services() {
  const sections = [
    {
      id: 'system',
      title: 'System Integration',
      desc: 'Deploy multi-vendor enterprise systems for AI, HPC, and commercial networks.',
      long: `• 15+ years of telecom and data center experience
• SDN, HCI, server/storage, and enterprise wireless design
• Cisco/Dell/H3C/Fortinet multi-vendor compatibility
• Case studies: logistics hubs, architecture firms, AI compute clusters`,
      Icon: CpuChipIcon,
    },
    {
      id: 'cloud',
      title: 'Enterprise IT & Cloud Management',
      desc: 'Cloud migration, security monitoring, and managed IT services at scale.',
      long: `• End-to-end IT service delivery with VPN and hybrid cloud
• Cloud migration and server observability dashboards
• Vulnerability scans, intrusion alerts, employee security training
• Experience across CA, VA, TX data centers with 24/7 support`,
      Icon: CloudIcon,
    },
    {
      id: 'idc',
      title: 'IDC Design & Smart Hands',
      desc: 'Hands-on deployment and support for colocation, AI-ready racks, and infrastructure.',
      long: `• Rack-and-stack, cable trays, and UPS/rPDU wiring
• Liquid cooling, containment, and fire suppression (VESDA)
• On-site troubleshooting, CCTV/network testing, and programming
• Daily safety oversight (5S, PPE), quality inspections, prefabrication`,
      Icon: WrenchScrewdriverIcon,
    },
    {
      id: 'document',
      title: 'Enterprise Document Management',
      desc: 'Custom document systems with audit logging, access control, and file indexing.',
      long: `• DMS platforms for structured metadata and compliance logging
• Secure file management: internal sharing, external auditing
• SharePoint, hybrid-cloud storage integration
• Focus: healthcare, engineering, public works with regulatory needs`,
      Icon: DocumentTextIcon,
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero */}
      <section
        className="relative w-full py-32 px-4 text-center text-white"
        style={{
          backgroundImage: `url(${prefix}/images/banner5.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300 mb-6">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
            With 15+ years of expertise, Galaxy3 delivers end-to-end AI-scale infrastructure and IT
            solutions—from edge systems to cloud integrations and document management.
          </p>
        </div>
      </section>


      {/* Service Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map(({ id, title, desc, Icon }, i) => {
            const variants = [
              { bg: 'from-blue-50 to-white', color: 'text-blue-700' },
              { bg: 'from-indigo-50 to-white', color: 'text-indigo-700' },
              { bg: 'from-purple-50 to-white', color: 'text-purple-700' },
              { bg: 'from-rose-50 to-white', color: 'text-rose-700' },
            ];
            const { bg, color } = variants[i % variants.length];

            return (
              <Link key={id} href={`#${id}`} className="group">
                <div className={`h-full flex flex-col justify-between bg-gradient-to-tr ${bg} rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition`}>
                  <div>
                    <Icon className={`w-12 h-12 ${color} mb-4`} />
                    <h2 className={`text-xl font-semibold ${color} mb-2`}>{title}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Details */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {sections.map(({ id, title, long }, i) => {
            const bgVariants = [
              'from-blue-50 to-white',
              'from-indigo-50 to-white',
              'from-purple-50 to-white',
              'from-rose-50 to-white',
            ];
            const bg = bgVariants[i % bgVariants.length];

            const titleColors = [
              'text-blue-700',
              'text-indigo-700',
              'text-purple-700',
              'text-rose-700',
            ];
            const titleColor = titleColors[i % titleColors.length];

            return (
              <div
                key={id}
                id={id}
                className={`scroll-mt-28 rounded-xl shadow-md bg-gradient-to-br ${bg} p-8 md:p-10`}
              >
                <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${titleColor}`}>{title}</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base sm:text-lg">
                  {long.split('\n').map((item, idx) => (
                    <li key={idx}>{item.replace(/^•\s*/, '')}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}