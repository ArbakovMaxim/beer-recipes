import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
position: absolute;
top:550px;
margin-left:40px;
text-decoration:none;
 background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
  
`;

export const Wraper = styled.div`
position: relative;
  max-width:1440px;
  max-height: 100%;
  padding-left: 147px;
  padding-right: 147px;
  
`;

export const Title = styled.h1`
text-align: center;
`;

export const ImageBeer = styled.img`
max-width:250px;
height:450px;
margin-right: 10px;`

export const ItemBeer = styled.li`
padding: 5px 0 `

export const WraperCard = styled.div`
padding: 10px;
display: flex;
background-color: white;
border-radius:20px;
`;

export const Span = styled.span`
font-size:18px;`

export const List = styled.ul`
display: flex;`

export const ItemIngridient = styled.li`
padding: 5px 0 ;
margin-left:10px;`