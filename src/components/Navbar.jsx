import React from "react";

import { RiMovie2Line } from "react-icons/ri";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-2.5 flex items-center space-x-5 border">
      <RiMovie2Line className="text-4xl text-white bg-blue-900 rounded-lg p-1" />
      <Link to="/" className="text-lg font-semibold">
        Movies
      </Link>
      <Link to="/favourites" className="text-lg font-semibold">
        Favourites
      </Link>
    </div>
  );
};

export default Navbar;
