import { prefix } from '@/utils/path';

export default function Projects() {
  const projects = [
    {
      title: 'Phoenix Liquid Cooling Facility',
      desc: 'Complete end-to-end deployment of a liquid-cooled AI data center with Vertiv UPS, BMS, and VESDA systems.',
      image: `${prefix}/projects/phoenix.jpg`,
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
    {
      title: 'Wisconsin Manufacturing Facility',
      desc: 'Provided campus-wide network infrastructure, cabling, wireless access, and secure server room design for a Fortune 500 factory.',
      image: `${prefix}/projects/wisconsin.jpg`,
    },
    {
      title: 'Ashburn VA Data Center',
      desc: 'Implemented CCTV, access control, and smart hands services for a cybersecurity firm. Included rack and stack, WiFi, and electrical systems.',
      image: `${prefix}/projects/ashburn.jpg`,
    },
    {
      title: 'Passive DAS System Deployment',
      desc: 'Designed and deployed low-cost passive DAS and WiFi optimization solutions for banks and manufacturing clients.',
      image: `${prefix}/projects/das.jpg`,
    },
  ];


  return (
    <main className="w-full bg-gradient-to-b from-white to-blue-50">

    {/* === Section1 ：Project Stripes === */}
    <section
  id="projects"
  className="relative w-full py-32 px-4 text-center text-white"
  style={{
    backgroundImage: `url(${prefix}/images/hero-datacenter2.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="absolute inset-0 bg-black/50 z-0" />

  <div className="relative z-10 max-w-7xl mx-auto">
    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-300 to-indigo-300 mb-4">
      Project Highlights
    </h1>
    <p className="text-white/90 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-16">
      End-to-end AI infrastructure delivery across North America—from design to deployment.
    </p>

    <div className="space-y-16">
      {projects.map((p, i) => (
        <article
          key={i}
          className={`flex flex-col md:flex-row items-center gap-8 ${
            i % 2 === 1 ? 'md:flex-row-reverse' : ''
          }`}
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
          <div className="md:w-1/2 w-full text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{p.title}</h2>
            <p className="text-white/90 text-lg leading-relaxed">{p.desc}</p>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>


  </main>

  );
}
