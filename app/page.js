"use client";
import Dashboard from "@/components/allPages/Dashboard";
import Department from "@/components/allPages/Department";
import Employe from "@/components/allPages/Employe";
import Recruitment from "@/components/allPages/Recruitment";
import Schedule from "@/components/allPages/Schedule";
import NavBar from "@/components/bars/NavBar";
import SideBar from "@/components/bars/SideBar";
import { usePageContext } from "@/context/PageProvider";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const context = usePageContext();

  const pages = [
    { name: "dashboard", component: <Dashboard /> },
    { name: "recruitment", component: <Recruitment /> },
    { name: "employe", component: <Employe /> },
    { name: "department", component: <Department /> },
    { name: "schedule", component: <Schedule /> },
  ];

  const activeComp = pages.find((item) => item.name === context.page);

  return (
    <main className="flex w-full h-screen">
      <SideBar isOpen={isOpen} />
      <div className="flex flex-col w-full">
        <NavBar setIsOpen={setIsOpen} />
        {activeComp ? activeComp.component : <div>Page not found</div>}
      </div>
    </main>
  );
}
