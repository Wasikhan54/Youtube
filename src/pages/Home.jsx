import React from 'react'
import styled from 'styled-components'
import Card from '../Components/Card.jsx'
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;

    gap: 20px;
`;


function Home() {
  return (

    <Container>
        <Card />
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </Container>
  )
}

export default Home