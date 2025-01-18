import React from "react";

import StatsCard from "../cards/StatsCard";
import ChartCard from "../cards/ChartCard";
import ListCard from "../cards/ListCard";

const Dashboard = () => {
  // Sample data
  const statsData = [
    {
      title: "Available Position",
      value: 24,
      subText: "4 Urgently needed",
      bgColor: "bg-[#FFEFE7]",
      subTextColor: "text-[#FF5151]",
    },
    {
      title: "Job Open",
      value: 10,
      subText: "4 Active hiring",
      bgColor: "bg-[#E8F0FB]",
      subTextColor: "text-[#3786F1]",
    },
    {
      title: "New Employees",
      value: 24,
      subText: "4 Department",
      bgColor: "bg-[#FDEBF9]",
      subTextColor: "text-[#EE61CF]",
    },
  ];

  const employeeChartData = [
    { month: "Jan", value: 180 },
    { month: "Feb", value: 190 },
    { month: "Mar", value: 200 },
    { month: "Apr", value: 216 },
  ];

  const talentChartData = [
    { month: "Jan", value: 10 },
    { month: "Feb", value: 12 },
    { month: "Mar", value: 14 },
    { month: "Apr", value: 16 },
  ];

  const announcements = [
    { title: "Outing schedule for every department", time: "5 Minutes ago" },
    { title: "Meeting HR Department", time: "Yesterday, 12:30 PM" },
    { title: "IT Department need two more talents for UX/UI Designer position", time: "Yesterday, 09:15 AM" },
  ];

  const schedules = [
    { title: "Review candidate applications", time: "Today 11:30 AM" },
    { title: "Interview with candidates", time: "Today 11:30 AM" },
    { title: "Short meeting with product designer from IT Department", time: "Today 09:15 AM" },
  ];

  return (
    <div className="w-full flex flex-col p-5 md:p-8 overflow-y-scroll">
      <h1 className="text-2xl font-medium mb-6">Dashboard</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Side */}
        <div className="flex flex-col space-y-6 flex-1">
        
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {statsData.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ChartCard
              title="Total Employees"
              value="216"
              details={["120 Men", "96 Women"]}
              chartData={employeeChartData}
              strokeColor="#3786F1"
              percentageChange="+2% Past month"
            />
            <ChartCard
              title="Talent Request"
              value="16"
              details={["5 Men", "11 Women"]}
              chartData={talentChartData}
              strokeColor="#EE61CF"
              percentageChange="+5% Past month"
            />
          </div>
         
          {/* Announcements */}
          <ListCard
            title="Announcement"
            items={announcements}
            buttonText="See All Announcements"
            date="Today, 13 Sep 2021"
          />
        </div>
       
        {/* Right Side */}
        <div className="w-full lg:w-80 space-y-6">
          <div className="bg-[#1B204A] text-white rounded-lg p-3">
            <h3 className="text-lg mb-2 px-3">Recently Activity</h3>
            <div className="my-4 px-3">
              <p className="text-base">You Posted a New Job</p>
              <p className="text-sm opacity-60 mt-1">
                Kindly check the requirements and terms of work and make sure everything is right.
              </p>
            </div>
            <p className="text-sm p-3">Today you made 12 activities</p>
            <button className="w-full bg-red-500 text-white text-sm p-1 rounded">
              See All Activity
            </button>
          </div>
         
          <ListCard
            title="Upcoming Schedule"
            items={schedules}
            buttonText="Create a New Schedule"
            date="Today, 13 Sep 2021"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
