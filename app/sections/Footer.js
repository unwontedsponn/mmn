import { FaSpotify, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Copyright */}
        <div>
          <img src="https://uploads-ssl.webflow.com/63762c3e064651b696e64ed1/63c6de9a40bc654a546f167a_mmn-4.svg" alt="MMN Logo" style={{ height: '30px' }} />
        </div>

        <p className="text-sm">© Copyright MMN 2023</p>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://spotify.com" className="hover:text-gray-400" aria-label="Spotify">
            <FaSpotify size={24} />
          </a>
          <a href="https://youtube.com" className="hover:text-gray-400" aria-label="YouTube">
            <FaYoutube size={24} />
          </a>
          <a href="https://tiktok.com" className="hover:text-gray-400" aria-label="TikTok">
            <FaTiktok size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
