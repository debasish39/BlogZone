import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 " style={{ fontFamily: 'cursive' }}>Blog<span className="text-orange-500">Zone</span></h2>
          <p className="text-gray-400 text-sm">
            Your daily source of articles, tech insights, and community-driven stories.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/" className="hover:text-orange-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-orange-400 transition">About</a></li>
            <li><a href="/blogs" className="hover:text-orange-400 transition">Blogs</a></li>
            <li><a href="/contact" className="hover:text-orange-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/services" className="hover:text-orange-400 transition">Content Writing</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Web Development</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">SEO Optimization</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-500 transition"><FaFacebook /></a>
            <a href="#" className="hover:text-sky-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-600 transition"><FaLinkedin /></a>
            <a href="#" className="hover:text-gray-500 transition"><FaGithub /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} BlogZone. All rights reserved.
      </div>
    </footer>
  );
}
