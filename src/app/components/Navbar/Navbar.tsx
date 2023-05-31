"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menu = ["About", "Courses", "Events", "Contact"];
  return (
    <nav
      className={`fixed top-0 left-0 flex justify-between items-center w-full p-4 transition-all duration-500 z-50 ${
        isScrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-16 h-16 relative">
        <Image src="/static/images/logo_white_png.png" fill style={{objectFit: "contain"}} alt="Men's Circle Logo"/>
      </div>
      <div className="flex gap-5 items-center">
      {menu.map((item, i) => {
        return <p key={i} style={{fontSize: 16}}>{item}</p>
      })}
      <p style={{fontSize: 16, backgroundColor: "#FD9772", borderRadius: "5px", padding: 5}}>FREE TRIAL</p>
      </div>
    </nav>
  );
};

export default Navbar;