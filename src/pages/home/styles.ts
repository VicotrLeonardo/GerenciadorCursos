import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10vh;
  align-items: center;
  justify-content: center;
  background-color: #29292e;
`;

export const Text = styled.h1`
  color: #fff;
  font-weight: 200;
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

export const Sessao = styled.div`
  margin: 0 auto;
  width: 90vw;
  border: 2px solid;
  border-radius: 10px;
  height: 80%;
`;

export const TextH1 = styled.h1`
  margin-top: 1rem;
  display: flex;
  font-weight: 200;
  align-self: center;
  justify-content: center;
  color: white;
`;

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  background-color: #47474d;
  height: 90vh;
`;

export const Div = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  text-align: center;
  margin-top: 1rem;
`;
