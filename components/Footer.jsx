'use client';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Send } from 'lucide-react';

 function Footer() {
  return (
    <footer className="bg-[#0B0F1A] text-gray-300 px-6 md:px-16 pt-16 pb-8">

      {/* TOP GRID */}
      <div className="grid md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-red-500 w-10 h-10 flex items-center justify-center rounded-lg font-bold text-xl text-white">
              N
            </div>
            <h1 className="text-xl font-semibold text-white">NEXORA</h1>
          </div>
          <p className="text-sm text-gray-400">
            Premium fashion for bold people. Discover your style with our latest collections.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3 mt-5">
            <div className="bg-[#1A1F2E] p-2 rounded-lg hover:bg-red-500 cursor-pointer">
              <Facebook size={18} />
            </div>
            <div className="bg-[#1A1F2E] p-2 rounded-lg hover:bg-red-500 cursor-pointer">
              <Instagram size={18} />
            </div>
            <div className="bg-[#1A1F2E] p-2 rounded-lg hover:bg-red-500 cursor-pointer">
              <Twitter size={18} />
            </div>
          </div>
        </div>

        {/* LINKS 1 */}
        <div>
          <h2 className="text-white font-semibold mb-4">Shop</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Men</Link></li>
            <li><Link href="#">Women</Link></li>
            <li><Link href="#">Kids</Link></li>
            <li><Link href="#">New Arrivals</Link></li>
          </ul>
        </div>

        {/* LINKS 2 */}
        <div>
          <h2 className="text-white font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h2 className="text-white font-semibold mb-4">Stay Updated</h2>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to get latest offers and updates.
          </p>

          <div className="flex items-center bg-[#1A1F2E] rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-3 py-2 outline-none text-sm w-full"
            />
            <button className="bg-red-500 p-2 hover:bg-red-600">
              <Send size={18} />
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">

        <p className="text-sm text-gray-500">
          © 2025 NEXORA. All rights reserved.
        </p>

        <div className="flex gap-4 text-sm">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Security</Link>
        </div>

      </div>
    </footer>
  );
} export default Footer