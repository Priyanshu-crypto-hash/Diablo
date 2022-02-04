import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
    height: 30px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 300;
`;
const Announcement = () => {
  return <Container>
      New Deal !  Flat 50% Off upto Rs 200 on First Order
  </Container>;
};

export default Announcement;
