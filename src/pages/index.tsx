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
        <section id="hero" className="w-full bg-gradient-to-br from-[#eef4ff] to-white py-24 px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : -30 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-blue-800"
          >
            Galaxy3 AI <br className="hidden md:block" /> Data Center Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: loaded ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-gray-700"
          >
            We engineer next-generation AI infrastructure—liquid-cooled, high-density, and optimized for machine learning performance.
          </motion.p>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.95 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <button className="bg-white text-blue-700 px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition duration-300 font-semibold">
              Get a Consultation
            </button>
          </motion.a>
        </section>

        {/* Partner Logos - Horizontal Scroll */} 
        <section className="bg-gray-100 py-4 px-4">
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <div className="flex items-center space-x-8 min-w-[700px]">
              {[
                '/images/partner1.png',
                '/images/partner2.png',
                '/images/partner7.png',
                '/images/partner4.png',
                '/images/partner8.png',
                '/images/partner6.png',
              ].map((src, i) => (
                <img
                  key={i}
                  src={`${prefix}${src}`}
                  alt={`Partner ${i + 1}`}
                  className="h-14 sm:h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition duration-200"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Company Milestones / Metrics Section */}
        <section
          id="metrics"
          className="relative bg-white py-24 px-4 sm:px-8 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/images/background-light.png')] bg-cover bg-center opacity-55 pointer-events-none" />
          <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center space-y-12">
            
            {/* Top Illustration */}
            <div>
              <img
                src={`${prefix}/images/office-team.jpg`}
                alt="Anniversary Logo"
                className="h-28 sm:h-36 md:h-44 object-contain mx-auto"
              />
            </div>

            {/* Message */}
            <div>
              <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                We’ve <span className="font-bold text-black">nurtured and developed</span> AI infrastructure services worldwide.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 w-full max-w-4xl">
              {[
                { number: '200+', label: 'Customers', color: 'text-green-600' },
                { number: '30+', label: 'Countries', color: 'text-yellow-500' },
                { number: '4,000+', label: 'Projects', color: 'text-sky-600' },
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className={`text-5xl font-extrabold ${item.color}`}>{item.number}</h3>
                  <p className="text-base text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="/about"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.95 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 font-semibold">
                Learn more about our company
              </button>
            </motion.a>
          </div>
        </section>


        {/* Features Section */}
        <section id="features" className="px-4 sm:px-6 py-20 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {[
              {
                title: 'AI Performance at Scale',
                desc: 'Custom-built infrastructure for AI/ML workloads, tailored to high thermal density environments.',
                img: '/images/ai-performance.png',
              },
              {
                title: 'Advanced Liquid Cooling',
                desc: 'Deploying 3,000x more efficient cooling systems than air, reducing energy waste and cost.',
                img: '/images/liquid-cooling-system.png',
              },
              {
                title: 'Sustainable Design',
                desc: 'Low-emission systems, local sourcing, and smart materials contribute to green data center goals.',
                img: '/images/sustainability.png',
              },
            ].map(({ title, desc, img }, idx) => (
              <div key={idx} className="bg-white/70 backdrop-blur rounded-xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition">
                <div className="w-full aspect-[16/9] rounded-md overflow-hidden mb-4">
                  <img src={`${prefix}${img}`} alt={title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="px-4 sm:px-6 py-20 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-600 mb-10">
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
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition flex gap-4 md:col-span-2">
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
        </section>


            {/* 4M1E Block - Optimized Version */}
            <section id="4m1e" className="bg-gray-50 px-4 sm:px-6 py-20">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                {/* Image Section */}
                <div className="lg:w-1/2 w-full max-w-2xl">
                  <div className="rounded-xl shadow-lg overflow-hidden">
                    <img
                      src={`${prefix}/images/4m1e.png`}
                      alt="4M1E Management Diagram"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Text Section */}
                <div className="lg:w-1/2 w-full">
                  <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6">4M1E Management Model</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { label: "Manpower", desc: "Skilled and certified operators for every task" },
                      { label: "Materials", desc: "Verified supplies with inspection certificates" },
                      { label: "Machine", desc: "Maintained equipment and specialized tools" },
                      { label: "Method", desc: "Documented engineering procedures and processes" },
                      { label: "Environment", desc: "Safety-first workspace with 5S methodology" },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-4 shadow hover:shadow-md transition">
                        <h4 className="text-lg font-semibold text-blue-700 mb-1">{item.label}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

        {/* Market Trends Section */}
        <section id="trends" className="px-4 sm:px-6 py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Why Liquid Cooling?</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              AI servers now exceed <strong>50kW per rack</strong>. Liquid cooling is the only scalable solution for such workloads—projected to become a <strong>$2B market by 2027</strong> with 60% CAGR.
            </p>
            <div className="w-full max-w-5xl mx-auto aspect-[16/9] rounded-xl overflow-hidden shadow-md">
              <img src={`${prefix}/images/liquid-vs-air.png`} alt="Liquid Cooling vs Air Cooling" className="w-full h-full object-contain" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="relative bg-gradient-to-r from-blue-50 to-blue-100 text-center py-20 px-4">
          {/* background */}
          <div className="absolute inset-0 bg-[url('/images/datacenter-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-multiply"></div>

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

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
