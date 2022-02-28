import { Add } from "@material-ui/icons";
import {axiosInstance} from "../config"
import { useContext, useState } from "react";
import styled from "styled-components";
import SideBar from "../components/SideBar";
import Title from "../components/Title";
import { Context } from "../context/Context";
import { mobile } from "../responsive"

const Container = styled.div`
  width: 100%;
`
const NonContainer = styled.div`
  margin-left: 330px;
  width: 74%;
  text-align: center;
  ${mobile({
  marginLeft: "100px",
  width: "82%",
  overflow: "hidden"
})}
`
const Title1 = styled.h1`
  margin: 20px 0px 0px;
    font-family: 'Explora', cursive;
    font-size: 50px;
    letter-spacing: 5px;
`
const Wrapper = styled.div`
  margin-top: 30px;
  text-align: left;
`
const Box = styled.div`
  position: relative;
`
const Image = styled.img`
position: absolute;
margin-left: 80px;
  width: 88%;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
  ${mobile({
  marginLeft: "15px",
  width: "92%"
})}
`
const Image1 = styled.img`
  margin-left: 80px;
  width: 88%;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
  ${mobile({
  marginLeft: "15px",
  width: "92%"
})}
`
const InputContainer = styled.div`
  margin-left: 150px;
  display: flex;
  align-items: center;
  ${mobile({
  marginLeft: "20px"
})}
`
const Label = styled.label`
  width: 25px;
  height: 25px;
  font-size: 20px;
  border: 1px solid;
  border-radius: 50%;
  color: rgb(129, 125, 125);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Input = styled.input`
   font-size: 30px;
  border: none;
  padding: 20px;
  width: 100%;
  &:focus{
    outline: none;
  }
`
const TextArea = styled.textarea`
margin-left: 150px;
   font-size: 20px;
  border: none;
  padding: 20px;
  width: 80%;
  &:focus{
    outline: none;
  }
  ${mobile({
  marginLeft: "20px"
})}
`
const Button = styled.button`
margin-left: 150px;
color: white;
  background-color: teal;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  &:hover{
    filter: brightness(140%);
  }
`
const End = styled.div`
    width: 100%;
    height: 10vh;
    background-image: linear-gradient(50deg,#0d19c7cc 50%,#362015d6);
    display: flex;
    align-items: center;
    justify-content: center;
`
const Logo = styled.h1`
    color: white;
    font-family: 'Lora', serif;
    letter-spacing: 5px;
    font-size: 50px;
`
const Form = styled.form``

const Write = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const { user } = useContext(Context)
  const [file, setFile] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = {
      username: user.name + " " + user.lastName,
      title,
      desc,
      profilePic: user.profilePic
    };
    if (file) {
      const data = new FormData();
      const filename = file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axiosInstance.post("/img", data);
      } catch (err) {}
    }
    try {
      const res = await axiosInstance.post("/posts", newPost)
      res.data && window.location.replace("/posts")
    } catch (err) { }
  }

  return (
    <Container>
      <SideBar />
      <NonContainer>
        <Title />
        <Title1>Write post</Title1>
        <Wrapper>
          <Box>
            {file && (
              <Image src={URL.createObjectURL(file)} alt="" />
            )}
            <Image1 src="https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </Box>
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <Label htmlFor="fileInput"><Add /></Label>
              <Input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
              <Input type="text" placeholder="Title..." onChange={(e) => setTitle(e.target.value)} />
            </InputContainer>
            <TextArea type="text" placeholder="Tell your story..." onChange={(e) => setDesc(e.target.value)} />
            <Button type="submit" >Publish</Button>
          </Form>
        </Wrapper>
        <End>
          <Logo>KT.COM</Logo>
        </End>
      </NonContainer>
    </Container>
  )
};

export default Write;
