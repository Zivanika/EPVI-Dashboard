"use client";

import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import KanbanBoard from "./components/KanbanBoard";
import NewCustomersChart from "./components/NewCustomersChart";
import Stats from "./components/Stats";
import { Circle } from "lucide-react";
import CircleProgress from "./components/CircleProgress";
import Dashboard from "./components/Dashboard";
import { Card } from "./components/Card";

export default function Home() {
  const onSearch = (query: string) => {
    console.log("Search:", query);
  };

  return (
    <div className="flex h-screen">
      <div className="w-[230px] bg-white border-r">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col">
        <div className="border-b px-6 pt-4 bg-[#f6f7ed]">
          <Header onSearch={onSearch} />
          <div className="w-full flex justify-between items-center mt-4">
            <NewCustomersChart />
            <CircleProgress />
            <Stats />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-6 py-4 bg-[#fdfdfd]">
          <KanbanBoard />
        </div>
      </div>
    </div>
  );
}
