import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import {
  Modal,
  Container,
  Header,
  TextHeader,
  Body,
  TextBody,
  DivButton,
  Button,
  TextButton,
} from "./styles";

interface Props {
  close: any;
  id: any;
}

export function ModalExcluir({ close, id }: Props) {
  const navigate = useNavigate();

  function handleClickExcluir() {
    try {
      api.delete(`/cursos/${id}`).then(() => {
        navigate("/");
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal>
      <Container>
        <Header>
          <TextHeader>Exclusão</TextHeader>
        </Header>
        <Body>
          <TextBody>Deseja Remover a Tarefa {id} ? </TextBody>
          <DivButton>
            <Button fun="Cancelar" onClick={() => close(false)}>
              <TextButton>Cancelar</TextButton>
            </Button>
            <Button fun="Confirmar" onClick={handleClickExcluir}>
              <TextButton>Confirmar</TextButton>
            </Button>
          </DivButton>
        </Body>
      </Container>
    </Modal>
  );
}
