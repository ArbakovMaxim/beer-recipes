import styled from 'styled-components';

export const Wraper = styled.div`
  width-max:1440px;
  height-max: 100%;
  padding-left: 147px;
    padding-right: 147px;
background-color: ${props => props.theme.backgroundBasic};
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
