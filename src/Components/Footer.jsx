import React from "react";

const Footer = () => {
  return (
    <footer className=" rounded-lg shadow m-4 bg-blue-200 text-black">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between text-black">
        <span className="text-sm text-black sm:text-center ">
          © 2023{" "}
          <a
            href="https://flowbite.com/"
            className="hover:underline text-black"
          >
            CRYPTO™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
