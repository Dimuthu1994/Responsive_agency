import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh-50px);
  display: flex;
  padding: 20px;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  width: 40%;
`;

const Title = styled.h1`
  font-size: 60px;
  width: 60%;
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
`;

const Ri = styled.div`
  width: 40%;
`;

function Intro(props) {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Desc>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business
        </Desc>
      </Left>
      <Right>r</Right>
    </Container>
  );
}

export default Intro;
