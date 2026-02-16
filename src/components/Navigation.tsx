import React from 'react';
import { motion } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';

export function Navigation() {
  const links = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-1 px-2 py-2 bg-[#111113]/80 backdrop-blur-md border border-[#1f1f23] rounded-full shadow-lg shadow-black/20">
        {links.map((link) => (
          <Link
            key={link.name}
            smooth
            to={link.href}
            className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-colors duration-200"
          >
            {link.name}
          </Link>
        ))}
        <Link
          smooth
          to="/#contact"
          className="ml-2 px-5 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-colors duration-200 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
        >
          Contact
        </Link>
      </div>
    </motion.nav>
  );
}
