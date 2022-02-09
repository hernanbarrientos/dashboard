import React from "react";
import Header from "./header/Header";
import {
  Container,
  Title,
  SubTitle,
  ButtonFilter,
  ContainerTextButton,
  ContainerGraphics,
} from "./style";
import iconFilter from "../icon/icon-filter.svg";
import Graphicsbar from "../components/graphics/GraphicsBar";
import GraphicsScatter from "../components/graphics/GraphicsScatter";

function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <ContainerTextButton>
          <div>
            <Title> Dashboard </Title>
            <SubTitle>Desafio Técnico Frontend </SubTitle>
          </div>
          <ButtonFilter>
            <img src={iconFilter} />
          </ButtonFilter>
        </ContainerTextButton>

        <ContainerGraphics>
          <Graphicsbar />
          <GraphicsScatter />
        </ContainerGraphics>
      </Container>
    </>
  );
}

export default Dashboard;
