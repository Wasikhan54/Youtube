import React from 'react'
import { Title } from '@mui/icons-material'
import { Button,  } from '@mui/material'
import pic from '../assets/images/animie.jpg'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from '../Components/Comments.jsx'
import Comment from '../Components/Comment.jsx'
import Card from '../Components/Card.jsx'

function Video() {
  const Container = styled.div`
  display: flex;
  `
  const VideoWrapper = styled.div``
  const Content = styled.div`
  flex: 5;
  margin: 20px;
  `
  const Recommend = styled.div`
  flex: 2;
  gap: 10px;
  `
  const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  `
  const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 14px;
  `
  const Title = styled.h1`
font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.secondary};
  `
  const Info = styled.span`
  
  color: ${({ theme }) => theme.textSoft};`
  const Buttons = styled.div`
  display: flex;
  gap: 20px;`
  const Hr = styled.hr`
  margin: 15px 0; 
  color: ${({ theme }) => theme.textSoft};`

  const Channel = styled.div`
  display: flex;
  justify-content: space-between;

  `

  const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;`

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;`

  const ChannelName = styled.h2``
  const ChannelCounter = styled.span``
  const Description = styled.p``

  const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  `
  const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
  `
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <Title>test videos</Title>
          <Details>
            <Info>7,948,154 views • Jun 22, 2022</Info>
            <Buttons>
              <Button><ThumbUpOutlinedIcon />123</Button>
              <Button><ThumbDownOffAltOutlinedIcon />  21</Button>
              <Button><ReplyOutlinedIcon />  share</Button>
              <Button><AddTaskOutlinedIcon />  save</Button>
            </Buttons>
          </Details>
        </VideoWrapper>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={pic}  alt='Proile'/>
            <ChannelDetails>
              <ChannelName>test</ChannelName> 
              <ChannelCounter>200k subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias aspernatur odit, aliquid nisi, quos cumque debitis similique excepturi, iure commodi eius dolor sed sint consequuntur veniam accusantium eveniet. Maxime, minima?
              </Description>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>

        <Hr />
        <Comments />
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
      </Content>

      <Recommend>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommend>
    </Container>
  )
}

export default Video