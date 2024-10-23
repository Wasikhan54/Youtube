import React from 'react'
import styled from 'styled-components'
import pic from '../assets/images/animie.jpg'
import { Container } from '@mui/material'


const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  margin-top: 10px;
  `
  const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  `
  const CommentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${({ theme }) => theme.secondary};
  padding: 10px;s

  `

  const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.secondary};
  `
  const Text = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.secondary};
  `
function Comment() {
  return (

    <Container>
      <CommentContainer>

        <Avatar src={pic} />
        <CommentText>
          <Name>John Doe</Name>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque 
            consequuntur debitis dignissimos dolores eaque incidunt iure,
            itaque iusto laudantium magnam maxime minus modi natus nesciunt
            officia omnis perspiciatis quod reiciendis sapiente.
          </Text>
        </CommentText>
      </CommentContainer>
    </Container>
  )
}

export default Comment