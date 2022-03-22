import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { ImHome } from "react-icons/im";

import { v4 as uuidv4 } from "uuid";

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
} from "./style";

export function Adicionar() {
  const [titulo, setTitulo] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();
  const id = uuidv4();

  async function apiPost() {
    const novoTopico = {
      id: id,
      ds_topico: titulo,
      ds_mensagem: mensagem,
      nm_usuario: "Victor Leonardo",
    };

    await api
      .post("/topicos", novoTopico)
      .then(() => navigate("/"))
      .catch((error) => {
        alert("Ocorreu um erro ao Adicionar o Topico: " + error.message);
      });
  }

  function handleClickHome() {
    navigate("/");
  }

  return (
    <>
      <Header>
        <Cabecalho>
          <Text>Nova Topico</Text>
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

              if (titulo && mensagem) {
                try {
                  apiPost();
                } catch (erro) {
                  console.log(`Codigo do Erro: ${erro}`);
                }
              } else {
                alert("Preencha Todos os Campos!");
              }
            }}
          >
            <Div>
              <TextH3>ID</TextH3>
              <Input disabled type="string" className="id" value={id}></Input>
            </Div>

            <Div>
              <TextH3>Titulo do Tópico</TextH3>
              <Input
                className="titulo"
                onChange={(e) => setTitulo(e.target.value)}
              ></Input>
            </Div>

            <Div>
              <TextH3>Mensagem</TextH3>
              <InputDescricao
                className="descricao"
                onChange={(e) => setMensagem(e.target.value)}
              ></InputDescricao>
            </Div>

            <ButtonAdicionar>POSTAR</ButtonAdicionar>
          </Formulario>
        </Sessao>
      </Container>
    </>
  );
}
