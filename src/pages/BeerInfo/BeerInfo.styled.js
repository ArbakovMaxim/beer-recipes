import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
font-weight: 400;
font-size: 18px;
line-height: 30px;
  text-decoration:none;
  color:black;
`;

export const Wraper = styled.div`
  max-width:1440px;
  max-height: 100%;
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


