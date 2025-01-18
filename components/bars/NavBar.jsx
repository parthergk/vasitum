"use client";
import {
  AlignJustify,
  BellDot,
  CircleUserRound,
  MessageSquareDot,
  Search,
} from "lucide-react";
import React, { useState } from "react";

const NavBar = ({ setIsOpen }) => {
  const [input, setInput] = useState("");
  return (
    <div className="w-full h-[61px] px-5 py-8 flex justify-between items-center border-b border-b-neutral-300">
      <div className=" flex space-x-5 items-center">
        <div
          onClick={() => {
            setIsOpen((pre) => !pre);
          }}
          className=" cursor-pointer block sm:hidden"
        >
          <AlignJustify className=" text-[#B3B3B3] h-6 w-6" />
        </div>
        <div className="w-full flex justify-center items-center  h-11 px-3 p-2 bg-transparent sm:bg-[#fafafa] text-[#B3B3B3] sm:border rounded-sm border-neutral-200">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search"
            className="  text-base outline-none ring-0 bg-[#fafafa] hidden sm:block w-72"
          />
          <Search className=" h-6 w-6" />
        </div>
      </div>
      <div className=" flex space-x-5 text-[#B3B3B3]">
        <BellDot className=" cursor-pointer h-6 w-6" />
        <MessageSquareDot className=" cursor-pointer h-6 w-6" />
        <CircleUserRound className=" cursor-pointer h-6 w-6" />
      </div>
    </div>
  );
};

export default NavBar;
