import {FormComponent, InputWrapper,PageTitle,ButtonsWrapper,PageContainer} from "./styles";
import {useForm} from "react-hook-form";
import{useContext} from "react";
import {TrilhasContext} from "../../Context/TrilhasContext";
import {useNavigate} from "react-router-dom";


function Cadastro(){
  const {register, handleSubmit} = useForm();
  const {addTrail} = useContext(TrilhasContext);
  const navigate = useNavigate();

  function sendForm(formValue){
    console.log(formValue)

    addTrail({
        ...formValue, 
        duracao: Number(formValue.duracao),
        trajeto: Number(formValue.trajeto)});

    navigate("/ListaTrilhas");
  }

    return(
        <PageContainer>
            <PageTitle>Cadastro de nova trilha</PageTitle>

            <FormComponent onSubmit={handleSubmit(sendForm)}>
                <InputWrapper>
                    <label htmlFor="nomeTrilha">Nome da trilha</label>
                    <input type="text" 
                    {...register("nomeTrilha", {
                        required: "Campo obrigatório",
                        maxLenght:{
                            value: 100, 
                            message: "Este campo aceita no máximo 100 caracteres"
                        }
                    })}/>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="duracao">Duração estimada (em minutos)</label>
                    <input type="number" 
                    {...register("duracao", {
                        required: "Campo obrigatório"
                    }
                    )}/>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="trajeto">Trajeto (Km)</label>
                    <input type="number" 
                    {...register("trajeto", {
                         required: "Campo obrigatório"
                    }
                )}/>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="cidade">Cidade</label>
                    <input type="text" 
                    {...register("cidade", {
                         required: "Campo obrigatório",
                         maxLenght: {
                            value: 60, 
                            message: "Este campo aceita no máximo 60 caracteres"
                        }
                     }
                    )}/>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="estado">Estado</label>
                    <input type="text" {...register("estado", {
                         required: "Campo obrigatório",
                         maxLenght: {
                            value: 2, 
                            message: "Este campo aceita no máximo 2 caracteres"
                        }
                        })}/>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="nomeUsuario">Nome completo do usuário</label>
                    <input type="text" {...register("nomeUsuario", {
                         required: "Campo obrigatório",
                         maxLenght: {
                            value: 60, 
                            message: "Este campo aceita no máximo 60 caracteres"
                        }
                        }
                        )}/>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="dificuldade">Dificuldade</label>
                    <select {...register("dificuldade",{
                        required: "Campo obrigatório",
                    }
                )}>
                        <option value="">Selecione uma opção</option>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Difícil">Difícil</option>
                    </select>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="tipo">Tipo de trilha</label>
                    <select {...register("tipo",{
                        required: "Campo obrigatório",
                    }
                )}>
                        <option value="">Selecione uma opção</option>
                        <option value="caminhada / trekking">Caminhada / Trekking</option>
                        <option value="ciclismo">Ciclismo</option>
                    </select>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="urlImagem">URL imagem da trilha</label>
                    <input type="text" {...register("urlImagem", {
                         maxLenght: {
                            value: 300, 
                            message: "Este campo aceita no máximo 300 caracteres"
                        }
                    }
                )}/>
                </InputWrapper>
                <ButtonsWrapper>
                <button type="submit">Cadastrar</button>
                <button type="button">Voltar para a home</button>

                </ButtonsWrapper>
            </FormComponent>
        </PageContainer>
    );
}
export default Cadastro;