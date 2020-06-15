import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import logo from '../../assets/images/logo_icon.png'

// Define our button, but with the use of props.theme this time
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoImg = styled.img`
   width:50px;
   height:50px;
   margin-right:10px
`;

const LogoName = styled.div`
    color: #FFFFFF;
    font-size: 20px;
    font-family: 'Droid Serif', serif;
    font-weight: bold;
    font-style: normal;
    text-align: left;
    text-decoration: none;
`;

const Slogan = styled.div`
    color: #FFFFFF;
    font-size: 10px;
    font-family: 'Droid Serif', serif;
    font-weight: normal;
    font-style: normal;
    text-align: left;
    margin-top:1px;
`;

function Logo() {
  return (
    <Wrapper>
      <LogoImg src={logo}/>
      <div>
        <LogoName>Golf Shop</LogoName>
        <Slogan>Hottest Golf shop in the Market</Slogan>
      </div>
    </Wrapper>
  );
}

export default Logo;