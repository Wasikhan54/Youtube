import React from 'react'
import pic from '../assets/images/animie.jpg'
import styled from 'styled-components'
function Comments() {

    const Container = styled.div``

    const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;`

    const Avatar = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    `
    const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.textSoft};
    color: ${({ theme }) => theme.secondary};
    background-color: transparent;
    outline: none;
    padding: 5px;
    width: 100%;
    `
    const Button = styled.button`
    border: none;
    padding: 5px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.text};
    `
  return (
    <Container>
        <NewComment>
            <Avatar src={pic} />
            <Input placeholder='Add a comment...'/>
            <Button>
                Post
            </Button>
        </NewComment>
    </Container>
  )
}

export default Comments