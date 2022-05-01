import React from 'react'
import styled from 'styled-components';
import { allProducts } from '../data';
import Product from './Product';
const Container =  styled.div`
background-color: white;
flex: 1;
padding: 2px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

`


const Products = () => {
  return (
    <Container>
        {
            allProducts.map((item)=>(
            <Product item = {item} key={item.id}></Product>
            ))
        }
    </Container>
  )
}

export default Products