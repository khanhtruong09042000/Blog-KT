import styled from 'styled-components'
import { useContext } from 'react'
import { Context } from "../context/Context";
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
const Images = styled.img`
  width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    ${mobile({
  width: "20%"
})}
`
const Name = styled.h4`
  font-family: 'Lora', serif;
    color: white;
    margin:0px 12px;
    ${mobile({
  fontSize: "10px",
  margin: "0px 5px"
})}
`
const Logout = styled.h4`
  background-color: white;
  padding: 8px 12px;
  margin-left: 20px;
  font-family: 'Lora', serif;
  border-radius: 6px;
  cursor: pointer;
  &:hover{
    background-color: #d1caca;
  }
  ${mobile({
  padding: "3px 5px",
  marginLeft: " 0px"
})}
`
const Box = styled.div`
  display: flex;
  align-items: center;
`
const Image = styled.img`
  width: 45%;
  margin-top: 10px;
  ${mobile({
  width: "75%"
})}
`

const NavbarLogin = () => {
  const { user, dispatch } = useContext(Context)
  const PF = "https://blog-kt.herokuapp.com/api/images/"

  const handleLogout = () => {
    dispatch({ type: "LOG_OUT" })
  }

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
        <Box>
          <Images src={PF + user.profilePic} />
          <Name>{user.name + " " + user.lastName}</Name>
          <Logout onClick={handleLogout}>
            {user && "Logout"}
          </Logout>
        </Box>
      </Right>
    </Container>
  )
};

export default NavbarLogin;
