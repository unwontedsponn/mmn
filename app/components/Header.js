import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-red-600">
          <Link href="/">mmn</Link>
        </div>
        {/* Navigation Section */}
        <nav>
          <ul className="flex items-center space-x-8">
            <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
            <li><Link href="/speakers" className="text-gray-600 hover:text-gray-900">Speakers</Link></li>
            <li><Link href="/agenda" className="text-gray-600 hover:text-gray-900">Agenda</Link></li>
            <li><Link href="/faqs" className="text-gray-600 hover:text-gray-900">FAQs</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
            <li>
              {/* Buy Tickets Button */}
              <Link href="/tickets" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">BUY TICKETS</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
