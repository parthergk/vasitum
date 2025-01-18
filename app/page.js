import Dashboard from "@/components/Dashboard";
import MainMenu from "@/components/SideBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex h-screen">
      <MainMenu/>
      <Dashboard/>
    </main>
  );
}
