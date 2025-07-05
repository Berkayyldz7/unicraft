import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import MobileMenu from './MobileMenu';

const NavBar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const navRef = useRef();

  const navItems = [
    {
      label: 'Learn',
      links: [
        { title: 'Introduction to Sui', href: '/intro-to-sui', subtext: 'Get started with the basics' },
        { title: 'Move', href: '/move', subtext: 'Inherently secure programming language' }
      ]
    },
    {
      label: 'Build',
      links: [
        { title: 'Developer portal', href: '/developers', subtext: 'Everything you need to build on Sui' },
        { title: 'Courses', href: '/developers#courses', subtext: 'Classes on the fundamentals of Sui' }
      ]
    },
    {
      label: 'Connect',
      links: [
        { title: 'Community hub', href: '/community-events-hub', subtext: 'Events, programs, and resources' },
        { title: 'University partnerships', href: '/university', subtext: 'Collaborate with top research institutions' }
      ]
    }
  ];

  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const toggleMobileDropdown = (label) => {
    setMobileDropdown(mobileDropdown === label ? null : label);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setMobileDropdown(null);
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-[#0d0d22]/90 to-[#1b005b]/90 border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="https://raw.githubusercontent.com/MystenLabs/sui/main/doc/static/img/favicon.png" alt="Sui Logo" className="w-6 h-6" />
          <span className="font-semibold text-xl text-white">Sui</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center gap-8 text-white font-medium relative">
          {navItems.map(({ label, links }) => (
            <div key={label} className="relative group">
              <button
                onClick={() => toggleDropdown(label)}
                className="flex items-center gap-1 group-hover:text-blue-400 transition"
              >
                {label}
                <img
                  src="https://cdn.prod.website-files.com/6425f546844727ce5fb9e5ab/66740cbba9767aeaf4919559_arrow-white.svg"
                  alt="dropdown arrow"
                  className="w-3 h-3"
                />
              </button>
              {activeDropdown === label && (
                <div className="absolute left-0 mt-2 bg-[#111827]/95 backdrop-blur-md border border-white/10 p-4 rounded shadow-lg w-64">
                  {links.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="block p-2 hover:bg-blue-500/10 rounded"
                    >
                      <div className="text-white font-medium">{item.title}</div>
                      <div className="text-sm text-gray-400">{item.subtext}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Get started Button */}
        <div className="hidden md:block">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
            Get started
          </button>
        </div>

        {/* Burger icon */}
        <div className="md:hidden">
          <button
            className="text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
  <MobileMenu
    mobileDropdown={mobileDropdown}
    toggleMobileDropdown={toggleMobileDropdown}
    closeMenu={() => setIsOpen(false)}
  />
        )}



    </nav>
  );
};

export default NavBar2;

