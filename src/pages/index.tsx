import Head from 'next/head';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { prefix } from '@/utils/path'; 
import {
  WrenchScrewdriverIcon,
  CloudIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';
import PartnerScroll from '@/components/PartnerScroll';
import FrameworkSlider from '@/components/AboutScroll';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Galaxy3 AI Data Center</title>
        <meta name="description" content="Liquid-Cooled AI Data Center Experts" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800">

        {/* Hero Section */}
        <section
          id="hero"
          className="relative w-full py-24 px-6 text-center overflow-hidden"
        >
          {/* background image */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 blur-[1px] brightness-75"
            style={{ backgroundImage: `url(${prefix}/images/home-page.png)` }}
          />
          {/* dark radial overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-blue-900/30 to-blue-950/60" />

          {/* content */}
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : -30 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg"
            >
              Galaxy3 AI <br className="hidden md:block" /> Data Center Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: loaded ? 1 : 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-blue-100 drop-shadow"
            >
              We engineer next-generation AI infrastructure—liquid-cooled, high-density,
              and optimized for machine learning performance.
            </motion.p>

            <Link href="#contact" passHref>
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.95 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-white text-blue-700 px-8 py-3 rounded-full shadow-lg
                          hover:bg-gray-100 hover:scale-105 transition duration-300 font-semibold"
              >
                Get a Consultation
              </motion.button>
            </Link>
          </div>
        </section>

        {/* Partner Logos - Horizontal Scroll */} 
        <PartnerScroll />


        {/* Company Milestones / Metrics Section */}
        <section
          id="metrics"
          className="relative bg-white py-28 px-6 sm:px-12 overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-55 pointer-events-none"
            style={{ backgroundImage: `url(${prefix}/images/background-light.png)` }}
          />

          {/* container */}
          <div className="relative z-10 max-w-6xl mx-auto text-center space-y-20">

            {/* title */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-800 leading-tight">
                Milestones That Define Us
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                From our founding roots to global delivery, Galaxy3 has grown into a trusted name in AI data center engineering.
              </p>
            </div>

            {/* Milestone */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
              {[
                {
                  year: '2008',
                  title: 'Company Founded',
                  desc: 'Galaxy3 established in New York, delivering MEP and low-voltage solutions.',
                  color: 'bg-blue-50',
                },
                {
                  year: '2015',
                  title: 'West Coast Expansion',
                  desc: 'California & Arizona offices opened, supporting regional data center growth.',
                  color: 'bg-blue-100',
                },
                {
                  year: '2022',
                  title: 'AI Infrastructure Pivot',
                  desc: 'Shifted to liquid-cooled high-density systems for AI/ML workloads.',
                  color: 'bg-blue-200',
                },
              ].map((m, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-6 shadow-md hover:shadow-xl transition ${m.color}`}
                >
                  <div className="text-3xl font-bold text-blue-700 mb-2">{m.year}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{m.title}</h3>
                  <p className="text-gray-600 text-sm">{m.desc}</p>
                </div>
              ))}
            </div>

            {/* Metrics*/}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-12">
              {[
                { number: '200+', label: 'Customers Worldwide', color: 'text-green-600' },
                { number: '30+', label: 'Countries Served', color: 'text-yellow-500' },
                { number: '120+', label: 'Projects Delivered', color: 'text-sky-600' },
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className={`text-5xl font-extrabold ${item.color}`}>{item.number}</h3>
                  <p className="text-base text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/about" passHref>
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition font-semibold mt-8"
              >
                Learn more about our journey
              </motion.button>
            </Link>
          </div>
        </section>



        {/* Features Section */}
        <section id="features" className="px-4 sm:px-6 py-24 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-600 mb-4 leading-tight">
              Key Infrastructure Features
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Integrated cooling, cabling, power, and security systems tailored for AI-ready data centers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Liquid Cooling Deployment',
                desc: 'Expertise in cold plate and immersion systems for ultra-dense AI workloads.',
                img: '/projects/liquid-cooling.jpg',
              },
              {
                title: 'Structured Cabling & Power',
                desc: 'End-to-end cabling, rPDU, and UPS integration across hyperscale and edge facilities.',
                img: '/projects/cabling-power.jpg',
              },
              {
                title: 'Turnkey Data Center Delivery',
                desc: 'From concept to commissioning, including BMS, fire suppression, and project control.',
                img: '/projects/scale.jpg',
              },
            ].map(({ title, desc, img }, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100"
              >
                <div className="w-full h-80 bg-gray-50 flex items-center justify-center">
                  <img
                    src={`${prefix}${img}`}
                    alt={title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-bold text-blue-700 mb-3">{title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Solutions Section */}
        <section id="solutions" className="px-4 sm:px-6 py-20 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-600 mb-10 leading-tight">
              Our Solutions
            </h2>
            <p className="text-lg text-gray-700 mb-16 leading-relaxed max-w-3xl mx-auto">
              We provide full-cycle engineering, IT, and security solutions—from AI-focused construction and liquid cooling systems to project quality assurance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              {/* 1. Engineering & Construction */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition flex gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <WrenchScrewdriverIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">Engineering & Construction</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Liquid cooling AI data center design</li>
                    <li>Low voltage, HAC, busway, cable tray</li>
                    <li>Welding, cutting, forklifts, and aerial operations</li>
                  </ul>
                </div>
              </div>

              {/* 2. IT & Network Services */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition flex gap-4">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                  <CloudIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">IT & Network Services</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>IT network, WiFi, DAS design & installation</li>
                    <li>Hybrid cloud infrastructure & SharePoint</li>
                    <li>Network documentation & managed services</li>
                  </ul>
                </div>
              </div>

              {/* 3. Security & Compliance */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition flex gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <ShieldCheckIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Security & Compliance</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Access control & intrusion prevention</li>
                    <li>Daily safety training & PPE supervision</li>
                    <li>ISO/IEC 27001 compliance & VESDA</li>
                  </ul>
                </div>
              </div>

              {/* 4. Liquid Cooling & Innovation */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition flex gap-4">
                <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center">
                  <SparklesIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-700 mb-3">Liquid Cooling & Innovation</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>3,000x more efficient than air cooling</li>
                    <li>Supports high-density GPUs & CPUs</li>
                    <li>Vertiv UPS, rPDU, EPK integration</li>
                  </ul>
                </div>
              </div>

              {/* 5. Quality & Project Management */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition md:col-span-2 flex justify-center">
                <div className="max-w-3xl flex gap-4">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                    <ClipboardDocumentCheckIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-700 mb-3">Quality & Project Management</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Pressure, air-tightness testing & prefabrication</li>
                      <li>Schedule tracking, safety officer oversight</li>
                      <li>Full team governance: PMs, QC, installers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FrameworkSlider />

        {/* Market Trends Section */}
        <section id="trends" className="px-4 sm:px-6 py-24 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">Why Liquid Cooling?</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto mb-12">
              Traditional air cooling can no longer keep up with <strong>50kW+</strong> server racks. Cold plate and immersion cooling
              enable sustainable, high-density deployments. The liquid cooling market is projected to surpass <strong>$2B</strong> by 2027,
              driven by explosive AI demand.
            </p>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Image: enlarged, responsive */}
              <div className="w-full lg:w-3/5">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  <img
                    src={`${prefix}/images/liquid-vs-air.png`}
                    alt="Liquid vs Air Cooling Comparison"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Key Descriptions */}
              <div className="w-full lg:w-2/5 space-y-6 text-left">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-600">
                  <h4 className="text-xl font-semibold text-blue-700 mb-2">Cold Plate Cooling</h4>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Delivers cooling directly to processors, achieving high thermal transfer efficiency without submerging hardware.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-purple-600">
                  <h4 className="text-xl font-semibold text-purple-700 mb-2">Immersion Cooling</h4>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Servers are fully immersed in dielectric fluid, eliminating air friction and maximizing density per rack.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


      </main>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
