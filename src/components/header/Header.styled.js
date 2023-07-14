import styled from 'styled-components';

export const HeaderTeg = styled.header`
border-bottom: 1px solid #333333;
background-color:${props => props.theme.backgroundBasic};
`

export const WraperHeader = styled.div`
max-width:1150px;
padding-left: 147px;
padding-right: 147px;
display:flex;
justify-content: space-between;
@media (max-width: 1050px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: 768px) {
    padding-left: 25px;
    padding-right: 25px;
  }
  @media (max-width: 500px) {
    padding-left: 5px;
    padding-right: 5px;
  }

`


export const WrapperLogo = styled.div`
width: 491px;
height: 84px;
`
export const Img = styled.img`
margin-top:19px;
width: 491px;
max-width:100%;
height: 84px;
`

export const Day = styled.div`
display: flex;
flex-direction: column;
justify-content:space-between;
align-items: center;
width: 35px;
height: 90px;
border-radius: 20px;
background: ${(props) => props.color};
margin-top: 16px;
@media (max-width: 700px) {
 margin-left: 5px;
  }
`

export const BtnNight = styled.div`
cursor: pointer;
background-color: #fff;
width: 25px;
height: 25px;
border: 0.1px solid #404040;
display: flex;
border-radius:50%;
justify-content: center;
align-items: center;
margin-bottom:5px;
`

export const BtnDay = styled.div`
cursor: pointer;
background-color: #fff;
border-radius:50%;
justify-content: center;
align-items: center;
width: 25px;
height: 25px;
border: 0.1px solid #404040;
display: flex;
margin-top:5px;
`