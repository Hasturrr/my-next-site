import Link from 'next/link';
import { prefix } from '@/utils/path';
import { useRouter } from 'next/router';

export default function CTA() {
    const { pathname } = useRouter();
    if (pathname === '/contact') return null;

    return (
        <section id = "contact"
        className="relative bg-gradient-to-r from-blue-50 to-blue-100 text-center py-20 px-4 mt-16"
        >
            {/* background */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-multiply"
                style={{ backgroundImage: `url(${prefix}/images/datacenter-bg.jpg)` }}
            />

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
    );
}