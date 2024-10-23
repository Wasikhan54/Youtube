import { Title } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import pic from '../assets/images/animie.jpg'
function Card({type}) {

    const Container = styled.div`
      width: ${({ type }) => type !== "sm" && "280px"};
      margi-bottom: ${({ type }) => type === "sm" ? "10px" : "45px"};
      cursor: pointer;
      display: ${({ type }) => type === "sm" && "flex"};
      gap: 10px;
      margin-bottom: 30px;
      `

    const Img = styled.img`
      width: ${({ type }) => (type === "sm" ? "150px" : "100%")};
      height: ${({ type }) => (type === "sm" ? "100px" : "150")};
      flex: 1;
      `

    const Details = styled.div`
      display: ${({ type }) => type !== "sm" && "flex"};    
      gap: 17px;
      margin-top: ${({ type }) => type !== "sm" && "16px"};
      flex: 1;`
    const ChannnelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
    display: ${({ type }) => type === "sm" && "none"}; 
    `
    const Texts = styled.div`
    `
    const Title = styled.h1`
    font-weight: 500;
    font-size: 14px;
    color: ${({ theme }) => theme.secondary};`

    const ChannelName = styled.h2`
    font-weight: 300;
    font-size: 14px;
    margin: 9px 0;
    color: ${({ theme }) => theme.secondary};`

    const Info = styled.div`
    font-weight: 300;
    font-size: 14px;    
    color: ${({ theme }) => theme.secondary};`
    return (
        <Link to="/video" style={{ textDecoration: "none" }}> 
        <Container type={type}>
            <Img type={type} src="https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=1024x1024&w=is&k=20&c=CVhpekieDK_UB8vtEDw-dKKGWzDpsxcQt-XEQIkgm3Y=" />
            <Details>
                <ChannnelImage  type={type} src={pic} />
                <Texts>
                    <Title> Sticky Notes</Title>
                    <ChannelName>Clever Programmer</ChannelName>
                    <Info> 100k Subscribers</Info>
                </Texts>
            </Details>
        </Container>
        </Link>
    )
}
export default Card