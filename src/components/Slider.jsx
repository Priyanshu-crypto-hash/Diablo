import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';

import React, { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../data';
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
    position: relative;
`;
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform : translateX(0vw)
  
`;
const SliderContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${props=>props.bg};
`;
const ImageContainer = styled.div`
    height: 100vh;
    flex: 1;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;
const Img = styled.img`
height: 80%;
    
`
const InfoTitle = styled.h1`
    font-size: 78px;
    
`
const InfoDescription = styled.p`
    margin: 30px 0px;
    font-size: 20px;
    font-weight: 500 ;
    letter-spacing: 2px;
    
`
const InfoButton = styled.button`
    cursor: pointer;
    padding: 7px;

    background-color: transparent;
    font-size: 15px;
`
const DirectionArrow = styled.div`
    cursor: pointer;
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    opacity: 0.7;
    z-index: 2;

    left: ${props=>props.directionprop === "leftArrowContainer" && "5px"};
    right: ${props=>props.directionprop === "rightArrowContainer" && "5px"};
    margin: auto;

`;
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const clickArrow = (direction) => {

    };
  return ( <Container>
    <DirectionArrow directionprop="leftArrowContainer" onClick={()=>clickArrow("left")}>
        <ArrowLeftOutlined>
    
        </ArrowLeftOutlined>
 
    </DirectionArrow>

    <Wrapper>
    {sliderItems.map(item=>(
        <SliderContainer bg={item.bg}>
            <ImageContainer>

                <Img src={item.img}></Img>
            </ImageContainer>
            <InfoContainer>
                <InfoTitle>
                    {item.title}
                </InfoTitle>
                <InfoDescription>
                {item.description}
                </InfoDescription>
                <InfoButton>
                SHOP NOW
                </InfoButton>

            </InfoContainer>
        </SliderContainer>

    ))}
     
    </Wrapper>
    <DirectionArrow directionprop ="rightArrowContainer" onClick={()=>clickArrow("right")}>
    <ArrowRightOutlined>
        
        </ArrowRightOutlined>
        </DirectionArrow>
  </Container>);
};

export default Slider;
