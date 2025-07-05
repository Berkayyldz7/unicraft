import React, { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';

const MobileMenu = ({ mobileDropdown, toggleMobileDropdown, closeMenu }) => {
  const [visible, setVisible] = useState(false);

  const navItems = [
    {
      label: 'Learn',
      links: [
        { title: 'Introduction to Sui', href: '/intro-to-sui' },
        { title: 'Move', href: '/move' }
      ]
    },
    {
      label: 'Build',
      links: [
        { title: 'Developer portal', href: '/developers' },
        { title: 'Courses', href: '/developers#courses' }
      ]
    },
    {
      label: 'Connect',
      links: [
        { title: 'Community hub', href: '/community-events-hub' },
        { title: 'University partnerships', href: '/university' }
      ]
    }
  ];

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => closeMenu(), 300);
  };

  const handleGetStarted = () => {
    alert("Let's get started!");
  };

  return (
    <div
      className={`md:hidden absolute top-full left-0 w-full z-50 bg-gradient-to-b from-[#0d0d22] to-[#1b005b] text-white shadow-md p-6 flex flex-col gap-4 transition-all duration-300 ease-in-out 
        ${visible ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}
    >
      {/* Close icon */}
      <div className="flex justify-end">
        <button onClick={handleClose} className="text-white text-2xl">
          <FiX />
        </button>
      </div>

      {/* Menu Items */}
      {navItems.map(({ label, links }) => (
        <div key={label} className="border-b border-white/10 pb-2">
          <button
            onClick={() => toggleMobileDropdown(label)}
            className="font-semibold w-full text-left flex justify-between items-center text-white"
          >
            {label}
            <span>{mobileDropdown === label ? '▾' : '▸'}</span>
          </button>
          {mobileDropdown === label && (
            <div className="mt-2 pl-4">
              {links.map((item) => (
                <a key={item.title} href={item.href} className="block text-white/80 py-1 hover:text-white">
                  {item.title}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}

      <div className="pt-4">
        <button
          onClick={handleGetStarted}
          className="w-full bg-blue-500 text-white py-3 rounded-full text-lg font-semibold hover:bg-blue-600 active:scale-95 transition-all"
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;