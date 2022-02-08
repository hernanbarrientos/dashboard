import styled from "styled-components";

export const Container = styled.main`
  background-color: #e5e5e5;
  width: 100%;
  height: 100vh;
  
`;

export const ContainerTextButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: #5d405c;
  font-family: Montserrat;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
  padding: 20px 0 0 28px;
`;
export const SubTitle = styled.p`
  color: #828282;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 0;
  padding-left: 28px;
`;
export const ButtonFilter = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding-right: 28px;
  height: 40px;
  margin-top: 44px;
`;

export const ContainerGraphics = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 28px;
  margin: 45px 28px 28px 28px;
`;
