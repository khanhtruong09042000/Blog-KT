import { Add } from "@material-ui/icons"
import {axiosInstance} from "../config"
import { useContext, useState } from "react"
import styled from "styled-components"
import { Context } from "../context/Context"
import { mobile } from "../responsive"

const Box1 = styled.div`
    width: 100%;
    height: 130vh;
    display: flex;
  background-color: #00000065;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
  height: "100%",
  width: "110%"
})}
`
const Container = styled.div`
display: flex;
  background-color: #dad8d8;
  padding-bottom: 70px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 3px solid green;
  flex-direction: column;
  ${mobile({
  width: "80%"
})}
`
const Title = styled.h1`
  margin: 20px 0px 0px;
    font-family: 'Explora', cursive;
    font-size: 50px;
    letter-spacing: 5px;
`
const Box2 = styled.div`
  display: flex;
  ${mobile({
  flexDirection: "column"
})}
`
const Box3 = styled.div`
  position: relative;
  margin: 30px 0px 0px 100px;
  width: 50%;
`
const Image2 = styled.img`
position: absolute;
   width: 100%;
    height: 70vh;
    object-fit: cover;
    border-radius: 10px;
    ${mobile({
  height: "40vh",
})}
`
const Image = styled.img`
   width: 100%;
    height: 70vh;
    object-fit: cover;
    border-radius: 10px;
    ${mobile({
  height: "40vh",
})}
`
const Form = styled.form`
 flex: 1;
 margin: 30px 0px 0px 20px;
`
const InputContainer = styled.div`
  
`
const Label = styled.label`
margin-left: 20px;
    width: 25px;
  height: 25px;
  font-size: 20px;
  border: 1px solid;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const Input = styled.input`
width: 90%;
    margin: 20px 0px;
    padding: 10px 0px 10px 10px;
    letter-spacing: 2px;
    border-radius: 10px;
    outline: none;
`
const TextArea = styled.textarea`
    width: 90%;
    height: 200px;
    font-size: 20px;
    resize: none;
    border-radius: 10px;
    outline: none;
    ${mobile({
  height: "150px"
})}
`
const Item = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 20px 0px 0px 20px;
`
const Button = styled.button`
        width: 150px;
    align-self: center;
    border: none;
    border-radius: 10px;
    background-color: #${props => props.color};
    color: white;
    padding: 10px;
    margin: 20px 0px 20px 5px;
    cursor: pointer;
    &:hover{
        filter: brightness(150%);
    }
    ${mobile({
   width: "100px"
})}
`

const UpdatePost = ({ post }) => {
  const [title, setTilte] = useState("")
  const [desc, setDesc] = useState("")
  const [error, setError] = useState(false)
  const { user } = useContext(Context)
  const [file, setFile] = useState(null)

  const handleUpdate = async (e) => {
    e.preventDefault()
    const newPost = {
      username: user.name + " " + user.lastName,
      title,
      desc,
      profilePic: user.profilePic
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axiosInstance.post("/upload", data);
      } catch (err) { }
    }
    try {
      const res = await axiosInstance.put("/posts/" + post._id, newPost)
      res.data && window.location.replace("/posts")
    } catch (err) {
      setError(true)
    }
  }


  return (
    <Box1 >
      <Container>
        <Title>Update post</Title>
        <Box2>
          <Box3>
            {file && (
              <Image2 src={URL.createObjectURL(file)} alt="" />
            )}
            <Image src="https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </Box3>
          <Form onSubmit={handleUpdate}>
            <InputContainer>
              <Label htmlFor="fileInput"><Add /></Label>
              <Input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
              <Input type="text" placeholder="Title..." onChange={(e) => setTilte(e.target.value)} />
            </InputContainer>
            <TextArea type="text" placeholder="Tell your story..." onChange={(e) => setDesc(e.target.value)} />
            <Item>
              <Button type="submit" color="1cc70dcc">Update</Button>
            </Item>
            {error && (
              <span
                style={{ color: "green", textAlign: "center", margin: "10px" }}
              >
                You can't update this post !
              </span>
            )}
          </Form>
        </Box2>
      </Container>
    </Box1>
  )
};

export default UpdatePost;
