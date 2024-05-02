import {FormComponent, InputWrapper,PageTitle,ButtonsWrapper,PageContainer} from "./styles";
function Cadastro(){
    return(
        <PageContainer>
            <PageTitle>Cadastro de nova trilha</PageTitle>

            <FormComponent>
                <InputWrapper>
                    <label htmlFor="nome">Nome da trilha</label>
                    <input type="text" name="nome"/>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="duracao-estimada">Duração estimada</label>
                    <input type="number" name="duracao-estimada"/>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="trajeto">Trajeto (Km)</label>
                    <input type="number" name="trajeto"/>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="cidade">Cidade</label>
                    <input type="text" name="cidade"/>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="estado">Estado</label>
                    <input type="text" name="estado"/>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="cidade">Cidade</label>
                    <input type="text" name="cidade"/>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="nome-usuario">Nome completo do usuário</label>
                    <input type="text" name="nome-usuario"/>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="dificuldade">Dificuldade</label>
                    <select name="dificuldade">
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Difícil">Difícil</option>
                    </select>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="tipo">Tipo de trilha</label>
                    <select name="tipo">
                        <option value="caminhada /trekking">Caminhada / Trekking</option>
                        <option value="ciclismo">Ciclismo</option>
                    </select>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="imagem-trilha">URL imagem da trilha</label>
                    <input type="text" name="imagem-trilha"/>
                </InputWrapper>
                <ButtonsWrapper>
                <button variant="contained" type="button">Cadastrar</button>
                <button variant="outlined" type="button">Voltar para a home</button>

                </ButtonsWrapper>
            </FormComponent>
        </PageContainer>
    );
}
export default Cadastro;