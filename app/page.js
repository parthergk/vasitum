"use client"
import Dashboard from "@/components/Dashboard";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { useState } from "react";

export default function Home() {
  const [isOpen , setIsOpen] = useState(false);

  return (
    <main className="flex w-full h-screen">
      <SideBar isOpen={isOpen}/>
      <div className=" flex flex-col w-full">
      <NavBar setIsOpen={setIsOpen}/>
      <Dashboard/>
      </div>
      </main>
  );
}
