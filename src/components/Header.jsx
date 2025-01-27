import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between pl-20 pr-20 pt-3">
      <div className="text-2xl  pt-2">
        <h1>Logo</h1>
      </div>
      <ul className="flex gap-20 text-2xl shadow-2xl rounded-3xl p-4 ">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/About">
          <li>About</li>
        </NavLink>
        <NavLink to="/Product">
          <li>product</li>
        </NavLink>
        <NavLink className="hover:bg-red-600 active:to-blue-700 " to="contect">
          <li>Contect</li>
        </NavLink>
      </ul>
      <div className="mt-2">
        <button className="bg-blue-600  py-2 px-8 text-2xl rounded-3xl">
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
