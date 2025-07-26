import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import Sidebar from './Sidebar';

export default function BlogPage() {
  const [allBlogs, setAllBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/debasish39/BlogApi/main/blogsData.json'
        );
        const data = await response.json();
        setAllBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  useEffect(() => {
    let filtered = allBlogs;
    if (selectedCategory !== "All") {
      filtered = allBlogs.filter((blog) => blog.category === selectedCategory);
    }

    const start = (currentPage - 1) * pageSize;
    const paginated = filtered.slice(start, start + pageSize);
    setBlogs(paginated);
  }, [allBlogs, selectedCategory, currentPage]);

  const categories = ["All", ...new Set(allBlogs.map((b) => b.category))];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-40 text-lg text-gray-600">
        Loading blogs...
      </div>
    );
  }

  return (
    <section className="bg-white py-4 px-4 sm:px-6 lg:px-12">
      {/* 🔸 Category Filter */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex sm:flex-wrap gap-3 justify-start sm:justify-center w-max sm:w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`whitespace-nowrap px-4 py-2 rounded-full border transition text-sm font-medium ${
                selectedCategory === cat
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 🔸 Grid Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Blog Grid */}
        <div className="w-full lg:w-3/4">
          <BlogCard blogs={blogs} />
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/4">
          <Sidebar />
        </div>
      </div>

      {/* 🔸 Pagination */}
      <div className="mt-12 flex justify-center flex-wrap gap-3">
        {Array.from({
          length: Math.ceil(
            (selectedCategory === "All"
              ? allBlogs.length
              : allBlogs.filter((b) => b.category === selectedCategory).length) / pageSize
          ),
        }).map((_, index) => (
          <button
            key={index}
            className={`w-10 h-10 text-sm rounded-full font-semibold transition duration-200 ${
              currentPage === index + 1
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
