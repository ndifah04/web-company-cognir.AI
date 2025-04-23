'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  MenuIcon,
  XIcon,
  LayoutDashboardIcon,
  BookIcon,
  BuildingIcon,
  PlugIcon,
  CodeIcon,
  RocketIcon,
  CaseSensitiveIcon,
  NewspaperIcon,
  UsersIcon,
  InfoIcon
} from 'lucide-react';
import Button from '@/components/Button';

// Menu items with dropdown content (unchanged from original)
const menuItems = [
  {
    title: 'Platform',
    dropdown: [
      { title: 'Features', href: '#', icon: <LayoutDashboardIcon className="w-4 h-4" /> },
      { title: 'Integrations', href: '#', icon: <PlugIcon className="w-4 h-4" /> },
      { title: 'API', href: '#', icon: <CodeIcon className="w-4 h-4" /> },
    ]
  },
  {
    title: 'Solution',
    dropdown: [
      { title: 'For Startups', href: '#', icon: <RocketIcon className="w-4 h-4" /> },
      { title: 'For Enterprises', href: '#', icon: <BuildingIcon className="w-4 h-4" /> },
      { title: 'Case Studies', href: '#', icon: <CaseSensitiveIcon className="w-4 h-4" /> },
    ]
  },
  {
    title: 'Customers',
    dropdown: [
      { title: 'Documentation', href: '#', icon: <BookIcon className="w-4 h-4" /> },
      { title: 'Blog', href: '#', icon: <NewspaperIcon className="w-4 h-4" /> },
      { title: 'Community', href: '#', icon: <UsersIcon className="w-4 h-4" /> },
    ]
  },
  {
    title: 'Resource',
    dropdown: [
      { title: 'About', href: 'about', icon: <InfoIcon className="w-4 h-4" /> },
      { title: 'Blog', href: '#', icon: <NewspaperIcon className="w-4 h-4" /> },
      { title: 'Community', href: '#', icon: <UsersIcon className="w-4 h-4" /> },
    ]
  },

];

// MobileNav component with simple menu like your image
function MobileNav({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur z-40 pt-20 px-4"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-4 text-white cursor-pointer"
          >
            <XIcon className="w-6 h-6" />
          </button>

          <nav className="flex flex-col space-y-4">
            {/* Simple top-level menu items like your image */}
            {menuItems.map((item) => (
              <a key={item.title} href="#" className="text-lg text-white px-4 py-3 rounded-lg hover:bg-white/10 transition-colors">{item.title}</a>
            ))}

            <div className="border-t border-white/15 pt-4 mt-4 px-4">
              <Button>
                Join Waitlist
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Main Header component (keeping desktop dropdowns)
export function Header() {
  const [active, setActive] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-50 bg-gray-900/80 backdrop-blur">
    <header className='z-50 mt-4 sticky'>

      <div className="container mx-auto">
        <div className="flex justify-between items-center border border-white/15 p-2.5 rounded-xl max-w-6xl mx-auto">
          <div className="flex items-center">
            <Link className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15" href='/'>
              <img src="/img/cognir-logo.png" alt="logo cognir" className="h-8 w-8" />
            </Link>
          </div>

          {/* Desktop Navigation (with dropdowns) */}
          <nav
            className="hidden md:flex items-center gap-8 text-sm relative"
            onMouseLeave={() => setActive(null)}
          >
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActive(item.title)}
              >
                <button
                  className={`flex items-center gap-1 ${active === item.title ? 'text-white' : 'text-white/70'} hover:text-white transition-colors`}
                >
                  {item.title}
                </button>

                <AnimatePresence>
                  {active === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-8"
                    >
                      <motion.div
                        className="bg-gray-900/95 backdrop-blur-sm rounded-xl border border-white/15 shadow-xl w-48"
                      >
                        <div className="p-2">
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="flex items-center gap-3 px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors rounded-lg"
                            >
                              {subItem.icon}
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="flex gap-4 items-center">
            <div className="hidden md:flex gap-4 items-center">
              <Button>Join Waitlist</Button>
            </div>
            <button
              className="md:hidden text-white cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation (simple version like your image) */}
        <MobileNav
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
}