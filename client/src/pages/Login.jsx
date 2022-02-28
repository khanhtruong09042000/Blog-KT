import styled from "styled-components";
import {axiosInstance} from "../config"
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { ArrowLeft } from "@material-ui/icons"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(161, 157, 157, 0.5),
      rgba(151, 139, 139, 0.5)
    ),
    url("https://images.pexels.com/photos/2965773/pexels-photo-2965773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`
const Wrapper = styled.div`
    width: 25%;
  padding: 20px;
  ${mobile({
    width: "100%"
})}
`
const Title = styled.h1`
    color: #dacece;
    font-family: 'Lora', serif;
`
const Form = styled.form`
    display: flex;
  flex-direction: column;
`
const Input = styled.input`
    margin: 10px 0;
  padding: 10px;
  border: none;
    border-radius: 10px;
    outline: none;
    ${mobile({
  width: "95%"
})}
`
const Button = styled.button`
    width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: orange;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  border: none;
    border-radius: 10px;
    &:hover{
      filter: brightness(120%);
    }
    ${mobile({
  width: "60%"
})}
`
const Link1 = styled.a`
color: black;
    margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  &:hover{
      color: white;
  }
`
const Box = styled.div`
position: absolute;
top: 50px;
left: 40px;
  background-color: green;
  font-family: 'Lora', serif;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  &:hover{
    filter: brightness(150%);
  }
`

const Login = () => {
  const userRef = useRef()
  const passwordRef = useRef()
  const { dispatch, isFetching } = useContext(Context)
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: "LOGIN_START" })
    try {
      const res = await axiosInstance.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value
      })
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
    } catch (err) {
      dispatch({ type: "LOGIN_FALSE" })
      setError(true)
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Username" ref={userRef} />
          <Input type="password" placeholder="Password" ref={passwordRef} />
          <Button type="submit" disabled={isFetching}>LOGIN</Button>
          {error && (
            <span
              style={{ color: "red", margin: "10px" }}
            >
              You can login again !
            </span>
          )}
          <Link1>DO NOT YOU REMEMBER THE PASSWORD?</Link1>
          <Link to="/register" className="link">
            <Link1>CREATE A NEW ACCOUNT</Link1>
          </Link>
        </Form>
      </Wrapper>
      <Link to="/" className="link">
        <Box>
          < ArrowLeft />
          Home
        </Box>
      </Link>
    </Container>
  )
};

export default Login;
