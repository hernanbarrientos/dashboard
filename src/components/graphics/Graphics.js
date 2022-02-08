import React, { useState } from "react";
import Chart from "react-apexcharts";

function Graphics() {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },

    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
  });
  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ]);

  return (
    <>
      <Chart
        options={options}
        series={series}
        type="bar"
        width="89%"
        height="89%"
      />
    </>
  );
}

export default Graphics;
