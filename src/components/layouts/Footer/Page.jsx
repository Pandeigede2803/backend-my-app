import React from 'react';
import { FaInstagram, FaWhatsapp, FaGithub, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mx-10">
          <div className="text-xl font-semibold">Your Company</div>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/dedesudiahna/" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="https://wa.me/+6281237742442" className="hover:text-gray-400">
              <FaWhatsapp size={24} />
            </a>
            <a href="https://github.com/pandeigede2803" className="hover:text-gray-400">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
        <div className="mt-4 text-sm mx-10">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
