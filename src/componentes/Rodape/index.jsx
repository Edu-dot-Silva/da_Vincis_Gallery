import { styled } from 'styled-components';

const RodapeEstilizado = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #a38a5a;
    padding: 22px;
    box-sizing: border-box;
`;

const RodapeTexto = styled.p`
    font-size: 20px;
    color: white;
    margin: 0;
`;

function Rodape() {
    return (
        <RodapeEstilizado>
            <RodapeTexto>Projeto criado para praticar React.</RodapeTexto>
        </RodapeEstilizado>
    );
}

export default Rodape;
