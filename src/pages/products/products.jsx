import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [data, setData] = useState([]); // State to store the fetched data
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  const ApiCall = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/");
      const fetchedData = await res.json();
      setData(fetchedData); // Set the fetched data to the state
    } catch (error) {
      console.error("Error fetching data:", error); // Handle fetch errors
    }
  };

  useEffect(() => {
    ApiCall();
  }, []); // Fetch data only once when the component mounts

  const handleImageClick = (productId) => {
    // Navigate to the product detail page using the product's id
    navigate(`/productdetails/${productId}`);
  };

  // Filtered data based on the search query
  const filteredData = data.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 mt-14">
      {/* Hero Section */}
      <div className="w-full bg-pink-600 text-white py-6 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Wedding Collections of the Season!
        </h1>
        <p className="mt-2 sm:text-lg">Shop Now with 10% Instant Discounts</p>
      </div>

      {/* Search Bar */}
      <div className="w-full sm:w-11/12 mt-4 px-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      {/* Categories */}
      <div className="w-full sm:w-11/12 mt-8">
        <h2 className="text-xl font-bold mb-4">Best of Electronics</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredData.slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg p-4 text-center cursor-pointer hover:scale-105 transform transition-all duration-300"
              onClick={() => handleImageClick(product.id)}
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-32 w-auto mx-auto hover:opacity-90 transition-opacity duration-300"
              />
              <h3 className="text-sm font-semibold mt-2">{product.title}</h3>
              <p className="text-blue-500 mt-1">From ₹{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full sm:w-11/12 mt-8">
        <h2 className="text-xl font-bold mb-4">Beauty, Food, Toys & More</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {data.slice(6, 12).map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg p-4 text-center cursor-pointer hover:scale-105 transform transition-all duration-300"
              onClick={() => handleImageClick(product.id)} // Call handleImageClick when the image is clicked
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-32 w-auto mx-auto hover:opacity-90 transition-opacity duration-300"
              />
              <h3 className="text-sm font-semibold mt-2">{product.title}</h3>
              <p className="text-blue-500 mt-1">From ₹{product.price}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="w-full sm:w-11/12 mt-8">
        <h2 className="text-xl font-bold mb-4">Electronics gadget and fashion wear</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {data.slice(12, 18).map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg p-4 text-center cursor-pointer hover:scale-105 transform transition-all duration-300"
              onClick={() => handleImageClick(product.id)} // Call handleImageClick when the image is clicked
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-32 w-auto mx-auto hover:opacity-90 transition-opacity duration-300"
              />
              <h3 className="text-sm font-semibold mt-2">{product.title}</h3>
              <p className="text-blue-500 mt-1">From ₹{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full sm:w-11/12 mt-8">
        <h2 className="text-xl font-bold mb-4">Winter Collection Special</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {data.slice(14, 24).map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg p-4 text-center cursor-pointer hover:scale-105 transform transition-all duration-300"
              onClick={() => handleImageClick(product.id)} // Call handleImageClick when the image is clicked
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-32 w-auto mx-auto hover:opacity-90 transition-opacity duration-300"
              />
              <h3 className="text-sm font-semibold mt-2">{product.title}</h3>
              <p className="text-blue-500 mt-1">From ₹{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
