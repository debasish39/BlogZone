import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6';

export default function Sidebar() {
  const [latestBlogs, setlatestBlogs] = useState([]);
  const [popularBlogs,setPopularBlogs]=useState([]);
  useEffect(() => {
    const fetchlatestBlogs = async () => {
      try {
        const res = await axios.get('https://raw.githubusercontent.com/debasish39/BlogApi/main/blogsData.json');
        const latestBlogs = res.data.slice(0,5); // You can sort by date or views if needed
        const popularBlogs=res.data.slice(12,17);
        console.log(popularBlogs);
        setlatestBlogs(latestBlogs);
        setPopularBlogs(popularBlogs);
      } catch (error) {
        console.log('Error fetching blogs:', error);
      }
    };

    fetchlatestBlogs();
  }, []);

  return (
    <aside className="bg-white p-6 shadow-md rounded-lg w-full lg:w-80">
      <h3 className="text-2xl font-bold mb-5 border-b pb-2 text-gray-800">Latest Blogs</h3>

      <ul className="space-y-4">
        {latestBlogs.map((blog) => (
          <li key={blog.id} className="flex gap-3 items-start border-b pb-4">
            {/* Optional image thumbnail */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-16 h-16 object-cover rounded-md flex-shrink-0"
            />

            <div>
              <Link to={`/blogs/${blog.id}`}>
                <h4 className="text-sm font-semibold text-gray-800 hover:text-orange-500 line-clamp-2">
                  {blog.title}
                </h4>
              </Link>
              <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <FaUser className="text-orange-400" /> {blog.author}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <h3 className="text-2xl font-bold mb-5 border-b pb-2 text-gray-800">Popular Blogs</h3>
     
      <ul>
        {popularBlogs.map((blog)=>(
          <li key={blog.id} className="flex gap-3 items-start border-b pb-4">
            {/* Optional image thumbnail */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-16 h-16 object-cover rounded-md flex-shrink-0"
            />
            <div>
              <Link to={`/blogs/${blog.id}`}>
                <h4 className="text-sm font-semibold text-gray-800 hover:text-orange-500 line-clamp-2">
                  {blog.title}
                </h4>
              </Link>
              <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <FaUser className="text-orange-400" /> {blog.author}
              </p>
            </div>
          </li>
        )
            
        )}
      </ul>
       </div>
    </aside>
  );
}
