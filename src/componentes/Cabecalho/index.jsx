import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
/* criando um header ja estilizado que sera chamado no componente react */
padding: 60px 0;
display: flex;
justify-content: space-between;
align-items: center;

img{
    max-width: 412px;
    /* o styled deixa vc acessar oq esta dentro do que foi criado,no caso acessou a tag img dentro do header */
}
`

const Cabecalho = () =>{
    // criando um componente react padrao junto ao styled-components
    return(
        <HeaderEstilizado>
            <img src="./imagens/logo.png" alt="Logo da pagina" />
            {/* chamando a imagem de logo da aplicação */}
            <CampoTexto/>
        </HeaderEstilizado>
    )
}

export default Cabecalho