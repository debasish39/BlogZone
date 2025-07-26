import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import Banner from '../components/Banner';

export default function About() {
  return (
    <div className="bg-white text-black">
      
    <Banner/>

      {/* 🔸 About Us Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-full mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Who We Are</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-full mx-auto">
            We’re a passionate team of developers, writers, and designers committed to sharing knowledge and inspiration through our blog. Whether you're a coding enthusiast, a tech learner, or just someone who loves reading — our blog is made for you.
            <br />
            <br />
            We believe in making complex topics simple, engaging, and accessible to all.
          </p>
        </div>
      </section>

      {/* 🔸 Mission Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-orange-500">Our Mission</h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Our mission is to empower learners and professionals with up-to-date, practical knowledge through well-researched, easy-to-understand content.
              <br />
              <br />
              From web development tutorials to insights on design trends — we aim to build a valuable learning space for everyone.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80"
              alt="Our team"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
