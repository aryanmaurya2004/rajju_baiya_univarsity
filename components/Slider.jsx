'use client';
import { Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-[#1a1333] via-[#1b1f3a] to-[#0b1f3a] text-white px-6 md:px-16 py-12 flex items-center">

      <div className="grid md:grid-cols-2 gap-10 w-full items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#2a1f3f] text-red-400 px-4 py-1 rounded-full text-sm mb-6">
            ⚡ NEW SEASON 2025
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            NEW <br />
            <span className="text-yellow-400">SEASON</span> <br />
            DROP
          </h1>

          {/* Description */}
          <p className="text-gray-400 mt-6 max-w-md">
            Exclusively crafted for the bold — har look ke liye perfect piece dhundhein.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-semibold">
              Explore →
            </button>
            <button className="border border-gray-500 px-6 py-3 rounded-xl text-gray-300 hover:bg-gray-800">
              View Catalog
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-10">
            <div>
              <h2 className="text-2xl font-bold text-yellow-400">50K+</h2>
              <p className="text-gray-400 text-sm">Customers</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-yellow-400">200+</h2>
              <p className="text-gray-400 text-sm">Brands</p>
            </div>
            <div className="flex items-center gap-1">
              <h2 className="text-2xl font-bold text-yellow-400">4.9</h2>
              <Star className="text-yellow-400" size={20} />
              <p className="text-gray-400 text-sm ml-1">Rating</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="relative">
          <div className="bg-gradient-to-br from-[#2b2f55] to-[#1b3a5a] rounded-3xl p-6 h-[500px] flex items-end">

            {/* Product Card */}
            <div className="w-full bg-[#0f172a] p-4 rounded-2xl flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Aurora Silk Dress</h3>
                <p className="text-red-400 font-bold mt-1">₹8,499</p>
              </div>
              <button className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600">
                Add +
              </button>
            </div>

          </div>

          {/* Slider dots */}
          <div className="flex justify-center gap-2 mt-4">
            <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
            <span className="w-6 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
          </div>
        </div>

      </div>
    </section>
  );
}