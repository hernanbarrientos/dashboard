import React from "react";
import Header from "../components/header/Header";
import { Container, Title, SubTitle, ButtonFilter, ContainerTextButton } from "./style";
import iconFilter from '../icon/icon-filter.svg';

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
   
    </Container>
    </>
  );
}

export default Dashboard;
