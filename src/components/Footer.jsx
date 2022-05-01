import React from 'react'
import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import { Phone } from '@material-ui/icons';
import phone from '../responsive'
const Container = styled.div`
display: flex;
${phone({ flexDirection : 'column' })}
`
const LeftContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const RightContainer = styled.div`
 ${phone({ backgroundColor : '#DFDFDE' })}
padding: 20px;
flex: 1;`
const CenterContainer = styled.div`
 ${phone({ display: 'none'})}
padding: 20px;
flex: 1;`

const Title = styled.h3`
margin-bottom: 20px;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`
const List  = styled.ul`
    margin:0;
    padding: 0;
    display: flex;
    list-style: none;
    flex-wrap: wrap;

`


const SocialHandles = styled.div`
display: flex;

margin: 15px 0;
`
const SocialIcons = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=> props.colour};
display: flex;
align-items: center;
justify-content: center;
margin-right : 15px;
cursor: pointer;
`
const Logo = styled.h1`
margin-bottom: 7px;
`
const Description = styled.p``
const ContactContainer = styled.div`
align-items: center;
display: flex;

margin-bottom: 20px;
`
const Payment = styled.img`
    width: 35%;
`


const Footer = () => {
  return (
    <Container>
        <LeftContainer>
        <Logo>
            DIABLO
        </Logo>
        <Description>
        Diablo, India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new to the table on the daily basis. 
        Fashion trends seem to change at lightning speed, yet the Diablo has managed to keep up without any hiccups. 
        Gain access to priority delivery, early sales, lucrative deals and other special perks on all your shopping with the Diablo. 
        
        </Description>
        <SocialHandles>
            <SocialIcons colour= "d6249f">
                <InstagramIcon/>
            </SocialIcons>
            <SocialIcons colour="3b5998">
                <FacebookIcon/>
            </SocialIcons>
            <SocialIcons colour = "1DA1F2">
                <TwitterIcon/>
            </SocialIcons>
            <SocialIcons colour = "0e76a8">
                <LinkedInIcon/>
            </SocialIcons>
        </SocialHandles>
        </LeftContainer>
        <CenterContainer>

        <Title>Useful Links</Title>

        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Men Fashion</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Account</ListItem>
            <ListItem>Favorite</ListItem>
            <ListItem>Customer Support</ListItem>
            <ListItem>Terms & Conditions</ListItem>

        </List>
        </CenterContainer>
        <RightContainer>

        <Title>Contact</Title>

        <ContactContainer> <LocationOnIcon style={{marginRight: "5px"}}/>   Rani Bagh, Delhi</ContactContainer>
        
        <ContactContainer> <PhoneAndroidIcon style={{marginRight: "5px"}}/>  +91 9967245561</ContactContainer>
         
        <ContactContainer> <EmailIcon style={{marginRight: "5px"}}/>   diablo@gmail.com</ContactContainer>
        <Payment src = "https://i.ibb.co/yQyNqD9/payment.png"/>
        </RightContainer>
    </Container>
  )
}

export default Footer