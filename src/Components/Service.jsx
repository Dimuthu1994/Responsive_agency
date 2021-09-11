import React, { useState } from "react";
import styled from "styled-components";
import How from "../images/how5.png";
import MiniCard from "./MiniCard";
import Play from "../images/play.png";

const Container = styled.div`
  display: flex;
  height: 100%;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  position: relative;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  height: 120%;
  margin-left: 100px;
  display: ${({ open }) => open && "none"};
`;

const Right = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`;

const Title = styled.h1``;

const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Button = styled.h1`
  width: 150px;
  border: none;
  padding: 15px 20px;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Video = styled.video`
  display: ${({ open }) => !open && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 0;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  background-color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
  right: 5px;
  top: 30%;
`;

function Service(props) {
  const smallScreen = window.screen.width <= 480 ? true : false;
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Left>
        <Image src={How} open={open} />
        <Video
          open={open}
          src="https://youtu.be/trBvk37e1iw"
          autoPlay
          loop
          controls
        />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple Process to Start</Title>
          <Desc>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
            aliquam distinctio, saepe repudiandae et optio nihil nulla quidem.
            Ipsum, excepturi a. Voluptas perspiciatis rerum earum cumque quis
            corporis hic minus.
          </Desc>

          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <Icon src={Play} />
            How it works
          </Button>
        </Wrapper>
      </Right>
      {smallScreen && open && (
        <Modal>
          <Video
            open={open}
            src="https://youtu.be/trBvk37e1iw"
            autoPlay
            loop
            controls
          />
          <CloseButton onClick={() => setOpen(false)}>close</CloseButton>
        </Modal>
      )}
    </Container>
  );
}

export default Service;
