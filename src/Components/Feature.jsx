import React from "react";
import styled from "styled-components";
import Nav from "../images/nav.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Img = styled.img`
  width: 90%;
`;

const Title = styled.div`
  font-size: 70px;
`;

const Subtitle = styled.div`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

function Feature(props) {
  return (
    <Container>
      <Left>
        <Img src={Nav} />
      </Left>
      <Right>
        <Title>
          <b>good </b> design
          <br />
          <b>good </b> business
        </Title>
        <Subtitle>We know that good design means good business</Subtitle>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nemo
          omnis delectus blanditiis sit quibusdam Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Ratione nemo omnis delectus blanditiis
          sit quibusdam!
        </Desc>

        <Button>Learn More</Button>
        <AnimatedShapes />
      </Right>
    </Container>
  );
}

export default Feature;
