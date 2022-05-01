import React from 'react'
import styled from "styled-components"
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import phone from '../responsive'
const Container = styled.div`
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 20px;
`
const Filter = styled.div``
const Title = styled.h1`
margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    padding-right: 8px;
`

const Select = styled.select`
padding: 10px;
margin-right: 20px;


`
const Option = styled.option`

` 
const ProductList = () => {
  return (
    <Container>
    <Announcement/>
    <Navbar/>
    <Title>Dresses</Title>
    <FilterContainer>

        <Filter>
            <FilterText >
                Filter By :
            </FilterText>
            <Select>
                <Option disabled selected> Color </Option>
                <Option> White </Option>
                <Option> Red </Option>
                <Option> Blue </Option>
                <Option> Black </Option>
                <Option> Green</Option>
            </Select>
            <Select>
                <Option disabled selected> Size </Option>

                <Option> XL </Option>
                <Option> L </Option>
                <Option> M </Option>
                <Option> S </Option>

            </Select>
        </Filter>
        <Filter>
            <FilterText >
                Sort By :
            </FilterText>
            <Select>
                <Option disabled selected> Size </Option>
                <Option> Oldest</Option>
                <Option> Newest </Option>
                <Option> Min to High </Option>
                <Option> High to Min </Option>
                

            </Select>

        </Filter>

    </FilterContainer>
    <Products/>
    <Newsletter/>
    <Footer/>
    </Container>
  )
}

export default ProductList