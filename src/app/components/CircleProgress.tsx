import React, { useState } from "react";
import Chart from "react-apexcharts";

const App = () => {
  const [chartData, setState] = React.useState({
    series: [97],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
        offsetY: -10,
      },
      plotOptions: {
        radialBar: {
          startAngle: -105,
          endAngle: 115,
          dataLabels: {
            name: {
              fontSize: "16px",
              color: "#1f1f1f",
              offsetY: 10,
            },
            value: {
              offsetY: -36,
              fontSize: "22px",
              color: "#1f1f1f",
              formatter: function (val: any) {
                return val + "%";
              },
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91],
        },
        colors: ["#000000"], // solid black base for gradient
      },
      stroke: {
        dashArray: 4,
      },
      labels: ["Successful Deals"],
    },
  });

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="radialBar"
      width={500}
      height={320}
    />
  );
};

export default App;
