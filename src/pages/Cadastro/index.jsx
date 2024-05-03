import {FormComponent, InputWrapper,PageTitle,ButtonsWrapper,PageContainer} from "./styles";
import {useForm} from "react-hook-form";
import{useContext} from "react";
import {TrilhasContext} from "../../Context/TrilhasContext";
import {useNavigate} from "react-router-dom";
import { Button } from "@mui/material";


function Cadastro(){
  const {
    register, 
    handleSubmit, 
    formState: {errors}
} = useForm();
  const {addTrail} = useContext(TrilhasContext);
  const navigate = useNavigate();

  function sendForm(formValue){
    console.log(formValue);

    addTrail({
        ...formValue, 
        duracao: Number(formValue.duracao),
        trajeto: Number(formValue.trajeto)
    });

    navigate("/ListaTrilhas");
  }
    function goToHome(){
        navigate("/");
    }
  

    return(
        <PageContainer>
            <PageTitle>Cadastro de nova trilha</PageTitle>

            <FormComponent>
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
                    {errors?.nomeTrilha && <p>{errors.nomeTrilha?.message}</p>}
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="duracao">Duração estimada (em minutos)</label>
                    <input type="number" 
                    {...register("duracao", {
                        required: "Campo obrigatório"
                    }
                    )}/>
                    {errors?.duracao && <p>{errors.duracao?.message}</p>}
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="trajeto">Trajeto (Km)</label>
                    <input type="number" 
                    {...register("trajeto", {
                         required: "Campo obrigatório"
                    }
                )}/>
                    {errors?.trajeto && <p>{errors.trajeto?.message}</p>}
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
                    {errors?.cidade && <p>{errors.cidade?.message}</p>}
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
                        {errors?.estado && <p>{errors.estado?.message}</p>}
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
                    {errors?.nomeUsuario && <p>{errors.nomeUsuario?.message}</p>}
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
                    {errors?.dificuldade && <p>{errors.dificuldade?.message}</p>}
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
                    {errors?.tipo && <p>{errors.tipo?.message}</p>}
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
                    {errors?.urlImagem && <p>{errors.urlImagem?.message}</p>}
                </InputWrapper>
                <ButtonsWrapper>
                <Button variant="contained" type="button" onClick= {handleSubmit(sendForm)}>
                    Cadastrar
                    </Button>
                <Button variant="outlined"type="button" onClick={() => goToHome()}>Voltar para a home</Button>

                </ButtonsWrapper>
            </FormComponent>
        </PageContainer>
    );
}
export default Cadastro;