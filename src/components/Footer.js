import React from 'react';
import { FaDiscord, FaXTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#0d0d22] text-white px-6 md:px-16 py-12">
      {/* Üst Kısım */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 border-b border-white/10 pb-10">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="/logo.svg" alt="Logo" className="w-24" />
        </div>

        {/* Link Sütunları */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-grow">
          {[
            {
              title: 'Learn',
              links: [
                'Introduction to Sui',
                'Move',
                'Use cases',
                'BTCfi on Sui',
                'Research',
                'Network status',
                'Network info',
                'Token schedule',
              ],
            },
            {
              title: 'Build',
              links: [
                'Developer portal',
                'Docs',
                'Courses',
                'Request for proposals',
                'Github',
                'Whitepaper',
                'Developer forum',
              ],
            },
            {
              title: 'Connect',
              links: ['Events', 'Community programs', 'Job board', 'Directory'],
            },
            {
              title: 'About',
              links: [
                'Security',
                'Sui Foundation',
                'Careers',
                'Press center',
                'Media kit',
                'Blog',
                'Trademark Policy',
                'Bug Bounty Program',
                'Privacy Policy',
              ],
            },
          ].map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold mb-3">{section.title}</h4>
              <ul className="space-y-2 text-sm text-white/70">
                {section.links.map((link, i) => (
                  <li key={i} className="hover:text-white cursor-pointer">{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Alt Kısım */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Sosyal Medya */}
        <div className="flex space-x-4 text-white/70 text-xl">
          <FaDiscord className="hover:text-white cursor-pointer" />
          <FaXTwitter className="hover:text-white cursor-pointer" />
          <FaYoutube className="hover:text-white cursor-pointer" />
          <FaLinkedin className="hover:text-white cursor-pointer" />
        </div>

        {/* Telif Hakkı */}
        <p className="text-xs text-white/50 text-center">
          ©2025 COPYRIGHT UNICRAFT FOUNDATION. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
