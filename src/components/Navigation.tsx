import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' }
  ];
const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 bg-gradient-to-b from-[#0a0a0a] to-transparent via-[#0a0a0a]/70 "> 
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        {/* Logo Section */}
{/* Logo Section */}
<div className="relative flex items-center z-[60] group cursor-pointer">
  {/* The Orange Circle - Positioned precisely behind the 'S' */}
  <div className="absolute left-[-4px] w-9 h-9 bg-[#ff5c28] rounded-full -z-10 opacity-90 transition-transform duration-300 group-hover:scale-110" />
  
  <span className="text-2xl font-bold text-white tracking-tighter">
    Sayem<span className="font-light opacity-80">Hossain</span>
  </span>
</div>

        {/* Desktop Menu - Floating Pill */}
        <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md shadow-2xl">
          {links.map((l) => (
            <Link key={l.name} to={l.href} className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors">
              {l.name}
            </Link>
          ))}
          <Link to="#contact" className="ml-2 px-6 py-2 text-sm bg-[#2563eb] text-white rounded-full hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20">
            Contact
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden z-[60] text-gray-400 p-2 focus:outline-none bg-[#1a1a1a]/50 rounded-full backdrop-blur-sm"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Mobile Full-Screen Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center gap-8 md:hidden z-[50]"
            >
              {links.map((l) => (
                <Link 
                  key={l.name} 
                  to={l.href} 
                  onClick={closeMenu}
                  className="text-3xl font-medium text-white hover:text-[#ff5c28] transition-colors"
                >
                  {l.name}
                </Link>
              ))}
              <Link 
                to="#contact" 
                onClick={closeMenu}
                className="px-12 py-4 bg-[#2563eb] rounded-full text-white text-lg font-bold shadow-xl shadow-blue-600/20"
              >
                Contact
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
    </motion.nav>
  );
}
