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
  id: string;
  titulo: string;
}

export function ModalExcluir({ close, id, titulo }: Props) {
  const navigate = useNavigate();

  function handleClickExcluir() {
    try {
      api
        .delete(`/topicos/${id}`)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          alert("Ocorreu um erro ao Excluir o Topico: " + error.message);
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
          <TextBody>Deseja Remover o Topico {titulo} ? </TextBody>
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
