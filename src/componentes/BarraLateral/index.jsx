import styled from "styled-components"
import ItemNavegacao from "./ItemNavegacao"

const Listaestilizada = styled.ul`
list-style: none;
padding: 0;
margin: 0;
width: 212px;
`
// estilizando a lista com styled

const BarraLateral = () =>{
    // criando o componente de barra lateral
    return(
<aside>
    {/* aside é uma tag html que indica algo que ficara ao lado */}
    <nav>
        <Listaestilizada>
            <ItemNavegacao
            iconeAtivo="/icones/home-ativo.png"
            iconeInativo="/icones/home-inativo.png"
            ativo={true}
            >
            Inicio
            {/* a barra lateral sempre vai receber um item de navegação que vem com icone de ativo e inativo,uma props de ativo pra verificar se esta ativo e um texto dentro que é a children */}
            </ItemNavegacao>

            <ItemNavegacao 
            iconeAtivo="/icones/mais-vistas-ativo.png"
            iconeInativo="/icones/mais-vistas-inativo.png"
            ativo={false}
            >
            Mais Vistas

            </ItemNavegacao>

            <ItemNavegacao 
            iconeAtivo="/icones/mais-curtidas-ativo.png"
            iconeInativo="/icones/mais-curtidas-inativo.png"
            ativo={false}
            >
            Mais Curtidas

            </ItemNavegacao>

            <ItemNavegacao 
            iconeAtivo="/icones/novas-ativo.png"
            iconeInativo="/icones/novas-inativo.png"
            ativo={false}
            >
            Novas

            </ItemNavegacao>

            <ItemNavegacao 
            iconeAtivo="/icones/surpreenda-me-ativo.png"
            iconeInativo="/icones/surpreenda-me-inativo.png"
            ativo={false}
            >
            Surpreenda-me

            </ItemNavegacao>
           
        </Listaestilizada>
    </nav>
</aside>
    )
}

export default BarraLateral