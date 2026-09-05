import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Explore", to: "/" },
  { label: "My Trips", to: "/my-trip" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border bg-cream/95 backdrop-blur-md'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <Link to='/' className='group flex items-center gap-2'>
          <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-wander-600 text-white transition group-hover:bg-wander-700'>
            <span className='text-lg'>✈</span>
          </div>

          <span className='text-xl font-semibold tracking-tight text-charcoal'>
            Wandar<span className='text-wander-600'>Trip</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden items-center gap-1 md:flex'>
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-wander-100 text-wander-700"
                    : "text-muted hover:bg-wander-50 hover:text-charcoal"
                }`
              }>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className='hidden md:block'>
          <Link
            to='/plan-trip'
            className='rounded-xl bg-wander-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-wander-700'>
            Start Planning
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='rounded-lg p-2 text-charcoal transition hover:bg-wander-100 md:hidden'
          aria-label='Toggle menu'
          aria-expanded={isOpen}>
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='border-t border-border bg-cream px-4 pb-5 pt-3 md:hidden'>
          <nav className='space-y-1'>
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-wander-100 text-wander-700"
                      : "text-muted hover:bg-wander-50 hover:text-charcoal"
                  }`
                }>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className='mt-4 border-t border-border pt-4'>
            <Link
              to='/plan-trip'
              onClick={() => setIsOpen(false)}
              className='block w-full rounded-xl bg-wander-600 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-wander-700'>
              Start Planning
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
