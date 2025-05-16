"use client";
import React from "react";
import {
  Search,
  SlidersHorizontal,
  ChevronRight,
  ListFilter,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  return (
    <div className="w-full bg-[#f6f7ed]  border-">
      <div className="flex items-center justify-between">
        <div className="relative w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none bg-[#f6f7ed]">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search customer..."
            className="pl-10 pr-4 py-2 w-full rounded-md  bg-[#f6f7ed] text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>

        <div className="flex items-center space-x-4">
          <Button className="flex bg-transparent hover:bg-amber-50 cursor-pointer gap-2 items-center text-sm font-medium text-gray-700">
            <ListFilter size={16} className="text-gray-500" />
            <span className="mr-1">Sort by</span>
          </Button>

          <Button className="flex bg-transparent hover:bg-amber-50 cursor-pointer gap-2 items-center text-sm font-medium text-gray-700">
            <SlidersHorizontal size={16} className="text-gray-500" />
            <span className="mr-1">Filters</span>
          </Button>

          <Button className="flex bg-transparent hover:bg-amber-50 cursor-pointer gap-2 items-center text-sm font-medium text-gray-700">
            <User size={16} className="text-gray-500" />
            <span className="mr-1">Me</span>
          </Button>

          <Button className="px-3 py-1.5 bg-black text-white rounded-md text-sm font-medium flex items-center cursor-pointer">
            <span className="mr-1">+</span>
            Add customer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
