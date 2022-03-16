import styled from "styled-components";

interface buttonFunProps {
  fun: string;
}

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: black;
  width: 400px;
  height: 250px;
  align-items: center;
  border-radius: 30px;
`;

export const Header = styled.div`
  border-bottom: 1px solid;
  width: 300px;
  display: flex;
  justify-content: center;
`;
export const TextHeader = styled.h1``;
export const Body = styled.div``;
export const TextBody = styled.h3``;
export const DivButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
`;
export const Button = styled.div<buttonFunProps>`
  margin-top: 0.5rem;
  height: 5vh;
  width: 7vw;
  padding: 5px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 10px;
  transition: 0.5s;
  align-items: center;
  justify-content: center;
  display: flex;

  &:hover {
    opacity: 0.7;
  }
  background-color: ${(props) =>
    props.fun === "Confirmar" ? "	#98FB98" : "#FF6347"};
`;

export const TextButton = styled.p``;
