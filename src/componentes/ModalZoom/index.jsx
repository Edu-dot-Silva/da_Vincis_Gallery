import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import BotaoIcone from "../BotaoIcone";

const Overlay = styled.div`
background-color: rgba(0,0,0,0.7);
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
`

const DialogEstilizado = styled.dialog`
position:fixed;
top: 0px;
background: transparent;
padding: 0;
border: 0;
width:600px;
display: flex;
justify-content: center;
form{
  button{
    position: relative;
    top: 20px;
    right: 60px;
  }
}
`

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
  return (
    <>
      {foto && <>
      <Overlay/>
        <DialogEstilizado open={!!foto} onClose={aoFechar}>
        <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito}/>
        <form method="dialog">
          <BotaoIcone formMethod="dialog">
            <img src="/public/icones/fechar.png" alt="Icone de fechar" />
          </BotaoIcone>
        </form>
      </DialogEstilizado>
      </>
      }
    </>
  );
};

export default ModalZoom;
