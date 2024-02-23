import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="w-100 h-auto ml-5 mr-5 bg-slate-400 flex flex-row justify-between">
      <Link href={"/"}>
        <img
          src="https://seeklogo.com/images/A/adalet-logo-551A396F76-seeklogo.com.png"
          alt="Logo"
          className="w-20 px-1 ml-2"
        />
      </Link>
      <Link
        className="py-6 px-2 m-2 bg-slate-800 text-white font-semibold rounded-full shadow-md hover:bg-slate-600 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
        href={"/addproduct"}
      >
        <h1 className="">Add Employee</h1>
      </Link>
    </nav>
  );
}

export default Navbar;
