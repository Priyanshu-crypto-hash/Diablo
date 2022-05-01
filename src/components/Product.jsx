import React from 'react'
import styled from 'styled-components';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const InfoContainer = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgb(0,0,0,0.2);
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;

`
const Container =  styled.div`
flex: 1;
margin: 5px;
min-width : 260px;
height: 320px;
display: flex; 
align-items: center;
justify-content: center;
position: relative;
&:hover ${InfoContainer}{
    opacity: 1;

}

`
const Img = styled.img`
    background-color: #E5E4E2;
    width: 100%;
    height: 100%;
`

const IconContainer = styled.div`
cursor: pointer;
width: 50px;
height: 40px;
border-radius: 50%;
background-color: white;
align-items: center;
justify-content: center;
display: flex;
margin: 10px;
transition: all 0.01s ease;
&:hover{
    background-color: #ffeaf7 ;
    transform: scale(1.1);
}

`


const Product = ({item}) => {
  return (
    <Container>
        <Img src = {item.img}/>
        <InfoContainer>
            <IconContainer>
                <ShoppingCartOutlinedIcon/>
            </IconContainer>
            <IconContainer>
                <FavoriteBorderOutlinedIcon/>
            </IconContainer>
        </InfoContainer>

    </Container>
  )
}

export default Product