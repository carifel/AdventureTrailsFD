import {FormComponent, InputWrapper,PageTitle,ButtonsWrapper,PageContainer} from "./styles";
import {useForm} from "react-hook-form";



function Cadastro(){
  const {register} = useForm();

    return(
        <PageContainer>
            <PageTitle>Cadastro de nova trilha</PageTitle>

            <FormComponent>
                <InputWrapper>
                    <label htmlFor="nome">Nome da trilha</label>
                    <input type="text" 
                    {...register("nome", {
                        required: "Campo obrigatório",
                        maxLenght:{
                            value: 100, 
                            message: "Este campo aceita no máximo 100 caracteres"
                        }
                    })}/>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="duracao-estimada">Duração estimada (em minutos)</label>
                    <input type="number" 
                    {...register("duracao-estimada", {
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
                    <label htmlFor="cidade">Cidade</label>
                    <input type="text" {...register("cidade", {
                         required: "Campo obrigatório",
                         maxLenght: {
                            value: 2, 
                            message: "Este campo aceita no máximo 2 caracteres"
                        }
                        })}/>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="nome-usuario">Nome completo do usuário</label>
                    <input type="text" {...register("nome-usuario", {
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
                        <option value="caminhada /trekking">Caminhada / Trekking</option>
                        <option value="ciclismo">Ciclismo</option>
                    </select>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="imagem-trilha">URL imagem da trilha</label>
                    <input type="text" {...register("imagem-trilha", {
                         maxLenght: {
                            value: 300, 
                            message: "Este campo aceita no máximo 300 caracteres"
                        }
                    }
                )}/>
                </InputWrapper>
                <ButtonsWrapper>
                <button type="button">Cadastrar</button>
                <button type="button">Voltar para a home</button>

                </ButtonsWrapper>
            </FormComponent>
        </PageContainer>
    );
}
export default Cadastro;