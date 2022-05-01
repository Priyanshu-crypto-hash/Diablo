import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import phone from '../responsive'
const Container = styled.div`
    display: flex;  
    padding: 5px;
    ${phone({ padding: '0',flexDirection: 'column' })}
    
`
const Categories = () => {
  return (<Container>
      {
          categories.map(item=>(
            <CategoryItem item = {item} key={item.id}/>
          ))
      }

  </Container>);
};

export default Categories;
