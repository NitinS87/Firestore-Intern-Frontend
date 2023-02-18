import React from "react";
import { Link } from "react-router-dom";
import { Search, Dashboard, Create } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className="shadow-2xl border rounded-2xl p-2 my-2 sticky w-[80%] mx-auto">
      <ul className="flex justify-evenly items-center">
        <li className="p-2 hover:bg-gray-300/40 rounded-lg text-lg text-gray-500">
          <Link to="/" className="flex items-center justify-center">
            <Dashboard className="mr-1" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="p-2 hover:bg-gray-300/40 rounded-lg text-lg text-gray-500">
          <Link to="/create" className="flex items-center justify-center">
            <Create className="mr-1" />
            <span>Create</span>
          </Link>
        </li>
        <li className="p-2 hover:bg-gray-300/40 rounded-lg text-lg text-gray-500">
          <Link to="/search" className="flex items-center justify-center">
            <Search className="mr-1" />
            <span>Search</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
