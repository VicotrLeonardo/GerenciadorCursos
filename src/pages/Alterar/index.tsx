import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
import { CardsProps } from "../../dtos/CardDTO";

export function Alterar() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const [dados, setDados] = useState<CardsProps>(Object);

  const navigate = useNavigate();

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    async function getTarefa() {
      await api
        .get(`/cursos/${id}`)
        .then((response) => {
          setTitulo(response.data.titulo);
          setDescricao(response.data.descricao);
          setDados(response.data);
        })

        .catch((error) => {
          console.error("ops!! ocorreu um erro " + error);
        });
    }

    try {
      getTarefa();
    } catch (error) {
      console.log(`Codigo do Erro: ${error}`);
    }
  }, []);

  async function apiPut() {
    await api.put(`/cursos/${id}`, {
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
                  apiPut();
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
              <Input
                disabled
                type="number"
                className="id"
                value={dados.id ? dados.id : ""}
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
                onChange={(e) => setDescricao(e.target.value)}
                value={descricao ? descricao : ""}
              ></InputDescricao>
            </Div>

            <ButtonAdicionar>Alterar</ButtonAdicionar>
          </Formulario>
        </Sessao>
      </Container>
    </>
  );
}
