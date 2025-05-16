import React from 'react';
import CircleProgress from './CircleProgress';
import NewCustomersChart from './NewCustomersChart';
import Stats from './Stats';
import KanbanBoard from './KanbanBoard';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onSearch={(query) => console.log('Search:', query)} />
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="col-span-2">
              <NewCustomersChart />
            </div>
            <div className="flex justify-center items-center">
              <CircleProgress percentage={68} label="Successful deals" />
            </div>
          </div>
          
          <div className="mb-6">
            <Stats />
          </div>
          
          <div>
            <KanbanBoard />
          </div>
        </div>
      </div>
    </div>
  );
}