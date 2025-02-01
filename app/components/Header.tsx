"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-6 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/Chainfundit-logo.png"
            alt="Logo"
            width={200}
            height={50}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-8 text-gray-700 font-semibold">
            <li>
              <Link href="/start-campaign" className="hover:text-green-600">
                Start Your ChainFund
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-green-600">
                Login
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-semibold">
            <li>
              <Link
                href="/start-campaign"
                className="block py-2 hover:text-green-600"
                onClick={() => setMenuOpen(false)}
              >
                Start Campaign
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="block py-2 hover:text-green-600"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
