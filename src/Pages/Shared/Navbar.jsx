import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'How it works', href: '#' },
    { name: 'All apps', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'For Teams', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Podcast', href: '#' },
  ];

  return (
    <nav className="relative bg-[#26262B] px-6 py-4 text-sm font-medium text-gray-300 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        <div>
          <img src="https://i.ibb.co.com/FkSGVCCp/azora-logo.png" alt="" />
        </div>

        <div className="hidden items-center lg:flex lg:gap-[30px]">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          
          <div className="h-5 w-[1px] bg-gray-700"></div>

          <div className="flex items-center">
            <img src="https://i.ibb.co.com/q3GbryRr/en-svg.png" alt="US" className="w-[18px] h-[13.5]" />
          </div>

          <a href="#" className="hover:text-white transition-colors">Sign In</a>

          <button className="rounded-md border border-gray-600 px-4 py-1.5 text-white hover:bg-gray-800 transition-colors">
            Try free
          </button>
        </div>

        <div className="flex items-center lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 flex flex-col space-y-4 bg-[#121214] p-6 border-t border-gray-800 lg:hidden">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-lg hover:text-white">
              {link.name}
            </a>
          ))}
          <hr className="border-gray-800" />
          <div className="flex items-center gap-4">
            <img src="https://i.ibb.co.com/q3GbryRr/en-svg.png" alt="US" className="w-[18px] h-[13.5]" />
          </div>
          <a href="#" className="text-lg">Sign In</a>
          <button className="w-full rounded-md border border-gray-600 py-3 text-white">
            Try free
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;