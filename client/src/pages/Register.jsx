import { useState } from 'react'
import styled from 'styled-components'
import {axiosInstance} from "../config"
import { ArrowLeft } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    text-align: center;
    justify-content: center;
    background: linear-gradient(
      rgba(189, 185, 185, 0.5),
      rgba(90, 83, 83, 0.5)
    ),
    url("https://images.pexels.com/photos/1303085/pexels-photo-1303085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
    background-size: cover;
`
const Wrapper = styled.div`
    width: 50%;
    padding: 20px;
    ${mobile({
    width: "100%"
})}
`
const Title = styled.h1`
    color: #d1cece;
    font-family: 'Lora', serif;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    margin: 20px 10px 0px 0px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    outline: none;
`
const Agreement = styled.span`
    font-size: 13px;
    margin: 20px 0px;
    color: #cfd4d0;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
    filter: brightness(150%);
  }
`
const Span = styled.div`
    color: red;
    margin-top: 20px;
    font-size: 20px;
`
const Box = styled.div`
position: absolute;
top: 50px;
left: 40px;
  background-color: orange;
  font-family: 'Lora', serif;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  &:hover{
    filter: brightness(120%);
  }
  ${mobile({
left: "0px",
top: "0px"
})}
`

const Register = () => {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false);
    try {
      const res = await axiosInstance.post("/auth/register", {
        name, lastName, username, email, password, cPassword
      })
      res.data && window.location.replace("/login")
    } catch (err) {
      setError(true);
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Last name" onChange={(e) => setLastName(e.target.value)} />
          <Input placeholder="Username" onChange={(e) => setUserName(e.target.value)} />
          <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <Input type="password" placeholder="Confirm password" onChange={(e) => setCPassword(e.target.value)} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type='submit'>CREATE</Button>
        </Form>
        {
          error &&
          <Span>
            Something went wrong!
          </Span>
        }
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

export default Register;
