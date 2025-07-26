import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import BlogCard from '../components/BlogCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 900, once: false });

    async function fetchBlogs() {
      try {
        const res = await fetch('https://raw.githubusercontent.com/debasish39/BlogApi/main/blogsData.json');
        const data = await res.json();
        setBlogs(data.slice(0, 3)); // Show only top 3 blogs
      } catch (err) {
        console.error("Failed to fetch blogs", err);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <div>
      <Banner />

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
            data-aos="fade-up"
          >
            Featured <span className="text-orange-500">Blogs</span>
          </h2>

          <p
            className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            Read our handpicked articles covering the latest in web development, design, and technology.
          </p>

          <div data-aos="fade-up" data-aos-delay="200">
            <BlogCard blogs={blogs} />
          </div>

          <a
            href="/blogs"
            aria-label="Explore all blogs"
            className="mt-10 inline-block bg-orange-500 text-white px-6 py-3 rounded-full text-sm sm:text-base transition 
              hover:bg-orange-600 
              focus:outline-none focus:ring-4 focus:ring-orange-300 
              active:bg-orange-700"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Explore All Blogs →
          </a>
        </div>
      </section>
    </div>
  );
}
