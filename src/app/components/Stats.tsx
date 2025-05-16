import React from 'react';
import { ChevronRight } from 'lucide-react';

type StatsCardProps = {
  value: string | number;
  label: string;
  secondaryLabel?: string;
  hasArrow?: boolean;
}

const StatsCard = ({ value, label, secondaryLabel, hasArrow = false }: StatsCardProps) => {
  return (
    <div className="bg-[#f6f7ed] rounded-xl hover:shadow-md p-4 flex flex-col cursor-pointer">
      <div className="text-3xl font-semibold">{value}</div>
      <div className="flex items-center mt-6">
        <div>
          <span className="text-sm text-gray-600">{label}</span>
          {secondaryLabel && (
            <p className="text-xs text-gray-500 mt-0.5">{secondaryLabel}</p>
          )}
        </div>
        {hasArrow && (
          <ChevronRight className="ml-auto text-gray-400" size={20} />
        )}
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <StatsCard value={53} label="Tasks" secondaryLabel="in progress" hasArrow />
      <StatsCard value="$15,890" label="Prepayments" secondaryLabel="from customers" hasArrow />
      <div className="flex justify-center items-center">
        {/* This space is empty in the design */}
      </div>
    </div>
  );
};

export default Stats;