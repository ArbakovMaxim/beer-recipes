import styled from 'styled-components';

export const Wraper = styled.div`
  max-width:1440px;
  max-height: 100%;
  padding-left: 147px;
    padding-right: 147px;
`;

export const ListBeer = styled.ul`
`

export const ButtonBeer = styled.button`
position: sticky;
  top: 20px;
  z-index: 1;

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
  
`

export const ItemBeer = styled.li`
padding: 5px 0 `

export const ImageBeer = styled.img`
width:150px;
height:350px;`

export const WrapperImageBeer = styled.div`
width:150px;
height:350px;
margin-right: 10px;`

export const WraperCard = styled.div`
padding: 10px;
display: flex;
/* background-color: white; */
background-color: ${(props) => (props.isSelected ? "lightblue" : "white")};
border-radius:20px;
&:not(:last-child) {
    margin-bottom: 50px;
  }
`;
