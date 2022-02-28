import styled from "styled-components";
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100%;
    height: 142vh;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    background-color: black;
    ${mobile({
  height: "100%",
  width: "110%"
})}
`
const Image = styled.img`
    width: 70%;
    ${mobile({
  width: "95%"
})}
`
const Source = styled.h2`
margin-top: 15px;
    font-family: 'Lora', serif;
    color: white;
`

const Img = ({ post }) => {
  const PF = "https://blog-kt.herokuapp.com/api/images/"

  return (
    <Container>
      <Image src={PF + post.photo} />
      <Source>Design: Khanh Truong</Source>
    </Container>
  )
};

export default Img;
