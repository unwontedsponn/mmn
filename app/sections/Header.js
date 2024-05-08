import Link from 'next/link';

const Header = () => {
  return (
    <header className="shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-red-600">
          <Link href="/">
            <img src="https://uploads-ssl.webflow.com/63762c3e064651b696e64ed1/63c6de9a40bc654a546f167a_mmn-4.svg" alt="MMN Logo" style={{ height: '30px' }} />
          </Link>
        </div>
        {/* Navigation Section */}
        <nav>
          <ul className="flex items-center space-x-8">
            <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
            <li><Link href="/artists" className="text-gray-600 hover:text-gray-900">Artists</Link></li>
            <li><Link href="/faqs" className="text-gray-600 hover:text-gray-900">FAQs</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
            <li>

              {/* Buy Tickets Button */}
              <a href="https://open.spotify.com/show/7Hg8aL7xyELS2CJ9TKYykC?si=eb671e91da174363" className="bg-black text-white px-6 py-2 hover:bg-red-700" target="_blank" rel="noopener noreferrer">LISTEN TO EPISODES</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;



// Old links
{/* <li><Link href="/speakers" className="text-gray-600 hover:text-gray-900">Speakers</Link></li>
<li><Link href="/agenda" className="text-gray-600 hover:text-gray-900">Agenda</Link></li> */}
{/* <Link href="/tickets" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">BUY TICKETS</Link> */}