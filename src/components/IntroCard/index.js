import React from 'react';
import styled, {ThemeProvider} from 'styled-components';

// Define our button, but with the use of props.theme this time
const Wrapper = styled.div`
  display: inline-block;
  background: rgba(0,0,0,.18);
  padding: 8px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  width: 189px;
  height: 189px;
`;

const ImgIntro = styled.img`
  webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function IntroCard({src}) {
  return (
    <Wrapper>
      <ImgIntro src={src}/>
    </Wrapper>
  );
}

export default IntroCard;