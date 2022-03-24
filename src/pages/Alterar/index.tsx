import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import { ImHome } from "react-icons/im";

import { useForm, Controller } from "react-hook-form";

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
  Error,
} from "./styles";

import { ModalExcluir } from "../../components/ModalExcluir";
import { TopicoDTO } from "../../dtos/CardDTO";

export function Alterar() {
  const [ds_mensagem, setDs_mensagem] = useState<TopicoDTO["ds_mensagem"]>("");
  const [ds_topico, setDs_topico] = useState<TopicoDTO["ds_topico"]>("");
  const [topico, setTopico] = useState<TopicoDTO>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigate = useNavigate();

  const params = useParams();

  const id = String(params.id);

  // console.log(id);

  useEffect(() => {
    async function getTarefa() {
      await api
        .get(`/topicos/${id}`)
        .then((response) => {
          setDs_topico(response.data.ds_topico);
          setDs_mensagem(response.data.ds_mensagem);
          setTopico(response.data);
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

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: topico });

  async function apiPut({ ds_topico, ds_mensagem }: any) {
    await api
      .put(`/topicos/${id}`, {
        id: id,
        ds_topico: ds_topico,
        ds_mensagem: ds_mensagem,
        nm_usuario: "Victor Leonardo",
      })
      .then(() => navigate("/"))
      .catch((error) => {
        alert("Ocorreu um erro ao Atualizar o Topico: " + error.message);
        navigate("/");
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
          <ImHome size={40} color={"#fff"} />
        </ButtonBack>
      </Header>
      <Container>
        <Sessao>
          <Formulario onSubmit={handleSubmit(apiPut)}>
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
              <TextH3>Título do Topico</TextH3>

              <Controller
                name="ds_topico"
                control={control}
                render={({ field: { value } }) => (
                  <Input
                    className="ds_topico"
                    defaultValue={ds_topico && ds_topico.toString()}
                    {...register("ds_topico", { required: true })}
                  ></Input>
                )}
              />

              {errors.ds_topico && <Error>O Titulo é obrigatório</Error>}
            </Div>

            <Div>
              <TextH3>Mensagem</TextH3>
              <InputDescricao
                className="ds_mensagem"
                defaultValue={ds_mensagem && ds_mensagem.toString()}
                {...register("ds_mensagem", { required: true })}
              ></InputDescricao>
              {errors.ds_mensagem && <Error>A Mensagem é obrigatória</Error>}
            </Div>
            <DivButton>
              <ButtonFun type="submit" fun="Alterar">
                POSTAR
              </ButtonFun>
            </DivButton>
          </Formulario>
        </Sessao>
      </Container>

      {isModalVisible && (
        <ModalExcluir close={setIsModalVisible} id={id} titulo={ds_topico} />
      )}
    </>
  );
}
