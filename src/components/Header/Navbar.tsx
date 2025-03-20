"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="relative w-full bg-black shadow-md p-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 m-3">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Name Section - Always visible */}
          <div className='relative m-4'>
            <img src="semi.png" alt="" width={190} height={190} />
          </div>

          {/* Name Section */}
          <div className='absolute top-8 left-12 pl-4'>
            <p className='text-2xl font-semibold text-gray-100 '>Areeba Irfan</p>
          </div>

          {/* Desktop Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            <Link
              href={"/"}
              className="text-white hover:text-gray-300 hover:bg-stone-800 transition-all duration-200 ease-in-out px-3 py-2 rounded-md text-base"
            >
              Home
            </Link>
            <Link
              href={"/About"}
              className="text-white hover:text-gray-300 hover:bg-stone-800 transition-all duration-200 ease-in-out px-3 py-2 rounded-md text-base"
            >
              About
            </Link>
            <Link
              href={"/Portfolio"}
              className="text-white hover:text-gray-300 hover:bg-stone-800 transition-all duration-200 ease-in-out px-3 py-2 rounded-md text-base"
            >
              Portfolio
            </Link>
            <Link
              href={"/Skills"}
              className="text-white hover:text-gray-300 hover:bg-stone-800 transition-all duration-200 ease-in-out px-3 py-2 rounded-md text-base"
            >
              Skills
            </Link>
            <Link
              href={"/Contact"}
              className="text-white hover:text-gray-300 hover:bg-stone-800 transition-all duration-200 ease-in-out px-3 py-2 rounded-md text-base"
            >
              Contact
            </Link>
          </div>

          {/* Hamburger Menu Button - Only visible on mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Shown/hidden based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
          <Link
            href={"/"}
            className="block text-white hover:text-gray-300 hover:bg-stone-800 transition-all duration-200 ease-in-out px-3 py-2 rounded-md text-base"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href={"/About"}
            className="block text-white hover:text-gray-300 hover:bg-stone-800 transition-all duration-200 ease-in-out px-3 py-2 rounded-md text-base"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href={"/Portfolio"}
            className="block text-white hover:text-gray-300 hover:bg-stone-800 transition-all duration-200 ease-in-out px-3 py-2 rounded-md text-base"
            onClick={toggleMenu}
          >
            Portfolio
          </Link>
          <Link
            href={"/Skills"}
            className="block text-white hover:text-gray-300 hover:bg-stone-800 transition-all duration-200 ease-in-out px-3 py-2 rounded-md text-base"
            onClick={toggleMenu}
          >
            Skills
          </Link>
          <Link
            href={"/Contact"}
            className="block text-white hover:text-gray-300 hover:bg-stone-800 transition-all duration-200 ease-in-out px-3 py-2 rounded-md text-base"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

