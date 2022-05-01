import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import phone from '../responsive'
const Container = styled.div`

    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    float: left;
    ${phone({ height: '20vh' })}
`
const InfoContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 150px;
    left: 0;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;




`
const Title = styled.h1`
    color: white;
    margin-bottom: 10px;
    
`
const Button = styled.button`
border: none;
padding: 10px;
background-color: white;
color: gray;
cursor: pointer;
font-weight: 650;
`
const CategoryItem = ({item}) => {
  return <Container>
      <Image src = {item.img}></Image>
      <InfoContainer>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
      </InfoContainer>
  </Container>;
};

export default CategoryItem;
