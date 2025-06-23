'use client';

import { useEffect, useRef, useState } from 'react';
import { prefix } from '@/utils/path';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const logos = [
  '/images/partner1.png',
  '/images/partner2.png',
  '/images/partner7.png',
  '/images/partner4.png',
  '/images/partner8.png',
  '/images/partner9.png',
  '/images/partner10.png',
  '/images/partner11.png',
  '/images/partner6.png',
];

export default function PartnerLoop() {
  const track = useRef<HTMLDivElement>(null);

  /* put viewport on copy #2 so we can scroll both directions */
  useEffect(() => {
    if (track.current) track.current.scrollLeft = track.current.scrollWidth / 3;
  }, []);

  /* infinite-loop helper */
  const loopIfNeeded = () => {
    const el = track.current;
    if (!el) return;
    const setW = el.scrollWidth / 3;
    if (el.scrollLeft <= setW * 0.1) el.scrollLeft += setW;
    if (el.scrollLeft >= setW * 1.9) el.scrollLeft -= setW;
  };

  /* ─── drag support ─── */
  const [drag, setDrag] = useState(false);
  const startX = useRef(0);
  const startLeft = useRef(0);

  const onDown = (e: React.MouseEvent) => {
    setDrag(true);
    startX.current = e.pageX;
    startLeft.current = track.current!.scrollLeft;
  };
  const onMove = (e: React.MouseEvent) => {
    if (!drag) return;
    const dx = e.pageX - startX.current;
    track.current!.scrollLeft = startLeft.current - dx;
    loopIfNeeded();
  };
  const endDrag = () => setDrag(false);

  /* ─── arrow handlers ─── */
  const scrollBy = (px: number) => {
    if (!track.current) return;
    track.current.scrollLeft += px;
    loopIfNeeded();
  };

  /* prevent wheel scrolling on desktop */
  const cancelWheel = (e: React.WheelEvent) => e.preventDefault();

  return (
    <section className="relative bg-white/70 backdrop-blur-sm shadow-inner py-6 px-4">
        <div className="relative max-w-6xl mx-auto">

            {/* scroll track wrapper */}
            <div className="relative">
            {/* scroll arrows */}
            <button
                aria-label="Scroll left"
                onClick={() => scrollBy(-240)}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20
                        h-10 w-10 items-center justify-center rounded-full bg-white/80
                        shadow hover:bg-white transition"
            >
                <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
            </button>

            <button
                aria-label="Scroll right"
                onClick={() => scrollBy(240)}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20
                        h-10 w-10 items-center justify-center rounded-full bg-white/80
                        shadow hover:bg-white transition"
            >
                <ChevronRightIcon className="h-6 w-6 text-gray-700" />
            </button>

            {/* scrollable row */}
            <div
                ref={track}
                onMouseDown={onDown}
                onMouseMove={onMove}
                onMouseUp={endDrag}
                onMouseLeave={endDrag}
                onTouchStart={() => setDrag(false)}
                onWheel={cancelWheel}
                className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing
                        select-none z-10 relative"
            >
                <div className="flex items-center space-x-8 min-w-max">
                {[...logos, ...logos, ...logos].map((src, i) => (
                    <img
                    key={i}
                    src={`${prefix}${src}`}
                    alt={`Partner ${i % logos.length + 1}`}
                    className="h-14 sm:h-16 md:h-20 w-auto object-contain opacity-80
                                hover:opacity-100 transition duration-200"
                    draggable={false}
                    />
                ))}
                </div>
            </div>
            </div>
        </div>
    </section>
  );
}
