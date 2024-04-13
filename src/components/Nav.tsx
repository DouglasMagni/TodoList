import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const { pathname } = useNav();

  return (
    <div>
      <nav className="navbar mb-40 h-32 relative">
        <ul className="flex justify-between items-center mx-6 text-xl">
          <li>
            <Link to="/">
              <img
                src="client/images/logo.png"
                alt="Bright Logo"
                style={{ width: "200px", height: "auto" }}
              />
            </Link>
          </li>
          <li className="ml-auto">
            {/* Search bar */}
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </li>
          <li className="ml-4">
            <Link
              to="/"
              className={`text-xl hover:text-blue-500 mr-20 ${
                pathname === "/" ? "text-gray-800" : "text-black"
              }`}
            >
              Jobs List
            </Link>
          </li>
          <li className="ml-4">
            <Link
              to="/add"
              className={`hover:text-blue-500 ${
                pathname === "/add" ? "text-gray-800" : "text-black"
              }`}
            >
              Add Job
            </Link>
          </li>
        </ul>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300"></div>
      </nav>
    </div>
  );
}

export default Nav;
function useNav(): { pathname: any } {
  throw new Error("Function not implemented.");
}
