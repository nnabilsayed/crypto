import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Navbar = () => {
  return (
    <>
      <div className="flex flex-row text-white p-3 items-center">
        <Link to="/">
          <div className="NavBar-Logo">
            <h2 className="text-black text-3xl font-bold">
              CRYP
              <span className="text-blue-400">TO</span>
            </h2>
          </div>
        </Link>

        <Link
          className="text-1xl ml-4 font-mono text-black  hover:border-blue-950"
          to="/new"
        >
          News
        </Link>
      </div>
    </>
  );
};

export default Navbar;
