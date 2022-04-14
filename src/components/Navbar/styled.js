import styled from 'styled-components'


export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding:0 10vw ;
`

export const Wrap = styled.div`
width: 68.5rem;
display: flex;
align-items: center;
background-color: rgba(0,0,0,0);
padding: 15px;
border: 1px solid ;
position: relative;
`

export const LogoWrap = styled.div`
display: flex;
align-items: center;
cursor: pointer;
`

export const Logo = styled.div`
font-size: 40px;
font-weight: bold;
color: #baa769;
`
// Logo.Title = styled.div`
// text-align: center;
// font-size: 25px;
// font-weight: 800;
// margin-left: 10px;
// color: #363636;
// .slogan{
//     font-size: 20px;
// }
// `

export const Right = styled.div`
display: flex;
align-items: center;
font-family: 'Montserrat';
font-weight: 600;
font-size: 16px;
color: #363636;
justify-content: flex-end;
flex: 1;
.link-wrap{
    display: flex;
    align-items: center;
    padding: 10px;
    margin-right: 20px;
    :hover{
        color: #baa769;
    }
    cursor: pointer;
    @media (max-width: 1200px) {
        display: none;
    }
}
button{
    font-family: 'Montserrat';
    font-weight: 600;
    padding: 12px 25px;
    font-size: 16px;
    border-radius: 30px;
    background-color: #baa769;
    color: white;
    border: none;
    cursor: pointer;
    :hover{
        background-color: #706337;
        transition: all linear .3s;
    }
}
.menu-wrap{
    display: none;
    cursor: pointer;
    @media (max-width: 1200px) {
        display: flex;
    }
}
.dropdown{
    position: absolute;
    top: 5rem;
    right: 1px;
    @media (min-width: 1200px) {
        display: none;
    }
}
`