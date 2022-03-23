import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import { ImHome } from "react-icons/im";
import { FiUser } from "react-icons/fi";

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
  Link,
  HeaderIcon,
  IconDiv,
  Nome,
} from "./styles";
import { TopicoDTO } from "../../dtos/CardDTO";
import { ModalExcluir } from "../../components/ModalExcluir";

export function TopicoPage() {
  const [titulo, setTitulo] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [nm_usuario, setNm_usuario] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigate = useNavigate();

  const params = useParams();
  const id = String(params.id);

  console.log(id);

  useEffect(() => {
    async function getTarefa() {
      await api
        .get(`/topicos/${id}`)
        .then((response) => {
          setTitulo(response.data.ds_topico);
          setMensagem(response.data.ds_mensagem);
          setNm_usuario(response.data.nm_usuario);
        })
        .catch((error) => {
          alert("Ocorreu um erro ao buscar o Topico: " + error.message);
          navigate("/");
        });
    }

    try {
      getTarefa();
    } catch (error) {
      console.log(`Codigo do Erro: ${error}`);
    }
  }, []);

  function handleClickHome() {
    navigate("/");
  }

  return (
    <>
      <Header>
        <Cabecalho>
          <Text>{`Topico ${titulo}`}</Text>
        </Cabecalho>
        <ButtonBack onClick={handleClickHome}>
          <ImHome size={20} />
        </ButtonBack>
      </Header>
      <Container>
        <Sessao>
          <Formulario>
            {/* <Div>
              <TextH3>ID</TextH3>
              <Input
                disabled
                type="string"
                className="id"
                value={id ? id : ""}
              ></Input>
            </Div>

            <Div>
              <TextH3>Título do Topico</TextH3>
              <Input
                className="titulo"
                disabled
                value={titulo ? titulo : ""}
              ></Input>
            </Div> */}

            <HeaderIcon>
              <IconDiv>
                <FiUser name="user" size={24} color="black" />
              </IconDiv>
              <Nome>{nm_usuario}</Nome>
            </HeaderIcon>

            <Div>
              <TextH3>Mensagem</TextH3>
              <InputDescricao
                className="descricao"
                disabled
                value={mensagem ? mensagem : ""}
              ></InputDescricao>
            </Div>
            <DivButton>
              <ButtonFun
                type="button"
                fun="Alterar"
                onClick={() => {
                  navigate(`/alterar/${id}`, { state: id });
                }}
              >
                Alterar Topico
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
