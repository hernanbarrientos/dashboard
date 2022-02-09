import React from "react";
import Chart from "react-apexcharts";
import { Container, Card, Title } from "./style";
import icon from "../../icon/icon-i.svg";

function GraphicsBar() {
  // state criado com dados fixos e pode receber dados de uma futura API
  const xaxis = {
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
  };

  const series = [
    {
      name: "series-1",
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ];

  const options = {
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

    xaxis,
  };

  return (
    <Container>
      <Title>
        Barra
        <img src={icon} alt="icon information" />
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
