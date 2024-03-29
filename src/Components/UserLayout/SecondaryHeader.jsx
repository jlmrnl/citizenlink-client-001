import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SecondaryHeader() {
  const [showDropdown, setShowDropdown] = useState(false);

  const hideDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <header className="bg-red-800 text-white py-4">
      <div className="container mx-auto text-sm">
        <div className="flex space-x-6 ml-28">
          <Link
            to="/"
            className="text-white hover:text-cyan-500 transition-colors duration-300"
            onClick={hideDropdown}
          >
            Home
          </Link>
          <Link
            to="/about/abouttown"
            className="text-white hover:text-cyan-500 transition-colors duration-300"
            onClick={hideDropdown}
          >
            About
          </Link>
          <Link
            to="/news"
            className="text-white hover:text-cyan-500 transition-colors duration-300"
            onClick={hideDropdown}
          >
            News
          </Link>
          <Link
            to="benefits/benefit1"
            className="text-white hover:text-cyan-500 transition-colors duration-300"
            onClick={hideDropdown}
          >
            Benefits
          </Link>
          <Link
            to="/download"
            className="text-white hover:text-cyan-500 transition-colors duration-300"
            onClick={hideDropdown}
          >
            Download
          </Link>
        </div>
      </div>
    </header>
  );
}
