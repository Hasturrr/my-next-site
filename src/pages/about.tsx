import { prefix } from "@/utils/path";
import { LightBulbIcon, ChartBarIcon, RocketLaunchIcon, ClockIcon, CloudIcon } from '@heroicons/react/24/solid';

/*for mission section*/
const values = [
  {
    title: 'Client Focus',
    desc: "We focus on our clients’ challenges and technical pain points to deliver tailored solutions.",
    icon: <LightBulbIcon className="w-8 h-8 text-white" />,
  },
  {
    title: 'Business Value',
    desc: "We deliver measurable business outcomes through expert IT services.",
    icon: <ChartBarIcon className="w-8 h-8 text-white" />,
  },
  {
    title: 'Growth Enablement',
    desc: "We empower our customers to focus on their core business and scale with confidence.",
    icon: <RocketLaunchIcon className="w-8 h-8 text-white" />,
  },
  {
    title: 'Reliable Delivery',
    desc: "We commit to delivering high-quality services on time and with precision.",
    icon: <ClockIcon className="w-8 h-8 text-white" />,
  },
  {
    title: 'Cloud + Local Strength',
    desc: "We combine cloud flexibility with reliable local delivery models.",
    icon: <CloudIcon className="w-8 h-8 text-white" />,
  },
];

export default function About() {
  return (
    <main className="w-full text-gray-800">
      {/* Section 1 - introduction */}
      <section
        id="about"
        className="relative w-full py-32 px-6 text-white"
        style={{
          backgroundImage: `url(${prefix}/images/about-bg2.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 backdrop-blur-sm z-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="md:pr-10">
            <h1
              className="text-5xl font-extrabold mb-6 tracking-wide text-white"
              style={{
                textShadow: '0 4px 12px rgba(0,0,0,0.7), 0 0 8px rgba(0,153,255,0.3)',
              }}
            >
              About Galaxy3
            </h1>

            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mb-4 rounded-full" />

            <p className="text-lg mb-4 leading-relaxed text-blue-100">
              Galaxy3 is a New York-based engineering and IT service company with offices in California, Arizona, and Mexico. We specialize in building high-performance infrastructure for AI-powered computing and hybrid cloud systems.
            </p>
            <p className="text-lg leading-relaxed text-blue-100">
              With 15+ years of average engineer experience, we design, build, and manage next-gen data centers that power the future.
            </p>
          </div>

          {/* Image */}
          <div className="w-full">
            <img
              src={`${prefix}/images/office-team.jpg`}
              alt="Galaxy3 Team"
              className="w-full max-w-xl mx-auto object-cover rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section>




      {/* Section 2 - mission */}
      <section className="w-full bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800">Our Mission & Values</h2>
          <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
            We are committed to delivering business-aligned IT services with focus, speed, and reliability.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
          {values.map((val, i) => (
            <div
              key={i}
              className="w-full sm:w-[45%] lg:w-[30%] bg-white rounded-xl shadow-md p-6 text-left hover:shadow-xl transition"
            >
              <div className="w-12 h-12 mb-4 rounded-full bg-blue-600 flex items-center justify-center">
                {val.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{val.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Section 3 - group*/}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="md:pr-10">
            <h2 className="text-3xl font-bold mb-6 text-blue-800 tracking-wide">
              Expertise & Certifications
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Our team includes 20+ professionals with certifications such as CCIE, CCNP, MCSE, and cloud expertise.
              We are licensed in California and Arizona (C10/C11), with extensive experience in low-voltage systems.
            </p>
            <p className="leading-relaxed text-gray-700">
              From MEP design to structured cabling, surveillance, paging, and AI server infrastructure—we deliver from planning to execution.
            </p>
          </div>
          <div className="flex items-center justify-center gap-6 flex-wrap bg-white p-6 rounded-2xl shadow-xl">
            <img
              src={`${prefix}/images/banner_mid.png`}
              alt="Main Certifications"
              className="h-32 object-contain"
            />
            <img
              src={`${prefix}/images/certified1.png`}
              alt="Google Cloud Certification"
              className="h-32 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Section 4 - partner */}
      <section className="w-full bg-blue-25 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* image left */}
          <div className="order-1 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center items-center">
              {[1, 2, 7, 4, 8, 9, 10, 11, 6].map((n) => (
                <div
                  key={n}
                  className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={`${prefix}/images/partner${n}.png`}
                    alt={`Partner ${n}`}
                    className="h-16 sm:h-20 md:h-24 object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* text right */}
          <div className="order-2 md:pl-10">
            <h2 className="text-3xl font-bold mb-6 text-blue-800 tracking-wide">
              Partnership & Delivery
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700 text-lg">
              We maintain strong partnerships with top-tier U.S. suppliers, such as Vertiv, to ensure seamless integration and performance.
              Our structured delivery model includes safety, quality, and scheduling controls to guarantee smooth execution.
            </p>
            <p className="leading-relaxed text-gray-700 text-lg">
              From design drawings to prefabrication, installation, and commissioning—Galaxy3 provides full ownership and accountability.
            </p>
          </div>
        </div>
      </section>


      {/* Section 5 - wish */}
      <section className="bg-blue-25 py-24 px-6 text-center relative">
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-blue-700 text-2xl sm:text-3xl font-semibold italic border-l-4 border-blue-300 pl-6 leading-relaxed">
            &quot;At Galaxy3, we don&apos;t just build infrastructure — we empower the future of AI, one data center at a time.&quot;
          </blockquote>
        </div>
      </section>

    </main>
  );
}
