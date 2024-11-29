import React, { useState } from "react";

export default function MoreDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      {/* More Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center bg-[#2874F0] text-white px-4 py-2 rounded-md shadow hover:bg-blue-600"
      >
        More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className={`w-4 h-4 ml-1 transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5 mr-2 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .414-.166.809-.439 1.091L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9"
                />
              </svg>
              Notification Preferences
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5 mr-2 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m2-4h.01M21 12.4V18c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-5.6a1.5 1.5 0 01.44-1.06l8-7a1.5 1.5 0 012.12 0l8 7a1.5 1.5 0 01.44 1.06z"
                />
              </svg>
              24x7 Customer Care
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5 mr-2 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 10l4.553 2.276a1 1 0 01-.553 1.894H5a1 1 0 01-.553-1.894L9 10h6z"
                />
              </svg>
              Advertise
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5 mr-2 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 12v2m0-2a4 4 0 100-8 4 4 0 000 8zm0 4v6m0 0h-4m4 0h4"
                />
              </svg>
              Download App
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
