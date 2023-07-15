import styled from 'styled-components';
import img from '../../image/beer1.jpg';
import imgBubbles from '../../image/bubbles.jpg';

export const HeaderTeg = styled.header`

`

export const Title = styled.p`
color:white;
font-size: 32px;
`

export const WraperHeader = styled.div`
height: 200px;
background-image: url('${img}');
background-repeat: no-repeat;
background-size: cover;
max-width:1150px;
padding-left: 147px;
padding-right: 147px;
display:flex;
justify-content: center;
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

export const Container = styled.div`
background-image: url('${imgBubbles}');
background-color: blue;
max-width: 1440px;
margin: 0 auto;
height: 100%;
padding: 0;
`;