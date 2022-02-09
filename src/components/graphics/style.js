import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  background-color: white;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  @media (max-width: 915px) {
    width: 90vw;
  }
`;

export const Card = styled.div`
  height: 330px;
  margin: 14px 38px 14px 39px;
  


`;

export const Title = styled.h3`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  color: #5d405c;
  margin-left: 23px;
  margin-bottom: -25px;
  display: flex;
  align-content: center;

  img {
    margin-left: 15px;
    align-content: center;
    display: inline;
    justify-content: center;
  }
`;

export const ContainerTextIcon = styled.div`
  padding-left: 20px;
`;
