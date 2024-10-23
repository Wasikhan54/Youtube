import React from 'react'
import { Search  } from '@mui/icons-material'
import { Button, Input } from '@mui/material'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function Navbar() {
  const Container = styled.div`
   position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary}; 
  height: 56px;
`
  const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  
  `
  const Search = styled.div`
  width: 40%;
  left: 0;
  top: 0;
  margin: auto;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  border : 2px solid ${({ theme }) => theme.secondary};
  height: 30px;
  justify-content: space-between;`

  const Input = styled.input`
  border: none;
  background-color: transparent;
  outline-width: 0;
  color: ${({ theme }) => theme.secondary};
  `

  const Button = styled.button`
  background-color: transparent;
  border: 1px solid #3ea6ff;
  padding: 5px 10px;
  border-radius: 3px;
  color: #3ea6ff;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-right: 20px;
`;
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search...' />
          <SearchIcon/>
        </Search>
        <Button>
        <AccountCircleOutlinedIcon />
          Sign In
          </Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar