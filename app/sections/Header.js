"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {  // Change the background if scrolled over 50px
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled ? 'bg-snow' : 'bg-transparent'} fixed top-0 w-full z-20 transition-colors duration-300 ease-in-out`}>
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-red-600">
          <Link href="/">
            <img src="https://uploads-ssl.webflow.com/63762c3e064651b696e64ed1/63c6de9a40bc654a546f167a_mmn-4.svg" alt="MMN Logo" style={{ height: '30px' }} />
          </Link>
        </div>
        {/* Navigation Section */}
        <nav>
          <ul className="flex items-center space-x-8">
            <li><Link href="/about" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hidden md:block hover:text-gray-900`}>About</Link></li>
            <li><Link href="/artists" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hidden md:block hover:text-gray-900`}>Artists</Link></li>
            <li><Link href="/faqs" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hidden md:block hover:text-gray-900`}>FAQs</Link></li>
            <li><Link href="/contact" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hidden md:block hover:text-gray-900`}>Contact</Link></li>
            <li>
              {/* Buy Tickets Button */}
              <a href="https://open.spotify.com/show/7Hg8aL7xyELS2CJ9TKYykC?si=eb671e91da174363" className="bg-red md:bg-black text-white px-6 py-2 hover:bg-red" target="_blank" rel="noopener noreferrer">LISTEN TO EPISODES</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
