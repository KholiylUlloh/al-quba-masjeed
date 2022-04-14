import styled from 'styled-components';

export const Wrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0,0);
font-family: 'Montserrat';
padding: 10px 10vw;
padding-bottom: 50px;
`
export const DailyAnn = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: inherit;
width: 70rem;
box-sizing: border-box;
border: 1px solid;
padding:0 15px;
`
export const Date = styled.div`
display: flex;
flex-direction: column;
font-size: 16px;
font-weight: 700;
line-height: 1.5;
color: #baa769;
box-sizing: border-box;
@media (max-width: 1000px) {
    display: none;
}
.special{
    font-size: 14px;
    font-weight: 600;
    color: #363636;
}
`

export const PrayerTimeTab = styled.div`
display: table;
color: #363636;
font-size: 14px;
@media (max-width: 600px) {
    font-size: 12px;
    td{
        font-size: 14px;
    }
}
th,td{
    padding: 5px 12px 5px 0;
    text-align: center;
}
td{
    font-size: 16px;
    font-weight: bold;
}
th{
    font-weight: 700;
}
`