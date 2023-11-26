import { styled } from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
// importando a biblioteca do styled components
import bannerBackground from "./assets/banner.jpg";
import Galeria from "./componentes/Galeria";
import Rodape from "./componentes/Rodape";



import fotos from './fotos.json'
// importando as fotos do json
import { useEffect, useState } from "react";
import ModalZoom from "./componentes/ModalZoom";

const Fundo = styled.div`
  background-color: #e8e4db;
  width: 100%;
  min-height: 100vh;
`;
// sintaxe para criar um styled component
// se criou uma const e foi chamado o styled que possui varios atributos/tags e nesse caso foi chamado a div
// isso quer dizer que esse fundo agora corresponde a uma div inteira
// essa crase recebe codigo css

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
  /* esse container ira segura toda a aplicação,aqui esta sendo setado o tamanho maximo para desktop */
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;
// criação de um container principal que posiciona a barra lateral e o banner

const ConteudoGaleria = styled.section`
display: flex;
flex-direction: column;
flex-grow: 1;
`
// criação de um section que posiciona a galeria alinhada com o banner
// a partir daqui tudo que for criado ficara um em baixo do outro respeitando o espaco da barra lateral


function App() {
  const [fotosDaGaleria,setFotosDaGaleria] = useState(fotos)
  // o useState inicial serao todas as fotos

  const [fotoSelecionada,setFotoSelecionada] = useState(null)

  const [filtro,setFiltro] = useState('')

  const [tag,setTag] = useState(0)

  useEffect(() =>{
    const fotosFiltradas = fotos.filter(foto =>{
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotosDaGaleria(fotosFiltradas)
  },[filtro,tag])

  const aoAlternarFavorito = (foto) =>{
    if(foto.id === fotoSelecionada?.id){
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
})
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria =>{
      return{
        ...fotoDaGaleria,
        favorita:fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita

      }
      
    }))
  }

  return (
    <Fundo>
      <EstilosGlobais />
      {/* importando os estilos globais que aplicam o reset da pagina */}
      <AppContainer>
        <Cabecalho
        filtro={filtro}
        setFiltro={setFiltro}
         />
        {/* chamando o cabeçalho */}
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
          <Banner
            texto="Um mergulho na mente do genio da renascença"
            backgroundImage={bannerBackground}
          />
          {/* atribuindo valores criados no componente banner e importando a imagem */}
          <Galeria 
          aoFotoSelecionada={foto => setFotoSelecionada(foto)} 
          aoAlternarFavorito={aoAlternarFavorito}
          fotos={fotosDaGaleria}
          setTag={setTag}
          />

          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
        <Rodape/>
      <ModalZoom 
      foto={fotoSelecionada}
      aoFechar={() => setFotoSelecionada(null)}
      aoAlternarFavorito={aoAlternarFavorito}
      />
    </Fundo>
  );
}

export default App;
