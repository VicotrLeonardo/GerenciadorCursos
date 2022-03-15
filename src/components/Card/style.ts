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
export const Titulo = styled.h3`
  font-size: 1rem;
`;
export const Descricao = styled.textarea`
  font-weight: 200;
  font-size: 1rem;
  resize: none;
`;
