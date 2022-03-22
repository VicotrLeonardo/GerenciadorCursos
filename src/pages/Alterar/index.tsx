import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import { ImHome } from "react-icons/im";

import {
  Header,
  Text,
  ButtonFun,
  Cabecalho,
  Container,
  Sessao,
  Formulario,
  Div,
  TextH3,
  Input,
  InputDescricao,
  ButtonBack,
  DivButton,
} from "./styles";
import { TopicoDTO } from "../../dtos/CardDTO";
import { ModalExcluir } from "../../components/ModalExcluir";

export function Alterar() {
  const [titulo, setTitulo] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigate = useNavigate();

  const params = useParams();
  const id = String(params.id);

  useEffect(() => {
    async function getTarefa() {
      await api
        .get(`/topicos/${id}`)
        .then((response) => {
          setTitulo(response.data.ds_topico);
          setMensagem(response.data.ds_mensagem);
        })
        .catch((error) => {
          alert("Ocorreu um erro ao buscar o Topico: " + error.message);
        });
    }

    try {
      getTarefa();
    } catch (error) {
      console.log(`Codigo do Erro: ${error}`);
    }
  }, []);

  async function apiPut() {
    await api
      .put(`/topicos/${id}`, {
        id: id,
        ds_topico: titulo,
        ds_mensagem: mensagem,
        nm_usuario: "Victor Leonardo",
      })
      .then(() => navigate("/"))
      .catch((error) => {
        alert("Ocorreu um erro ao Atualizar o Topico: " + error.message);
      });
  }

  function handleClickHome() {
    navigate("/");
  }

  return (
    <>
      <Header>
        <Cabecalho>
          <Text>Alterar Topico</Text>
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
                  apiPut();
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
              <Input
                disabled
                type="string"
                className="id"
                value={id ? id : ""}
              ></Input>
            </Div>

            <Div>
              <TextH3>Título da Tarefa</TextH3>
              <Input
                className="titulo"
                onChange={(e) => setTitulo(e.target.value)}
                value={titulo ? titulo : ""}
              ></Input>
            </Div>

            <Div>
              <TextH3>Descrição</TextH3>
              <InputDescricao
                className="descricao"
                onChange={(e) => setMensagem(e.target.value)}
                value={mensagem ? mensagem : ""}
              ></InputDescricao>
            </Div>
            <DivButton>
              <ButtonFun type="submit" fun="Alterar">
                Alterar
              </ButtonFun>
              <ButtonFun
                type="button"
                fun="Excluir"
                onClick={() => setIsModalVisible(true)}
              >
                Excluir
              </ButtonFun>
            </DivButton>
          </Formulario>
        </Sessao>
      </Container>

      {isModalVisible && (
        <ModalExcluir close={setIsModalVisible} id={id} titulo={titulo} />
      )}
    </>
  );
}
