import React from "react";
import Chart from "react-apexcharts";

const options = {
  series: [
    {
      name: "Budget",
      group: "budget",
      data: [4, 5, 4, 2, 6],
    },
    {
      name: "Actual",
      group: "actual",
      data: [7, 10, 8, 4, 9],
    },
  ],
  chart: {
    type: "bar",
    height: 320,
    stacked: false,
    toolbar: { show: false },
  },
  plotOptions: {
    bar: {
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: false,
  },
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    labels: {
      style: {
        colors: "#1f1f1f",
        fontSize: "12px",
      },
    },
  },
  fill: {
    type: ["solid", "pattern"],
    pattern: {
      style: ["slantedLines"],
    },
    opacity: 1,
  },
  colors: ["#36454F", "#1f1f1f"],
  legend: {
    show: false,
  },
  grid: {
    yaxis: {
      lines: { show: false },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#1f1f1f",
        fontSize: "12px",
      },
    },
  },
};

const NewCustomersChart = () => {
  return (
    <div className="relative bg-[#f6f7ed] w-96">
       <p className="absolute -top-2 left-5 text-black font-bold">New Customers</p>
      <Chart options={options} series={options.series} type="bar" height={180} />
    </div>
  );
};

export default NewCustomersChart;
