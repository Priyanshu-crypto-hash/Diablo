import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
const Container = styled.div``
const Title = styled.h1`

text-align: center;
font-weight: 400;
`
const Wrapper = styled.div`

padding: 20px;
`
const TopContainer = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

`
const TopTextContainer = styled.div`

`
const TopText = styled.span`

margin-right: 60px;
text-decoration: underline;
cursor: pointer;
text-align: center;
`


const Topbutton = styled.button`
  background-color: ${(props) => props.type==='filled'? 'black' :'white'};
  color: ${(props) => props.type==='filled' && 'white'};
cursor: pointer;
  padding : 10px;
  font-weight: 600;
`
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const InfoContainer = styled.div`
flex: 3;
`

const ProductContainer = styled.div`
margin: 20px 0;
display: flex;
justify-content: space-between;
`
const ProductDetail = styled.div`

  flex: 2;
  display: flex;
`
const ProductPrice = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
`

const Image  = styled.img`
width: 200px;

`
const ProductDescription = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;

`
const ProductId = styled.span`

`
const ProductSize = styled.span`

`
const ProductName = styled.span`

`
const ProductAmount = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
font-size: 24px;
`
const Price = styled.span`
font-size: 28px;
font-weight: 200;
`
const ProductQuanitty = styled.div`
padding: 10px;
`
const Hr = styled.hr`
  border: none;
  background-color: #eee;
  height: 2px;
`
const SummaryContainer = styled.div`
flex: 1;
border: 1px solid grey;
border-radius: 3%;
padding: 20px;
height: 50vh;
`
const SummaryHeading = styled.h1`

font-weight: 400;
`
const SummaryText = styled.span``
const SummaryAmount = styled.span``
const SummaryDetail = styled.div`
margin: 20px 20px 20px 0;
display: flex;
justify-content: space-between;
font-weight: ${(props)=> props.type=== 'total' && 800};
font-size: ${(props)=> props.type=== 'total' && '20px'};
`
const CheckoutButton = styled.button`

font-weight: 600;
width: 100%;
background-color: black;
color: white;
height: 40px;
`

const Cart = () => {
  return ( 
    <Container>
    <Announcement/>
    <Navbar/>
    <Wrapper>
    <Title>YOUR CART</Title>
    <TopContainer>
 
        <Topbutton type='filled'>CONTINUE SHOPPING </Topbutton>
        <TopTextContainer>
            <TopText>Shopping Cart(2)</TopText>
            <TopText>Favorite(0)</TopText>
        </TopTextContainer>

        <Topbutton>CHECKOUT NOW</Topbutton>
    </TopContainer>
    <BottomContainer>
      <InfoContainer>
      <ProductContainer>
        <ProductDetail>
          <Image srcSet='https://cdn.shopify.com/s/files/1/2343/5149/products/12-6-2020bay2_muzamil10337_394x.jpg?v=1592057772'></Image>
          <ProductDescription>
            <ProductName><b>Product: </b> ANTISOCIAL TEE</ProductName>
            <br/>
            <ProductId><b>ID: </b>3452897589</ProductId>
            <br/>
            <ProductSize><b>SIZE: </b> L</ProductSize>

          </ProductDescription>



        </ProductDetail>
        <ProductPrice>
          <ProductAmount>
            <Add style={{cursor: 'pointer'}}/>
            <ProductQuanitty>2</ProductQuanitty>
            <Remove style={{cursor: 'pointer'}}/>
          </ProductAmount>
          <Price>Rs. 3000.00</Price>

        </ProductPrice>
 
      
      </ProductContainer>
      <Hr></Hr>
      <ProductContainer>
        <ProductDetail>
          <Image srcSet='https://cdn.shopify.com/s/files/1/2343/5149/products/3_6d145aab-0fd8-4c10-87a7-9bf1b51fbe1b_394x.jpg?v=1558132062'></Image>
          <ProductDescription>
            <ProductName><b>Product: </b> NASA SHORTS</ProductName>
            <br/>
            <ProductId><b>ID: </b>3452897586</ProductId>
            <br/>
            <ProductSize><b>SIZE: </b> 30</ProductSize>

          </ProductDescription>



        </ProductDetail>
        <ProductPrice>
          <ProductAmount>
            <Add style={{cursor: 'pointer'}}/>
            <ProductQuanitty>1</ProductQuanitty>
            <Remove style={{cursor: 'pointer'}}/>
          </ProductAmount>
          <Price>Rs. 2500.00</Price>

        </ProductPrice>
  
      </ProductContainer>
      
      
      </InfoContainer>
      <SummaryContainer>
        <SummaryHeading>ORDER SUMMARY</SummaryHeading>
        <SummaryDetail>
          <SummaryText>Subtotal</SummaryText>
          <SummaryAmount>Rs 5500.00 </SummaryAmount>
        </SummaryDetail>
        <SummaryDetail>
          <SummaryText>Shipping Charges</SummaryText>
          <SummaryAmount>Rs 80.00</SummaryAmount>
        </SummaryDetail>
        <SummaryDetail>
          <SummaryText>Total Discount</SummaryText>
          <SummaryAmount>-Rs 1800.00</SummaryAmount>
        </SummaryDetail>
        <SummaryDetail type = 'total'>
          <SummaryText >Total Amount</SummaryText>
          <SummaryAmount>Rs 3700.00</SummaryAmount>
        </SummaryDetail>
        <CheckoutButton>CHECKOUT NOW</CheckoutButton>

      </SummaryContainer>

    </BottomContainer>
    </Wrapper>

    
    <Footer/>
    </Container>
    
  )
}

export default Cart