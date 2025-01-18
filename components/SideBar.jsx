import { Boxes, Calendar, Headset, LayoutDashboard, Settings, UserPlus, Users } from "lucide-react";
import Image from "next/image";
import React from "react";
import Section from "./Section";

const SideBar = ({isOpen}) => {
  const sections = [
    {
      title: "MAIN MENU",
      items: [
        { name: "Dashboard", icon: LayoutDashboard },
        { name: "Recruitment", icon: UserPlus },
        { name: "Schedule", icon: Calendar },
        { name: "Employee", icon: Users },
        { name: "Department", icon: Boxes },
      ],
    },
    {
      title: "Other",
      items: [
        { name: "Support", icon: Headset },
        { name: "Settings", icon: Settings },
      ],
    },
  ];

  return (
    <div className={` ${isOpen ? 'block': 'hidden'} sm:block w-full h-full min-w-[212px] sm:min-w-[90px] md:max-w-[242px] bg-[#fafafa] pt-5 px-8 sm:px-2 md:px-8 space-y-10`}>
      {/* Logo Section */}
      <div className=" w-full flex justify-center items-center gap-2 py-2">
        <Image alt="logo" src="/img/logo.png" width={36} height={36} />
        <h3 className="font-semibold text-2xl text-[#0A337A] sm:hidden md:block">Vasitum</h3>
      </div>

      {/* Menu Sections */}
      {sections.map((section) => (
        <Section key={section.title} title={section.title} items={section.items} />
      ))}
    </div>
  );
};

export default SideBar;
