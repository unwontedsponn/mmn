import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Copyright */}
        <div>
          <h1 className="text-3xl font-bold text-red-600">mmn</h1>
          <p className="text-sm">© Copyright MMN 2023</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="hover:text-gray-400" aria-label="Facebook">
            <FaFacebook size={24} />
          </a>
          <a href="https://instagram.com" className="hover:text-gray-400" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
