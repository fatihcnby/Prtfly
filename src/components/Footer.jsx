import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-200/85 text-black py-8 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {currentYear} FATİH . Tüm Hakları Saklıdır.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-300"
              aria-label="Github"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-300"
              aria-label="Linkedin"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-sm">
              <a
                href="#skills"
                className="text-gray-700 hover:text-gray-950 transition-colors duration-300"
              >
                Yetenekler
              </a>
              <li>
                <a
                  href="#experience"
                  className="text-gray-700 hover:text-gray-950 transition-colors duration-300"
                >
                  Tecrübeler
                </a>
              </li>
              <li>
                <a
                  href="#languages"
                  className="text-gray-700 hover:text-gray-950 transition-colors duration-300"
                >
                  Diller
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-700 hover:text-gray-950 transition-colors duration-300"
                >
                  Projeler
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
