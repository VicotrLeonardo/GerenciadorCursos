import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 8vh;
  align-items: center;
  justify-content: center;
  background-color: #29292e;
`;

export const Text = styled.h1`
  color: #fff;
  font-weight: 200;
`;

export const ButtonAdicionar = styled.div`
  align-self: center;
  font-size: 12px;
  font-weight: 800;
  border-radius: 10px;
  transition: 0.5s;
  align-items: center;
  justify-content: center;
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
  display: flex;

  height: 80%;

  justify-content: center;
  display: flex;
  padding: 10px;

  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const TextH1 = styled.h1`
  display: flex;
  font-weight: 200;
  align-self: center;
  justify-content: center;
  color: white;
  padding: 10px;
  border-bottom: 2px solid black;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export const Link = styled(NavLink)`
  display: flex;
`;
