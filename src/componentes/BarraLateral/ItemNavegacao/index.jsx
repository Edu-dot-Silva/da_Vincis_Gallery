import styled from "styled-components"

const ItemListaEstilizado = styled.li`
/* estilizando o item da lista */
font-size: 24px;
line-height: 29px;
margin-bottom: 30px;
cursor: pointer;
color: ${props => props.$ativo ? '#a38a5a' : '#c0b091'};
/* se estiver ativo ou nao,serao cores diferentes */
font-family: ${props => props.$ativo? 'CormorantInfantBold' : "CormorantInfantRegular"};
/* se estiver ativo a fonte sera bold,senao sera regular */
display: flex;
align-items: center;
gap: 5px;
`

const ItemNavegacao = ({children,iconeAtivo,iconeInativo,ativo=false}) =>{
    // o item de navegação esta recebendo essas props
    return <ItemListaEstilizado $ativo={ativo}>   
    {/* e esta retornando um item de lista estilizado      */}
    <img style={{width:25}} src={ativo? iconeAtivo : iconeInativo} alt="" />
    {/* onde o src da imagem vai depender do ternario se esta ativo ou nao */}
        {children}
        {/* e a children é o texto dentro do item da lista estilizado */}
        </ItemListaEstilizado>

    

}
export default ItemNavegacao