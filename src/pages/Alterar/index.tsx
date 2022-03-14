import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { ImHome } from "react-icons/im";

import {
  Header,
  Text,
  ButtonAdicionar,
  Cabecalho,
  Container,
  Sessao,
  Formulario,
  Div,
  TextH3,
  Input,
  InputDescricao,
  ButtonBack,
} from "./styles";

export function Alterar() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const navigate = useNavigate();

  async function apiPost() {
    await api.post("/cursos", {
      titulo: titulo,
      descricao: descricao,
    });
  }

  function handleClickHome() {
    navigate("/");
  }

  return (
    <>
      <Header>
        <Cabecalho>
          <Text>Alterar Tarefa</Text>
        </Cabecalho>
        <ButtonBack onClick={handleClickHome}>
          <ImHome size={20} />
        </ButtonBack>
      </Header>
      <Container>
        <Sessao>
          <Formulario
            onSubmit={(event) => {
              event.preventDefault();

              if (titulo && descricao) {
                try {
                  apiPost();
                } catch (erro) {
                  console.log(`Codigo do Erro: ${erro}`);
                } finally {
                  navigate("/");
                }
              } else {
                alert("Preencha Todos os Campos!");
              }
            }}
          >
            <Div>
              <TextH3>ID</TextH3>
              <Input disabled type="number" className="id"></Input>
            </Div>

            <Div>
              <TextH3>Título da Tarefa</TextH3>
              <Input
                className="titulo"
                onChange={(e) => setTitulo(e.target.value)}
              ></Input>
            </Div>

            <Div>
              <TextH3>Descrição</TextH3>
              <InputDescricao
                className="descricao"
                onChange={(e) => setDescricao(e.target.value)}
              ></InputDescricao>
            </Div>

            <ButtonAdicionar>Alterar</ButtonAdicionar>
          </Formulario>
        </Sessao>
      </Container>
    </>
  );
}
