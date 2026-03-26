'use client'
import React from 'react'
import { useState } from "react";
import Link from "next/link";
     

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
   <nav className="w-full `bg-gradient-to-r from-black to-gray-800 text-black px-6 py-4 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h2 className="text-xl md:text-3xl font-semibold tracking-wide">
         ℝ𝕒𝕛𝕛𝕦 𝔹𝕙𝕒𝕚𝕪𝕒 𝕌𝕟𝕚𝕧𝕖𝕣𝕤𝕚𝕥𝕪
        </h2> 

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li className="hover:text-gray-500 cursor-pointer">
            <Link href="/about">𝓐𝓫𝓸𝓾𝓽</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <Link href="/contact">𝓒𝓸𝓷𝓽𝓪𝓬𝓽t</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <Link href="/show">𝓐𝓭𝓶𝓲𝓼𝓼𝓲𝓸𝓷</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col mt-4 gap-4 md:hidden text-lg">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/show">Magic Show</Link>
          </li>
        </ul>
      )}
    </nav>     
  )
}

export default Navbar