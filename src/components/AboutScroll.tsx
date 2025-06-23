'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const slides = [
  {
    title: '4M1E Management',
    desc: 'A holistic management model emphasizing Manpower, Material, Machine, Method, and Environment. We ensure skilled personnel, certified materials, maintained equipment, standardized procedures, and a safe, organized workspace across every project.',
    image: '/images/4m1e.png',
  },
  {
    title: 'Quality Assurance',
    desc: 'Quality is embedded throughout our construction lifecycle—from prefabrication and on-site air-tightness testing to material inspection and real-time issue tracking. Dedicated QC teams ensure that every step meets international benchmarks.',
    image: '/images/quality.png',
  },
  {
    title: 'Safety & Compliance',
    desc: 'We enforce strict access control, PPE policies, and continuous training. Compliance includes ISO/IEC 27001 for data security, OSHA standards for field operations, and fire detection systems such as VESDA for mission-critical environments.',
    image: '/images/security-cert.png',
  },
  {
    title: 'Project Governance',
    desc: 'Our governance framework includes experienced project managers, safety officers, and quality controllers. Weekly milestone reviews, schedule tracking tools, and centralized communication ensure end-to-end visibility and accountability.',
    image: '/images/approach.png',
  },
];

export default function FrameworkSlider() {
  return (
    <section id="framework" className="w-full bg-gray-50 py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {slides.map(({ title, desc, image }, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 text-center lg:text-left">
                {/* Text Section */}
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold text-blue-800 mb-4">{title}</h3>
                  <p className="text-gray-700 text-base leading-relaxed">{desc}</p>
                </div>

                {/* Image Section */}
                <div className="lg:w-1/2">
                  <img
                    src={image}
                    alt={title}
                    className="w-full max-h-[380px] object-contain rounded-xl shadow-md mx-auto"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
