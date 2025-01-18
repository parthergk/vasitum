import Dashboard from "@/components/Dashboard";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <main className="flex w-full h-screen">
      <SideBar/>
      <div className=" flex flex-col w-full">
      <NavBar/>
      <Dashboard/>
      </div>
      </main>
  );
}
