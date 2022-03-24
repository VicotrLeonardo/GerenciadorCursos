import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  background-color: #29292e;
  flex-direction: row;
  width: 100%;
  height: 10vh;
  justify-content: space-around;
`;

export const Text = styled.h1`
  color: #fff;
  font-weight: 200;
`;

export const Cabecalho = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 90vh;
  background-color: #47474d;
`;

export const Sessao = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  padding: 2rem;
  width: 65vw;
  height: 67vh;
  border: 2px solid;
  border-radius: 10px;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Div = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
export const TextH3 = styled.h3`
  font-weight: 200;
  color: #fff;
`;

export const Input = styled.input`
  width: 20vw;
  padding: 0.2rem;
  font-weight: 200;
  font-size: 1rem;
  border-radius: 3px;
`;

export const InputDescricao = styled.textarea`
  padding: 1rem;
  font-size: 1rem;
  height: 10vh;
  font-weight: 200;
  resize: none;
  border-radius: 3px;
`;

export const ButtonAdicionar = styled.button`
  margin-top: 0.5rem;
  height: 5vh;

  align-self: center;

  width: 5vw;
  padding: 5px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 10px;
  transition: 0.5s;
  &:hover {
    opacity: 0.7;
  }
  background-color: #98fb98;
`;

export const ButtonBack = styled.div`
  align-self: center;
  border-radius: 10px;
  &:hover {
    background-color: lightblue;
  }
`;

export const Error = styled.p`
  font-size: 12px;
  color: red;
`;
