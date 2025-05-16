import React from "react";
import { ArrowUpDown } from "lucide-react";
import { Card, ContactCard } from "./Card";

type Deal = {
  title: string;
  description: string;
  date?: string;
  dueDate?: string;
  comments?: number;
  tasks?: number;
  users?: number;
  address?: string;
  contact?: string;
  manager?: string;
};

type KanbanColumnProps = {
  title: string;
  count: number;
  deals: Deal[];
};

const KanbanColumn = ({ title, count, deals }: KanbanColumnProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center justify-between space-x-2 w-full">
          <h2 className="font-medium">{title}</h2>
          <div className="flex items-center space-x-1 bg-white border text-sm px-2 py-1 rounded-md shadow-sm">
            <span className="font-medium text-gray-900">{count}</span>
            <button className="text-gray-400 hover:text-gray-600">
              <ArrowUpDown size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {deals.map((deal, index) =>
          deal.address ? (
            <ContactCard
              key={index}
              title={deal.title}
              subtitle={deal.description}
              date={deal.date}
              dueDate={deal.dueDate}
              comments={deal.comments}
              tasks={deal.tasks}
              users={deal.users}
              address={deal.address}
              contact={deal.contact}
              manager={deal.manager}
            />
          ) : (
            <Card
              key={index}
              columnTitle={title}
              title={deal.title}
              subtitle={deal.description}
              date={deal.date || deal.dueDate}
              comments={deal.comments}
              tasks={deal.tasks}
              users={deal.users}
            />
          )
        )}
      </div>
    </div>
  );
};

const KanbanBoard = () => {
  const columns = [
    {
      title: "Contacted",
      count: 12,
      deals: [
        {
          title: "ByteBridge",
          description:
            "Corporate and personal data protection on a turnkey basis",
          date: "18 Apr",
          comments: 2,
          tasks: 1,
        },
        {
          title: "AI Synergy",
          description: "Innovative solutions based on artificial intelligence",
          date: "21 Mar",
          users: 1,
          tasks: 3,
        },
        {
          title: "LeadBoost Agency",
          description: "Lead attraction and automation for small business",
          dueDate: "No due date",
          tasks: 4,
          users: 7,
        },
      ],
    },
    {
      title: "Negotiation",
      count: 17,
      deals: [
        {
          title: "SkillUp Hub",
          description: "Platform for professional development of specialists",
          date: "09 Mar",
          tasks: 4,
          users: 1,
        },
        {
          title: "Thera Well",
          description: "Platform for psychological support and consultations",
          dueDate: "No due date",
          tasks: 7,
          users: 2,
        },
        {
          title: "SwiftCargo",
          description: "International transportation of chemical goods",
          date: "23 Apr",
          comments: 2,
          users: 5,
        },
      ],
    },
    {
      title: "Offer Sent",
      count: 13,
      deals: [
        {
          title: "FitLife Nutrition",
          description: "Nutritious food and nutraceuticals for individuals",
          date: "10 Mar",
          users: 1,
          tasks: 3,
        },
        {
          title: "Prime Estate",
          description:
            "Agency-developer of low-rise elite and commercial real estate",
          address: "510 Realty Blvd, Miami, FL 33132",
          contact: "contact@primeestate.com",
          manager: "Antony Cardenas",
          date: "15 Apr",
          comments: 1,
          tasks: 1,
        },
        {
          title: "NextGen University",
          description: "Modern educational programs and courses",
        },
      ],
    },
    {
      title: "Deal Closed",
      count: 12,
      deals: [
        {
          title: "CloudSphere",
          description:
            "Cloud services for data storage and processing for business",
          date: "24 Mar",
          comments: 2,
          tasks: 1,
        },
        {
          title: "Advantage Media",
          description:
            "Full cycle of digital advertising and social media promotion",
          date: "05 Apr",
          users: 1,
          tasks: 3,
        },
        {
          title: "Safebank Solutions",
          description: "Innovative financial technologies and digital payments",
          date: "30 Mar",
          tasks: 4,
          users: 7,
        },
      ],
    },
  ];

  return (
    <div className="flex space-x-4">
      {columns.map((column, index) => (
        <div key={index} className="flex-1">
          <KanbanColumn
            title={column.title}
            count={column.count}
            deals={column.deals}
          />
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
