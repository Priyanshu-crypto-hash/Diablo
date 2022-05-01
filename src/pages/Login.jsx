import React from 'react'
import styled from "styled-components"
import phone from '../responsive'
const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255,255,255,0.3),
rgba(255,255,255,0.5)), 
url( "https://i.ibb.co/wNhL6L2/pexels-jansel-ferma-2315302.jpg") center;
background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

`
const Wrapper = styled.div`
    width: 25%;
    padding: 40px;
    background-color: white;
    flex-direction: column;
    ${phone({ width: '60%' })}

 

`
const Title = styled.h1`
font-size: 30px;
font-weight: 400;
`
const Form = styled.form`
 display: flex;
 flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`

const RegisterButton = styled.button`
    font-weight: 500;
    width: 130px;
    height: 40px;
    padding: 5px;
    background-color: #BC6FF1;
    color: white;
    cursor: pointer;
    margin: 10px 0;
`
const LinkContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const Link = styled.a`
margin: 5px 0;
font-size: 12px;
text-decoration: underline;
cursor: pointer;

`
const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>
            SIGN IN
        </Title>
        <Form>
            <Input placeholder='Username'></Input>
            <Input placeholder='Password'></Input>
            <RegisterButton> LOGIN</RegisterButton>
            <LinkContainer>
            <Link>FORGOT PASSWORD</Link>

            <Link>CREATE AN ACCOUNT</Link>
            </LinkContainer>
         
        </Form>


    </Wrapper>
    </Container>
  )
}

export default Login