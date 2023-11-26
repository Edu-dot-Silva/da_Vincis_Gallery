import styled from "styled-components";
import Titulo from "../../Titulo"
import fotos from './fotos-populares.json'

const ColunaFotos = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 30px;
    gap: 16px;
`

const Imagem = styled.img`
    max-width: 212px;
    border-radius: 20px;
`

const Botao = styled.button`
    background-color: #ac966c;
    color: #fff;
    border: 2px solid;
    border-color: #a38a5a;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;

const Populares = () =>{
    return(
    <section> 
    <Titulo $alinhamento='right'>Populares</Titulo>
    {/* // reultilizando o titulo nessa secao de populares */}
    <ColunaFotos>
    {fotos.map(foto => <Imagem key={foto.id} src={foto.path} alt={foto.alt}/>)}
    <Botao>Ver Mais</Botao>
    </ColunaFotos>
    </section>

    )
}

export default Populares