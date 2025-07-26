import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCode, FaPaintBrush, FaMobileAlt, FaRocket, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      icon: <FaCode className="text-4xl text-orange-500 mb-4" />,
      title: 'Web Development',
      description:
        'High-performance and responsive websites tailored to your needs using modern technologies.',
    },
    {
      icon: <FaMobileAlt className="text-4xl text-orange-500 mb-4" />,
      title: 'Mobile Apps',
      description:
        'Cross-platform mobile apps that are fast, functional, and beautifully designed.',
    },
    {
      icon: <FaPaintBrush className="text-4xl text-orange-500 mb-4" />,
      title: 'UI/UX Design',
      description:
        'Clean and modern interfaces that ensure excellent user experiences across all devices.',
    },
    {
      icon: <FaRocket className="text-4xl text-orange-500 mb-4" />,
      title: 'SEO & Performance',
      description:
        'Optimize your website for search engines and lightning-fast load speeds.',
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Header */}
      <div className="bg-black text-white py-20 px-4">
        <div
          className="max-w-6xl mx-auto text-center flex flex-col items-center justify-center pt-9"
          data-aos="fade-up"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Discover Our <span className="text-orange-500">Services</span>
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We offer powerful solutions that help your business grow online through quality design and tech.
          </p>

        <Link to='/blogs'className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300 text-white font-semibold px-6 py-3 rounded-full text-sm sm:text-base md:text-lg transition duration-300 group"
            data-aos="fade-up"
            data-aos-delay="200">
            Explore Blogs
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1 group-focus:translate-x-1 group-active:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 shadow-md rounded-lg p-6 text-center hover:shadow-xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
