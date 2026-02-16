import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from 'lucide-react';
export function Footer() {
  return (
    <footer className="py-12 border-t border-[#1f1f23] mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-white mb-1">Md Sayem Hossain</h3>
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-zinc-500 hover:text-white transition-colors">

            <GithubIcon size={20} />
          </a>
          <a
            href="#"
            className="text-zinc-500 hover:text-white transition-colors">

            <LinkedinIcon size={20} />
          </a>
          <a
            href="#"
            className="text-zinc-500 hover:text-white transition-colors">

            <TwitterIcon size={20} />
          </a>
          <a
            href="#"
            className="text-zinc-500 hover:text-white transition-colors">

            <MailIcon size={20} />
          </a>
        </div>
      </div>
    </footer>);

}