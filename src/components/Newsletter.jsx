import React from 'react'
import styled from 'styled-components'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import phone from '../responsive.js'
const Container = styled.div`
height: 50vh;
${phone({ height: '50vh' })}
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
background-color: #F56D91;
`
const Title = styled.h1`
font-size: 70px;
font-weight: 600;
margin-bottom: 15px;
${phone({ fontSize: '50px' })}

`
const Description = styled.div`
 ${phone({ textAlign: 'center',fontSize : '14px' })}
font-size: 25px;
font-weight: 400;
margin-bottom: 15px;
`
const Input = styled.input`
padding-left: 10px;
flex:8 ;
border: none;
`
const Button = styled.button`

background-color: #364F6B;
color: white;
flex: 1;`
const InputContainer = styled.div`
 ${phone({ width: '60%' })}
height: 35px;
width: 40%;
display: flex;
background-color: white;
justify-content: space-between;
border: 1px solid gray;


`
const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates for your favorite items.</Description>
        <InputContainer>
            <Input placeholder='email'></Input>
            <Button>
            <SendRoundedIcon/>
            </Button>
         
    
        </InputContainer>
   
    </Container>
  )
}

export default Newsletter