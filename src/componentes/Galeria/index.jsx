import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tags from "./Tags"
import Imagem from "./Imagem"


const GaleriaContainer = styled.div`
display: flex;
`
// criação do container geral da galeira (incluindo o de populares)

const SecaoFluida = styled.section`
flex-grow: 1;
`
// esta secao fluida sera a parte de navegue pelas obras

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({fotos = [],aoFotoSelecionada,aoAlternarFavorito,setTag,}) =>{
    return(
        <>
        <Tags setTag={setTag}/>
        
        <GaleriaContainer>
            {/* criando o container de galeria */}
        <SecaoFluida>
        <Titulo>Navegue pelas obras</Titulo>
        {/* importando o componente titulo */}
        <ImagensContainer>
        {fotos.map(foto => <Imagem
        aoZoomSolicitado={aoFotoSelecionada}
        aoAlternarFavorito={aoAlternarFavorito}
        key={foto.id}
        foto={foto}
        />)}

        </ImagensContainer>

        </SecaoFluida>
        <Populares/>

        </GaleriaContainer>


        </>
    )
}

export default Galeria