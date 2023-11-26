import styled from "styled-components";
import lupa from './lupa.png'
// importando a imagem da lupa do input de pesquisa

const ContainerEstilizado = styled.div`
position:relative;
display: inline-block;
`
// criando um pequeno container estilizado onde o input ira dentro

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #a38a5a;
    background: transparent;
    box-sizing: border-box;
    width: 400px;
    color: #a38a5a;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    outline: #a38a5a;
`
// aplicando estilos no input de pesquisa

const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
    cursor: pointer;
`
// aplicando estilos na imagem de lupa

const CampoTexto = ({setFiltro}) => {
    // criando o componente react de campo texto
    return (
        <ContainerEstilizado>
            {/* retornando o container estilizado */}
            <CampoTextoEstilizado onChange={(evento) => {setFiltro(evento.target.value) }} type="text" placeholder="Pesquisar" />
            {/* retornando o input onde oq sera pesquisado é uma props */}
            <IconeLupa src={lupa} alt="ícone de lupa" />
            {/* chamando o icone de lupa */}
        </ContainerEstilizado>
    )
}

export default CampoTexto