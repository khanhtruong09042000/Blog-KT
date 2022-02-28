import styled from 'styled-components'
import { Link } from "react-router-dom"
import logo from "../images/logo.png"
import { mobile } from "../responsive"

const Container = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  left: 0;
  right: 0;
  margin: auto;
  align-items: center;
  border-radius: 10px;
  background-image: linear-gradient(45deg,rgba(2,33,64, 0.8) 55%,rgba(45,95,93,0.85));
`
const Left = styled.div`
  flex: 1;
  margin-left: 40px;
  ${mobile({
  marginLeft: "0px"
})}
`
const Center = styled.div`
  flex: 1;
  ${mobile({
  textAlign: "center"
})}
`
const Title = styled.h1`
  font-size: 40px;
  font-family: 'Explora', cursive;
  letter-spacing: 5px;
  color: white;
  ${mobile({
  fontSize: "20px"
})}
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const MenuItem = styled.h4`
  margin-left: 20px;
  color: #e6d9d9;
  cursor: pointer;
  &:hover{
    color: white;
  }
  ${mobile({
  fontSize: "10px"
})}
`
const Box1 = styled.div`
  display: flex;
`
const Image = styled.img`
  width: 45%;
  margin-top: 10px;
  ${mobile({
  width: "75%"
})}
`

const Navbar = () => {
  return (
    <Container>
      <Left>
        <Image src={logo} />
      </Left>
      <Center>
        <Title>
          Beautiful Nature
        </Title>
      </Center>
      <Right>
        <Box1>
          <Link to="/register" className="link">
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login" className="link">
            <MenuItem>LOGIN</MenuItem>
          </Link>
        </Box1>
      </Right>
    </Container>
  )
};

export default Navbar;
