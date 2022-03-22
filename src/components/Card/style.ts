import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1rem;
  justify-content: center;
  display: flex;
  margin-right: 1rem;
`;

export const Cartao = styled.div`
  justify-content: center
  align-items: center;
  background-color: #AEAEB3;
  padding:0.5rem;
  border: 2px solid #fff9 ;
  border-radius: 10px;
  &:hover {
    background-color: lightblue;
  }
  
`;
export const Id = styled.h3`
  align-self: center;
`;
export const Nome = styled.h3`
  font-size: 12px;
  margin-left: 10px;
`;
export const Descricao = styled.textarea`
  font-weight: 200;
  font-size: 1rem;
  resize: none;
  align-self: center;
  width: 350px;
  height: 100px;
`;

export const IconDiv = styled.div`
  display: flex;
  width: 45px;
  height: 41px;
  align-items: center;
  justify-content: center;
  background-color: #fff9;
  border-radius: 30px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  margin-left: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DivNome = styled.div``;
export const DivTitulo = styled.div``;
