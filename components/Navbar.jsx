"use client";

import Link from "next/link";
import Logo from "./Logo";
import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center py-6">
      <Link href="/" className="w-1/3 max-w-80 text-accent">
        <Logo />
      </Link>
    </div>
  );
};

export default Navbar;
