import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa6';
import AOS from 'aos';
import 'aos/dist/aos.css';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_WEB3FORM_ACCESS_KEY,
        subject: 'New Contact Message from BlogZone',
        from_name: 'BlogZone Contact Form',
        ...formData,
      }),
    });

    if (res.ok) {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      toast.error('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="bg-white min-h-screen text-black">
      <Toaster position="top-center" />

      {/* Hero Section */}
      <section className="bg-black text-white py-20 mt-3 px-4">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Get in <span className="text-orange-500">Touch With Us</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
            Have a question, feedback, or just want to say hello? We'd love to hear from you.
          </p>
         
            <Link to="/blogs" className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-700 focus:ring-2 focus:ring-orange-300 text-white font-semibold px-6 py-3 rounded-full text-sm sm:text-base md:text-lg transition duration-300 group">
              Explore Blogs
            
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" /></Link>
          
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6" data-aos="fade-right">
            <h2 className="text-3xl font-bold text-gray-800">Contact Information</h2>
            <p className="text-gray-600">
              Feel free to reach out through any of the platforms below, or use the form to send us a message directly.
            </p>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-orange-500" /><a href='mailto:djproject963@gmail.com'> djproject963@gmail.com</a>
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange-500" /> <a href='tel:+91 70778 6**14'>+91 70778 6**4</a>
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-orange-500" /> Berhampur,Odisha,India
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#"><FaFacebook className="text-xl text-black hover:text-blue-600 transition" /></a>
              <a href="#"><FaTwitter className="text-xl text-black hover:text-blue-400 transition" /></a>
              <a href="#"><FaLinkedin className="text-xl text-black hover:text-blue-700 transition" /></a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6" data-aos="fade-left">
            <div>
              <label className="block text-gray-700 mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1 font-medium">Message</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Type your message here..."
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-700 focus:ring-2 focus:ring-orange-300 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
