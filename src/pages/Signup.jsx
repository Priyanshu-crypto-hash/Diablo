import React from 'react'
import styled from "styled-components"
import phone from '../responsive'
const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255,255,255,0.3),
rgba(255,255,255,0.5)), 
url(" https://i.ibb.co/3WRd3F7/pexels-ali-pazani-2693864.jpg") center;
background-size: cover;
display: flex;
    justify-content: center;
    align-items: center;

`
const Wrapper = styled.div`
    width: 40%;
    ${phone({ width: '60%' })}
    padding: 40px;
    background-color: white;
    display: flex;
    flex-direction: column;

`
const Title = styled.h1`
font-size: 30px;
font-weight: 400;
`
const Form = styled.form`
 display: flex;
 flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`
const Agreement = styled.span`
    margin: 20px 0;
    font-size: 12px;
   
 
`
const RegisterButton = styled.button`
    font-weight: 500;
    width: 130px;
    height: 40px;
    padding: 5px;
    background-color: #BC6FF1;
    color: white;
    cursor: pointer;
`


const Signup = () => {
  return (
    <Container>
    <Wrapper>
        <Title>
            CREATE AN ACCOUNT
        </Title>
        <Form>
            <Input placeholder='First Name'></Input>
            <Input placeholder='Last Name'></Input>
            <Input placeholder='Username'></Input>
            <Input placeholder='Email id'></Input>
            <Input placeholder='Password'></Input>
            <Input placeholder='Confirm Password'></Input>
        </Form>
        <Agreement>
        By continuing, you agree to Diablo's Terms of Use and <b>Privacy Policy.</b>
        </Agreement>
        <RegisterButton> REGISTER</RegisterButton>
    </Wrapper>
    </Container>
  )
}

export default Signup;