import React from "react";
import {
  MoreVertical,
  Calendar,
  Link,
  Phone,
  MapPin,
  MessageSquareText,
} from "lucide-react";
import u1 from "@/app/assets/u1.jpg";
import u2 from "@/app/assets/u2.jpg";
import u3 from "@/app/assets/u3.jpg";
import u4 from "@/app/assets/u4.jpg";

type CardProps = {
  title: string;
  columnTitle?: string;
  subtitle: string;
  date?: string;
  comments?: number;
  tasks?: number;
  users?: number;
  children?: React.ReactNode;
};

const Card = ({
  title,
  columnTitle,
  subtitle,
  date,
  comments,
  tasks,
  users,
  children,
}: CardProps) => {
  console.log("coloumnTitle", columnTitle);
  
  return (
    <div
       className={`rounded-md shadow-sm border border-gray-100 overflow-hidden ${
    columnTitle === "Deal Closed"
      ? "bg-gray-200"
      : children
      ? "bg-[#1f1f1f]"
      : "bg-white"
  }`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3
            className={`font-medium text-base ${
              children ? "text-gray-200" : "text-gray-800"
            }`}
          >
            {title}
          </h3>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreVertical size={18} />
          </button>
        </div>
        <p
          className={`text-sm ${children ? "text-gray-300" : "text-gray-600"}`}
        >
          {subtitle}
        </p>

        {children}

        <div
          className={`flex items-center mt-4 text-xs ${
            children ? "text-gray-200" : "text-gray-500"
          } space-x-4 w-full`}
        >
          {date && (
            <div
              className={`flex items-center ${
                children ? "" : "bg-transparent "
              } border border-gray-500 text-sm px-2 py-1 rounded-md shadow-sm mr-auto`}
            >
              <Calendar size={14} className="mr-1" />
              <span>{date}</span>
            </div>
          )}

          {comments !== undefined && (
            <div className="flex items-center">
              <span className="mr-1">{comments}</span>
              <MessageSquareText size={14} />
            </div>
          )}

          {tasks !== undefined && (
            <div className="flex items-center">
              <span className="mr-1">{tasks}</span>
              <Link size={14} />
            </div>
          )}

          {users !== undefined && (
            <div className="flex items-center">
              <span className="mr-1">{users}</span>
              <MessageSquareText size={14} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Extended card with additional contact details
const ContactCard = ({
  title,
  subtitle,
  date,
  comments,
  tasks,
  users,
  address,
  contact,
  manager,
}: any) => {
  return (
    <Card
      title={title}
      subtitle={subtitle}
      date={date}
      comments={comments}
      tasks={tasks}
      users={users}
    >
      {address && (
        <div className="mt-4 mb-2 p-3 rounded-md text-sm">
          <div className="flex items-start">
            <MapPin size={14} className="text-gray-300 mt-1 mr-2" />
            <span className="text-gray-300">{address}</span>
          </div>
          {contact && (
            <div className="flex items-center mt-2">
              <Phone size={14} className="text-gray-300 mr-2" />
              <span className="text-gray-300">{contact}</span>
            </div>
          )}
        </div>
      )}

      {manager && (
        <div className="mt-3 flex items-center">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 mr-2">
            <img
              src={u1.src}
              alt={manager}
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <div>
            <p className="text-xs text-gray-400">Manager</p>
            <p className="text-sm font-medium text-gray-300">{manager}</p>
          </div>
        </div>
      )}
    </Card>
  );
};

export { Card, ContactCard };
