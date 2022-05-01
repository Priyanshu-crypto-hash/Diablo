import { Add } from '@material-ui/icons'
import React from 'react'
import styled from "styled-components"
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Container = styled.div`
background-color: blue;
`
const Wrapper = styled.div`

padding : 50px;
display: flex;
`


const Select = styled.select`
    padding: 5px;
    margin-left: 10px;
`
const Option = styled.option`
    padding: 5px;
`


const FilterContainer = styled.div`
    margin-top: 30px;

`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 400;
`
const ImageContainer = styled.div`
padding: 0 50px;
flex:1;
`

const ProductDescription = styled.p`
padding-bottom: 20px;
`
const Image = styled.img`
    
    height: 75vh;

`
const ProductTitle = styled.h1`
    font-weight: 400;
    padding-bottom: 20px;
`
const PriceContainer = styled.span`
    font-size: 4vh;
    font-weight: 300;
`
const InfoContainer = styled.div`

    flex: 1;
`
const QuantityContainer = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
`
const Amout = styled.span`
    margin: 0 10px;
    border-radius: 10px;
    border: 1px solid grey;
    width: 40px;
    height: 30px;
    align-items: center;
    display: flex;
    justify-content: center;
`
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    cursor: pointer;

   
`


const Cart = styled.button`
cursor: pointer;
padding: 10px;
background-color: white;
&:hover{
    background-color: #DDDDDD;
}

`

const ProductPage = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://cdn.shopify.com/s/files/1/2343/5149/products/1_82fc5ef3-a685-4639-9d01-e3d0a28b0fb2_394x.jpg?v=1626784352"></Image>
                </ImageContainer>
                <InfoContainer>

                    <ProductTitle>Product</ProductTitle>
                    <ProductDescription>

                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum."
                    </ProductDescription>
                    <PriceContainer>
                        Rs. 4500.00
                    </PriceContainer>
                    <FilterContainer>
                        <FilterText>
                            Size:
                        </FilterText>
                        <Select>
                            <Option disabled selected> Size </Option>
                            <Option> XL </Option>
                            <Option> L </Option>
                            <Option> M </Option>
                            <Option> S </Option>
                        </Select>

                    </FilterContainer>
                    <QuantityContainer>
                        <AddContainer>
                            <RemoveIcon />
                            <Amout>
                                1
                            </Amout>
                            <AddIcon />
                
                        </AddContainer>
                        <Cart>ADD TO CART</Cart>
                    </QuantityContainer>

                </InfoContainer>


            </Wrapper>
            <Newsletter />
            <Footer />

        </Container>
    )
}

export default ProductPage