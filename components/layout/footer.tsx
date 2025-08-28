import Link from 'next/link';
import { Music, Mail, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Categories',
      links: [
        { name: 'Guitars', href: '/category/guitars' },
        { name: 'Studio Gear', href: '/category/studio-gear' },
        { name: 'Headphones', href: '/category/headphones' },
        { name: 'Keyboards', href: '/category/keyboards' },
        { name: 'Audio Interfaces', href: '/category/audio-interfaces' },
        { name: 'Accessories', href: '/category/accessories' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Deal Alerts', href: '/newsletter' },
        { name: 'Price Drop Alerts', href: '/alerts' },
        { name: 'Buyer\'s Guide', href: '/guides' },
        { name: 'Reviews', href: '/reviews' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Affiliate Disclosure', href: '/disclosure' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-2 rounded-lg">
                <Music className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">360ismusic</span>
            </div>
            <p className="text-gray-300 mb-4">
              Discover the best Amazon deals on music instruments, studio gear, and audio equipment. 
              Save money on your music journey with our curated deals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} 360ismusic. All rights reserved. 
            </p>
            <p className="text-gray-400 text-xs">
              As an Amazon India Associate, we earn from qualifying purchases. 
              Prices and availability are subject to change.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}