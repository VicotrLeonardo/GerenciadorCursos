import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  background-color: #c16969;
  flex-direction: row;
  width: 100%;
  height: 10vh;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.h1`
  color: #fff;
  font-weight: 800;
`;

export const ButtonAdicionar = styled.button`
  height: 5vh;
  align-self: center;
  padding: 5px;
  font-size: 12px;
  font-weight: 800;
  border-radius: 10px;
  transition: 0.5s;
  &:hover {
    background-color: lightblue;
  }
`;

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;
