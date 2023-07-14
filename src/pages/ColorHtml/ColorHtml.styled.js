import styled from 'styled-components';

export const WraperColorHtml = styled.div`
  width-max:1440px;
  height-max: 100%;
  background-color:  ${props => props.theme.backgroundBasic};
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
export const TitleHTML = styled.h1`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 30px;
  line-height: 30px;
  color:${props => props.theme.basicText};
`;

export const TextHTML = styled.p`
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    color: ${props => props.theme.basicText};
    `;

export const WrapperHTML = styled.div`
  padding-top: 52px;
  padding-bottom: 36px;
`;

export const WrapperTextHTML = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 50px 30px 50px;
  @media (max-width: 867px) {
    padding-left:5px;
    padding-right:5px;
  }
`;

export const TitlColorHTML = styled.h2`
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 30px;
    line-height: 30px;
    color: ${props => props.theme.basicText};
`;

export const TextColorHTML = styled.p`
    text-align: center;
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    color: ${props => props.theme.basicText};
`;

export const TitlPrimaryColors = styled.h3`
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: ${props => props.theme.basicText};
    margin-bottom:7px;
`;

export const TitlTableColors = styled.h3`
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: ${props => props.theme.basicText};
    margin-bottom:7px;
`;

export const WraperTablePrimareColors = styled.div`
display: flex;
justify-content: center;
@media (max-width: 1050px) {
 display: inline-block;
 text-align: center;
  }
`;

export const WraperPrimareColors = styled.div`
text-align: center;
`;

export const WraperColorsTable = styled.div`
display:flex;
justify-content: space-between;
@media (max-width: 1400px) {
  display:grid;
  grid-template-columns: 2, 0.5fr;
  grid-template-rows: 2025px 1fr;
  }
  @media (max-width: 1050px) {
    grid-template-columns: 1f;
    grid-template-rows: 1fr 2025px 1fr;
    justify-content: center;
  }
`;

export const WraperColumn = styled.div`
 grid-column: 1 / 2;
   grid-row: 1 / 2;
   @media (max-width: 1050px) {
    grid-column: 1 / 1;
   grid-row: 1 / 2;
  }
`;

export const WraperColumnTwo = styled.div`
 grid-column: 2 / 2;
   grid-row: 1 / 2;
   @media (max-width: 1050px) {
    grid-column: 1 / 1;
   grid-row: 2 / 2;
  }
`;

export const WraperColumnThree = styled.div`
 grid-column: 2 / 2;
   grid-row: 2 / 2;
   @media (max-width: 1050px) {
    grid-column: 1 / 1;
   grid-row: 3/ 3;
   align-self: start;
  }
`;
