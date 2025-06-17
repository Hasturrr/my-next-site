import Image from 'next/image';
import Link from 'next/link';
import { prefix } from '@/utils/path';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Column 1 - Logo & Description */}
        <div>
          <div className="flex items-center mb-4">
            <Image
              src={`${prefix}/images/logo.png`}
              alt="Galaxy3 Logo"
              width={140}
              height={40}
              className="object-contain"
            />
          </div>
          <p className="text-sm text-gray-300 mb-4">
            15+ years&apos; professional IT project experience in the United States.
          </p>
          <Link href="https://www.linkedin.com/company/galaxy3/" target="_blank" rel="noopener noreferrer">
            <Image
              src={`${prefix}/images/linkedin.png`}
              alt="LinkedIn"
              width={32}
              height={32}
              className="hover:opacity-80"
            />
          </Link>
        </div>

        {/* Column 2 - Our Company */}
        <div>
          <h4 className="text-white font-semibold mb-4">Our Company</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/projects">Projects</Link></li>
          </ul>
        </div>

        {/* Column 3 - Our Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/services#system">System Integration</Link></li>
            <li><Link href="/services#cloud">Cloud Management</Link></li>
            <li><Link href="/services#idc">Data Center Design</Link></li>
            <li><Link href="/services#document">Enterprise Document Management</Link></li>
          </ul>
        </div>

        {/* Column 4 - Contact Us */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <p className="text-sm text-gray-300">
            260 Madison Avenue, 8th Floor<br />
            New York, NY 10016<br />
            +1 332-237-7696<br />
            info@galaxy3it.com
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-400 mt-10">
        © {new Date().getFullYear()} Galaxy3. All rights reserved.
      </div>
    </footer>
  );
}
