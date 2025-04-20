'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/Button';

// Define dropdown items type

// Define menu items with dropdown content
const menuItems = [
  {
    title: 'Platform',
    dropdown: [
      { title: 'Features', href: '#' },
      { title: 'Integrations', href: '#' },
      { title: 'API', href: '#' },
    ]
  },
  {
    title: 'Solution',
    dropdown: [
      { title: 'For Startups', href: '#' },
      { title: 'For Enterprises', href: '#' },
      { title: 'Case Studies', href: '#' },
    ]
  },
  {
    title: 'Customers',
    dropdown: [
      { title: 'Testimonials', href: '#' },
      { title: 'Success Stories', href: '#' },
    ]
  },
  {
    title: 'Resource',
    dropdown: [
      { title: 'Documentation', href: '#' },
      { title: 'Blog', href: '#' },
      { title: 'Support', href: '#' },
      { title: 'Community', href: '#' },
    ]
  },
];

export const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header className='py-4 border-b border-white/15 md:border-none sticky top-0 z-10 max-md:backdrop-blur'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center md:border md:border-white/15 md:p-2.5 md:rounded-xl max-w-2xl mx-auto md:backdrop-blur'>
          <div className=''>
            <div className='border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15'>
              <img src="/img/cognir-logo.png" alt="logo cognir" className='h-8 w-8' />
            </div>
          </div>

          <div className='max-md:hidden'>
            <nav className='flex gap-8 text-sm relative'>
              {menuItems.map((item, index) => (
                <div 
                  key={index}
                  className='relative'
                  onMouseEnter={() => toggleDropdown(index)}
                  onMouseLeave={() => toggleDropdown(index)}
                >
                  <button 
                    className='text-white/70 hover:text-white transition flex items-center gap-1'
                    onClick={() => toggleDropdown(index)}
                  >
                    {item.title}
                    <motion.span
                      animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur rounded-lg shadow-lg border border-white/15 overflow-hidden"
                      >
                        {item.dropdown.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 transition"
                          >
                            {subItem.title}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </div>

          <div className='flex gap-4 items-center'>
            <Button>Join Waitlist</Button>
          </div>
        </div>
      </div>
    </header>
  );
};