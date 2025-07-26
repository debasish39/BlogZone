import React from 'react';
import { FaCalendarAlt, FaTimes } from 'react-icons/fa';
import { FaDatabase, FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function BlogCard({ blogs }) {
  if (!blogs || blogs.length === 0) {
    return <p className="text-center text-gray-500">No blogs available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl active:shadow-2xl focus:shadow-2xl transition duration-300 flex flex-col"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-52 object-cover"
          />
          <div className="p-5 flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                {blog.title}
              </h2>

              <div className="flex items-center text-sm text-gray-600 gap-2 mb-2">
                <FaUser className="text-orange-500" />
                <span>{blog.author}</span>
              </div>

              <p className="text-gray-500 text-sm mb-3 flex items-center gap-2">
                
                 <FaCalendarAlt className="text-orange-500" /><span>
                {blog.published_date}</span>
              </p>

              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                {blog.description}
              </p>
            </div>

            {/* 🔗 Read More Button */}
            <Link
              to={`/blogs/${blog.id}`}
              className="inline-flex justify-end mt-auto text-orange-500 hover:text-orange-600 font-medium text-sm transition"
            >
              Read More →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
