import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Container, Card, Title } from "./style";
import icon from "../../icon/icon-i.svg";

function GraphicsBar() {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
      type: "bar",
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
    <Container>
      <Title>
        Barra
        <img src={icon} />
      </Title>

      <Card>
        <Chart
          options={options}
          series={series}
          type="bar"
          width="100%"
          height="100%"
        />
      </Card>
    </Container>
  );
}

export default GraphicsBar;
