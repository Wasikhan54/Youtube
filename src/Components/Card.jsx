import React from 'react'
import styled from 'styled-components'

 function Card() {

    const Container = styled.div`width: 280px;
      background-color: red;
      margi-bottom: 20px;
      cursor: pointer;`
      const Img = styled.img`
      width: 100%;
      height: 150px;
      `
  return (

    <Container>
        <Img src="https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=1024x1024&w=is&k=20&c=CVhpekieDK_UB8vtEDw-dKKGWzDpsxcQt-XEQIkgm3Y="/>
    </Container>
  )
}
export default Card