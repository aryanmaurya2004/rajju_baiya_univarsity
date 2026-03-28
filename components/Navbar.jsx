'use client';
import Link from 'next/link';
import { Heart, ShoppingCart, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full bg-[#0B0F1A] text-white px-6 py-4 flex fixed items-center justify-between">

      {/* LEFT: LOGO */}
      <div className="flex items-center gap-2">
        <div className="bg-red-500 w-10 h-10 flex items-center justify-center rounded-lg font-bold text-xl">
          N
        </div>
        <h1 className="text-xl font-semibold tracking-wide">NEXORA</h1>
      </div>

      {/* CENTER: MENU */}
      <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
        <li className="hover:text-white cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-white cursor-pointer">
          <Link href="/shop">Shop</Link>
        </li>
        <li className="hover:text-white cursor-pointer">
          <Link href="/brands">Brands</Link>
        </li>
        <li className="hover:text-white cursor-pointer">
          <Link href="/sale">Sale</Link>
        </li>
        <li className="hover:text-white cursor-pointer">
          <Link href="/about">About</Link>
        </li>
      </ul>

      {/* RIGHT: SEARCH + ICONS */}
      <div className="flex items-center gap-4">

        {/* Search Box */}
        <div className="hidden md:flex items-center bg-[#1A1F2E] px-4 py-2 rounded-full">
          <Search size={18} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none text-sm text-white placeholder-gray-400"
          />
        </div>

        {/* Heart Icon */}
        <div className="bg-[#1A1F2E] p-2 rounded-lg cursor-pointer hover:bg-[#2a2f3f]">
          <Heart size={20} />
        </div>

        {/* Cart Icon */}
        <div className="bg-red-500 p-2 rounded-lg cursor-pointer hover:bg-red-600">
          <ShoppingCart size={20} />
        </div>

      </div>
    </nav>
  );
}