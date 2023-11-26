import { styled } from "styled-components"

const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    background-size:cover;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
`
// criando e estilizando o banner

const TituloEstilizado = styled.h1`
    font-weight: 600;
    font-size: 50px;
    line-height: 48px;
    max-width: 300px;
    padding: 0 64px;
    color:white;
`
// estilizando o texto que ira dentro do banner

const Banner = ({texto, backgroundImage}) => {
    // criando a constante do banner que recebe o texto e o backgroundimagem
    return (<FigureEstilizada $backgroundImage={backgroundImage}>
        <TituloEstilizado>{texto}</TituloEstilizado>
    </FigureEstilizada>
    // que ira retornar a figure estilizada e o texto
    )
}

export default Banner

