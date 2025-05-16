"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CheckSquare,
  Activity,
  Users,
  Settings,
  Zap,
  TrendingUp,
  LogOut,
  BarChart,
  Home,
  Briefcase,
  ChartLine,
} from "lucide-react";
import u1 from "@/app/assets/u1.jpg";
import u2 from "@/app/assets/u2.jpg";
import u3 from "@/app/assets/u3.jpg";
import u4 from "@/app/assets/u4.jpg";
import u6 from "@/app/assets/u6.jpg";

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  count?: number;
}

const SidebarItem = ({ href, icon, label, count }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium ${
        isActive
          ? "bg-gray-100 text-gray-900"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      <div className="flex items-center flex-1">
        <span className="mr-3 text-gray-500">{icon}</span>
        <span>{label}</span>
      </div>
      {count !== undefined && (
        <span className="ml-auto bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">
          {count}
        </span>
      )}
    </Link>
  );
};
const members = [
  { name: "Sandra Perry", role: "Product Manager", img: u3 },
  { name: "Antony Cardenas", role: "Sales Manager", img: u1 },
  { name: "Jamal Connolly", role: "Content Manager", img: u2 },
  { name: "Cara Carr", role: "SEO Specialist", img: u4 },
  { name: "Iona Rollins", role: "", img: u6 },
];
const Sidebar = () => {
  return (
    <div className="w-56 h-screen bg-white  flex flex-col">
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold">BizLink</h1>
      </div>

      <div className="flex-1 px-3 py-2 space-y-">
        <SidebarItem
          href="/dashboard"
          icon={<Home size={18} />}
          label="Dashboard"
        />
        <SidebarItem
          href="/tasks"
          icon={<Briefcase size={18} />}
          label="Tasks"
          count={2}
        />
        <SidebarItem
          href="/activity"
          icon={<ChartLine size={18} />}
          label="Activity"
        />
        <SidebarItem
          href="/customers"
          icon={<Users size={18} />}
          label="Customers"
        />
        <SidebarItem
          href="/settings"
          icon={<Settings size={18} />}
          label="Settings"
        />
      </div>

      <div className="px-3 pt-4 pb-2">
        <h3 className="px-3 text-xs font-semibold text-gray-500  tracking-wider">
          Projects
        </h3>
        <div className="mt-2 space-y-">
          <SidebarItem
            href="/bizconnect"
            icon={<Zap size={18} />}
            label="BizConnect"
            count={7}
          />
          <SidebarItem
            href="/growth-hub"
            icon={<TrendingUp size={18} />}
            label="Growth Hub"
          />
          <SidebarItem
            href="/conversion-path"
            icon={<LogOut size={18} />}
            label="Conversion Path"
          />
          <SidebarItem
            href="/marketing"
            icon={<BarChart size={18} />}
            label="Marketing"
          />
        </div>
      </div>

      <div className="px-3 pt-4 pb-6">
        <h3 className="px-3 text-xs font-semibold text-gray-500  tracking-wider flex justify-between items-center">
          Members
          <button className="text-gray-500 hover:text-gray-600">
            <span className="text-xl font-bold">+</span>
          </button>
        </h3>
        <div className="mt-2 ">
          {members.map((member, i) => (
            <div key={i} className="flex items-center px-3 py-2 text-sm">
              <div className="relative h-6 w-6 rounded-full overflow-hidden bg-gray-200 mr-3 flex-shrink-0">
                <img
                  src={member.img.src}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
                {member.name !== "Iona Rollins" &&
                  member.name !== "Jamal Connolly" && (
                    <div className="p-[2px] bg-white absolute bottom-0 right-0 rounded-full z-40">
                      <div className="bg-green-500 h-2 w-2 rounded-full z-50"></div>
                    </div>
                  )}
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-gray-900">{member.name}</span>
                {member.role && (
                  <span className="text-xs text-gray-500">{member.role}</span>
                )}
              </div>
              {member.name === "Iona Rollins" && (
                <span className="ml-auto text-gray-700">
                  <LogOut size={14} />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
