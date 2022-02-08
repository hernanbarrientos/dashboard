import React from "react";
import Header from "../components/header/Header";
import { Container, Title, SubTitle, ButtonFilter, ContainerTextButton, ContainerGraphics } from "./style";
import iconFilter from '../icon/icon-filter.svg';
import Cardgraphic from "../components/card/Cardgraphic";
import Graphics from "../components/graphics/Graphics";

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
      <ButtonFilter><img src={iconFilter}/></ButtonFilter>
      </ContainerTextButton>

      <ContainerGraphics>
      <Cardgraphic/>
      
        
        
      
      

      </ContainerGraphics>

      

    </Container>
    </>
  );
}

export default Dashboard;
