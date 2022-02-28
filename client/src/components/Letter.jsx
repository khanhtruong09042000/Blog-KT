import styled from "styled-components";
import { Send } from '@material-ui/icons'
import React, { useState } from 'react';
import {axiosInstance} from "../config"
import { mobile } from "../responsive"

const Container = styled.div`
  height : 60vh;
  background-color: #fcf5f5;
  text-align: center;
`
const Title = styled.h1`
  font-family: 'Lora', serif;
  font-size: 50px;
  color: #6e6868;
  padding: 10px 0px;
`
const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`
const Box = styled.div`
  width: 50%;
  display: flex;
  ${mobile({
  width: "90%"
})}
`
const InputItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  ${mobile({
  marginRight: "30px"
})}
`
const Write = styled.h2`
  font-family: 'Supermercado One', cursive;
`
const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 5px 0px 5px 5px;
  margin-bottom: 10px;
  border: 1.5px solid #a19a9a;
  font-size: 15px;
  border-radius: 10px;
`
const Area = styled.div`
  flex: 1;
`
const TextArea = styled.textarea`
  width: 100%;
  height: 118px;
  border: 1.5px solid #a19a9a;
  font-size: 15px;
  resize: none;
  border-radius: 10px;
`
const Button = styled.button`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px ;
  height: 40px;
  border: none;
  background-color: orange;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  &:hover{
    color: black;
    background-color: #15ebeb;
  }
`
const Desc = styled.h4`
  font-size: 20px;
  margin-right: 10px;
`

const Letter = () => {
  const [title, setTitle] = useState("")
  const [email, setEmail] = useState("")
  const [desc, setDesc] = useState("")

  const handleSend = async (e) => {
    try {
      const res = await axiosInstance.post("/mail/send", {
        email, title, desc
      })
    } catch (err) { }
  }

  return (
    <Container >
      <Title>
        You can contact me ?
      </Title>
      <InputContainer onSubmit={handleSend}>
        <Box>
          <InputItem>
            <Write>Email:</Write>
            <Input type="text" placeholder="Enter email..." onChange={(e) => setEmail(e.target.value)} />
            <Write>Title:</Write>
            <Input type="text" placeholder="Enter title..." onChange={(e) => setTitle(e.target.value)} />
          </InputItem>
          <Area>
            <Write>Comment:</Write>
            <TextArea type="text" placeholder="Enter comment..." onChange={(e) => setDesc(e.target.value)} />
          </Area>
        </Box>
        <Button type="submit">
          <Desc>SEND ME</Desc>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
};

export default Letter;
