import { Search, ShoppingCart } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';


const Container = styled.div`
    height: 50px;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


const LeftSide = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const RightSide = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;

const Center = styled.div`
    flex: 1;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;
const SearchInput = styled.input`
    border: none;
`;
const SearchContain = styled.div`
    border: 0.5px solid lightslategray;
    align-items: center;
    padding: 5px;
    margin-left: 25px;
`;
const AppName = styled.h1`
    font-weight: bolder;
    text-align: center;
`
const Items = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 30px;
`
const Navbar = () => {
  return (
  <Container>
      <Wrapper>
          <LeftSide>
              <Language>
                  EN
              </Language>      
              <SearchContain>
                  <SearchInput>
                      
                  </SearchInput>
                <Search style={{color:"grey",fontSize:"16px",alignItems:"baseline"}}>
                    
                </Search>
              </SearchContain>
          </LeftSide>
          <Center>
        <AppName>
            DIABLO.
        </AppName>
               

          </Center>

          <RightSide>
              <Items>SIGN UP</Items>
              <Items>LOG IN</Items>
              <Items>    
                  <Badge badgeContent={4} color="primary">
                <ShoppingCart/>   
              </Badge>
              </Items>
              
          
          </RightSide>
      </Wrapper>
  </Container>)
};

export default Navbar;
