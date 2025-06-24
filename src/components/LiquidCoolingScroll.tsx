'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { prefix } from '@/utils/path';

const slides = [
  {
    title: 'Liquid Cooling Market Outlook',
    desc: 'With the rise of AI computing demands, direct liquid and immersion cooling are forecast to drive a $1.6B market by 2027. Direct-to-chip solutions are dominating deployments, while immersion is gaining traction in high-density workloads.',
    image: `${prefix}/images/digram.jpg`,
  },
  {
    title: 'Liquid Cooling Infrastructure',
    desc: 'Modern AI data centers rely on a full-stack liquid cooling architecture including chillers, CDUs, cooled racks, and immersion tanks. This holistic ecosystem supports extreme density and maximized efficiency.',
    image: `${prefix}/images/liquid-center-design.jpg`,
  },
  {
    title: 'Cooling Thresholds by Rack Density',
    desc: 'Liquid cooling becomes critical as power densities exceed 50kW. Hybrid approaches combine CRAC, containment, and active rear doors—but only direct liquid and immersion support future rack power of 100kW+.',
    image: `${prefix}/images/liquid-vs-air.jpg`,
  },
  {
    title: 'The Density-Performance-Efficiency Triangle',
    desc: 'Liquid cooling enables top-bin CPU/GPU performance while reducing power and space. The result: sustained turbo modes, fewer racks per load, and improved PUE in AI-centric data centers.',
    image: `${prefix}/images/advantage.jpg`,
  },
];

export default function LiquidCoolingSlider() {
  return (
    <section id="liquid-cooling-slider" className="w-full bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6">
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
              <div className="flex flex-col items-center text-center gap-8">
                {/* Text on top */}
                <div className="max-w-3xl">
                  <h3 className="text-3xl font-bold text-blue-800 mb-4">{title}</h3>
                  <p className="text-gray-700 text-base leading-relaxed">{desc}</p>
                </div>

                {/* Image below */}
                <div className="w-full">
                  <img
                    src={image}
                    alt={title}
                    className="w-full max-h-[500px] object-contain rounded-xl shadow-xl"
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
