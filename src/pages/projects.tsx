import Link from 'next/link';
import { prefix } from '@/utils/path';

export default function Projects() {
  const projects = [
    {
      title: 'Phoenix Liquid Cooling Facility',
      desc: 'Complete end-to-end deployment of a liquid-cooled AI data center with Vertiv UPS, BMS, and VESDA systems.',
      image: `${prefix}/projects/phoenix.jpg`, // prefix
    },
    {
      title: 'New York Hybrid Cloud Deployment',
      desc: 'Integrated SharePoint-based documentation and full IT network buildout with access control and structured cabling.',
      image: `${prefix}/projects/nyc.jpg`,
    },
    {
      title: 'Mexico Low-Voltage Campus',
      desc: 'Delivered CCTV, paging, and structured cabling for a new enterprise hub, fully compliant with U.S. safety standards.',
      image: `${prefix}/projects/mexico.jpg`,
    },
  ];

  return (
    <main className="w-full bg-gradient-to-b from-white to-blue-50">

    {/* === Section1 ：Project Stripes === */}
    <section id="projects" className="max-w-7xl mx-auto text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 mb-4">
        Project Highlights
      </h1>
      <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-16">
        End-to-end AI infrastructure delivery across North America—from design to deployment.
      </p>

      {/* Project stripes */}
      <div className="space-y-16">
        {projects.map((p, i) => (
          <article
            key={i}
            className={`flex flex-col md:flex-row items-center gap-8
                        ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Image */}
            <div className="md:w-1/2 w-full rounded-2xl overflow-hidden shadow-lg">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4">{p.title}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section id="contact" className="relative bg-gradient-to-r from-blue-50 to-blue-100 text-center py-20 px-4 mt-24">
      {/* background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-multiply"
        style={{ backgroundImage: `url(${prefix}/images/datacenter-bg.jpg)` }}
      />

      {/* content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-snug">
          Ready to power your AI infrastructure?
        </h2>
        <p className="text-gray-700 mb-8 text-xl leading-relaxed">
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
