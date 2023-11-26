import styled from 'styled-components'
import tags from './tags.json'
// importando as tags do arquivo json estatico que esta dentro da pasta tags

const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
`
// criando um container para as tags

const TagTitulo = styled.h3`
margin: 0;
font-size: 24px;
color: #a38a5a;
`
// criando o titulo da tag

const Tag = styled.button`
    font-size: 24px;
    color:#e8e4db;
    background:#a38a5a;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    padding: 5px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color:#e8e4db;
    }
    `
    // criando o componente tag que sera um botao estilizado

const Div = styled.div`
display: flex;
gap: 24px;
justify-content: end;
`
// criando a div que o botao ficara

const Tags = ({setTag}) =>{
    return <TagsContainer>
    <TagTitulo>Busque por tags:</TagTitulo>
    <Div>
    {tags.map(tag => <Tag key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</Tag>)}
{/* mapeando as tags do arquivo json,e pata cada tag retornar o componente tag com uma key  (id) e um titulo */}
{/* essas informaçoes estao vindo do arquivo json */}
    </Div>
    </TagsContainer>
}

export default Tags