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
import LiquidCoolingSlider from '@/components/LiquidCoolingScroll';

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


        {/* Company Metrics Section - Refined for Light Theme */}
        <section
          id="metrics"
          className="relative bg-white py-28 px-6 sm:px-12 overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-55 pointer-events-none"
            style={{ backgroundImage: `url(${prefix}/images/background-light.png)` }}
          />

          <div className="relative z-10 max-w-6xl mx-auto text-center space-y-16">
            {/* Small Title */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-8 h-px bg-blue-700 mr-4" />
              <span className="uppercase tracking-widest text-sm text-blue-700 font-semibold">
                By the Numbers
              </span>
            </div>

            {/* Refined Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
              {[ 
                { number: '200+', label: 'Customers Worldwide', color: 'text-green-600' },
                { number: '30+', label: 'Countries Served', color: 'text-yellow-500' },
                { number: '120+', label: 'Projects Delivered', color: 'text-sky-600' },
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className={`text-5xl font-extrabold ${item.color}`}>{item.number}</h3>
                  <p className="text-base text-gray-700 font-medium">{item.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/about" passHref>
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition font-semibold"
              >
                Learn more about our journey
              </motion.button>
            </Link>
          </div>
        </section>



        {/* Features Section */}
        <section id="features" className="px-4 sm:px-6 py-24 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-600 mb-6 leading-normal">
              Key Infrastructure Features
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Integrated MEP, cabling, security, and cooling systems tailored for AI-ready data centers.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-20">
            {[ 
              {
                title: 'Mechanical, Electrical, and Plumbing (MEP) Systems',
                desc: 'Design and integration of HVAC, power, and plumbing systems for optimal data center uptime and energy efficiency.',
                img: '/features/liquid2.jpeg',
              },
              {
                title: 'Data Center Fit-Out',
                desc: 'End-to-end interior build-out including raised flooring, containment systems, structured cabling, power distribution, and environmental controls.',
                img: '/features/hac1.jpg',
              },
              {
                title: 'Data Center Security Systems',
                desc: 'Includes CCTV surveillance, access control, and secure network zones. Integrated with centralized monitoring dashboards.',
                img: '/features/monitor1.png',
              },
              {
                title: 'Hot Aisle Containment (HAC) Design',
                desc: 'Custom containment structures to segregate hot exhaust airflow. Improves cooling efficiency and supports high-density racks.',
                img: '/features/hac2.jpg',
              },
              {
                title: 'Liquid Cooling Deployment',
                desc: 'Cold plate and immersion cooling solutions supporting AI/ML clusters. Enhances thermal management and reduces energy costs.',
                img: '/projects/liquid-cooling.jpg',
              }
            ].map(({ title, desc, img }, idx) => (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center gap-10 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2 w-full rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={`${prefix}${img}`}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 w-full text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">{title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>





        {/* Solutions Section */}
        <section id="solutions" className="px-4 sm:px-6 py-20 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-600 mb-10 leading-normal">
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
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">MEP Systems</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>HVAC, electrical panels, plumbing design & install</li>
                      <li>Busways, cable trays, and power distribution</li>
                      <li>Code-compliant construction with licensed teams</li>
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
                    <h3 className="text-xl font-semibold text-indigo-600 mb-3">Safety, Quality & PM</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>OSHA-compliant field safety & PPE enforcement</li>
                        <li>Project oversight with PMs, QC inspectors, safety officers</li>
                        <li>Prefabrication, air-tightness testing, and live tracking</li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* PM*/}
        <FrameworkSlider />

        {/* Market Trends Section */}
        <LiquidCoolingSlider/>

      </main>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
