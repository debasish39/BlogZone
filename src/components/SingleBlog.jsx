import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaUser, FaCalendarAlt, FaTag } from 'react-icons/fa';

export default function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await fetch(
          'https://raw.githubusercontent.com/debasish39/BlogApi/main/blogsData.json'
        );
        const data = await res.json();
        const foundBlog = data.find((item) => item.id === parseInt(id));
        setBlog(foundBlog);
        setLoading(false);
      } catch (error) {
        console.error('Error loading blog:', error);
        setLoading(false);
      }
    }

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40 text-lg text-gray-600">
        Loading blog...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center mt-16 text-red-500 text-xl">
        Blog not found. <Link to="/blogs" className="underline text-blue-600">Go back</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-30 lg:px-8 py-23 sm:py-30">
      <div className="flex flex-col lg:flex-row items-center gap-10 animate-fade-in lg:h-[69vh]">
        {/* 🖼 Image Left */}
        <div className="w-full lg:w-1/2">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-72 sm:h-96 object-cover rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 active:scale-105 focus:scale-105"
          />
        </div>

        {/* 📃 Text Right */}
        <div className="w-full lg:w-1/2">
          {/* 📌 Meta Info */}
          <div className="mb-4 flex flex-wrap lg:hidden items-center gap-5 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <FaUser className="text-orange-400" />
              {blog.author}
            </span>
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-orange-400" />
              {blog.published_date || 'Unknown Date'}
            </span>
            <span className="flex items-center gap-2">
              <FaTag className="text-orange-400" />
              {blog.category}
            </span>
          </div>

          {/* 📝 Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 leading-snug">
            {blog.title}
          </h1>

          {/* 📖 Description */}
          <p className="text-lg text-gray-700 leading-relaxed mb-1">
            {blog.description}
          </p>
           {/* 📌 Meta Info */}
          <div className="mb-4 hidden flex-wrap  items-center gap-5 text-sm text-gray-500 lg:flex">
            <span className="flex items-center gap-2">
              <FaUser className="text-orange-400" />
              {blog.author}
            </span>
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-orange-400" />
              {blog.published_date || 'Unknown Date'}
            </span>
            <span className="flex items-center gap-2">
              <FaTag className="text-orange-400" />
              {blog.category}
            </span>
          </div>
          <p className='text-xl mb-3 text-gray-500'>
            {blog.content}
          </p>

          {/* 🔙 Back Button */}
          <Link
            to="/blogs"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-shadow shadow-md hover:shadow-lg"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}
