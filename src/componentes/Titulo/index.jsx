import styled, {} from 'styled-components'

const Titulo = styled.h2`
color: #a38a5a;
font-size: 32px;
text-align: ${ props => props.$alinhamento ? props.$alinhamento: 'left'};
/* aqui o componenete titulo pode receber um alinhamento,se nao receber o padrao sera left via props */
`

export default Titulo