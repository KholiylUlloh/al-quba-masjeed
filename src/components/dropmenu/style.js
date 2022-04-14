import styled from 'styled-components'


export const Wrap = styled.div`
display: flex;
flex-direction: column;
background-color: #111;
color: #baa769;
font-size: 16px;
font-family: 'Montserrat';
width: 20rem;
.linkWrap{
    display: flex;
    align-items: center;
    padding:10px 10px;
    border-bottom: 1px solid #baa769;
    justify-content: space-between;
    cursor: pointer;
    :hover{
        background-color: #aaa;
        color: black;
    }
}
`