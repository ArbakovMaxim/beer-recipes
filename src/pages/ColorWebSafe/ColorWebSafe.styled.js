import styled from 'styled-components';

export const WraperColorWebSafe = styled.div`
  width-max:1440px;
  height-max: 100%;
  background-color:${props => props.theme.backgroundBasic};
  padding-left: 147px;
  padding-right: 147px;
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
`;

export const WrapperTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 50px 30px 50px;
  @media (max-width: 867px) {
    padding-left:5px;
    padding-right:5px;
  }
`;

export const WrapperSafe = styled.div`
  padding-top: 52px;
  padding-bottom: 36px;
`;

export const TitleSafe = styled.h1`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 30px;
  line-height: 30px;
  color: ${props => props.theme.basicText};
`;

export const TextSafe = styled.p`
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    color: ${props => props.theme.basicText};
    `

export const TitleTable = styled.h2`
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 30px;
    line-height: 30px;
    color: ${props => props.theme.basicText};
`;

export const TextTable = styled.p`
    text-align: center;
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    color: ${props => props.theme.basicText};
`;

export const ColorBox = styled.div`
  width: 75px;
  height: 65px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  
  margin-left:-30px;
  padding: 21px 33px;
  list-style: none;
  background-color:${props => props.theme.backgroundSecond};

  @media (max-width: 867px) {
    justify-content:center;
    margin-left:0;
    padding: 21px 5px;
  }

`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 196px;
  height: 65px;
  margin-left:30px;
  border-radius: 4px;
  background-color:${props => props.theme.backgroundSecond};
  margin-bottom: 0.5rem;

  @media (max-width: 867px) {
    justify-content:center;
    margin-left:0px;
  }
`;

export const HexTitle = styled.p`
    width:30px;
    color:${props => props.theme.secondText};
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
`;

export const NameTitle = styled.p`
    width:30px;
    color:${props => props.theme.secondText};
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
`;

export const ColorHEX = styled.p`
    text-align: center;
    width: 90px;
    padding-top: 6px;
    padding-bottom: 6px;
    background-color: ${props => props.theme.backgroundBasic};
    color: ${props => props.theme.basicText};
    border:${props => props.theme.border};

    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    
`;
export const ColorRGB = styled.p`
    text-align: center;
    width: 90px;
    padding-top: 6px;
    padding-bottom: 6px;
    background-color: ${props => props.theme.backgroundBasic};
    color: ${props => props.theme.basicText};
    border:${props => props.theme.border};

    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
`;

export const WrapperHexAndRgb = styled.div`
  display:block;
`;
export const WrapperHex = styled.div`
margin-bottom:3px;
margin-padding:4px;
margin-padding:4px;
align-items: center;
weight:120px;
height: 30px;
  display:flex;
`;
export const WrapperRgb = styled.div`
margin-padding:4px;
margin-padding:4px;
align-items: center;
weight:120px;
height: 30px;
  display:flex;
`;