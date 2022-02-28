import styled from "styled-components";
import SideBar from "../components/SideBar";
import Title from "../components/Title";
import {axiosInstance} from "../config"
import { Context } from "../context/Context";
import { useContext, useState } from "react";
import { AccountCircle } from "@material-ui/icons";
import { mobile } from "../responsive"

const Container = styled.div`

`
const Wrapper = styled.div`
    margin-left: 330px;
  width: 74%;
  ${mobile({
    marginLeft: "100px",
    width: "82%",
    overflow: "hidden"
})}
`
const NonContainer = styled.div`
    
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 15px;
`
const Title1 = styled.h1`
   font-family: 'Lora', serif;
`
const Title2 = styled.h3`
    font-family: 'Lora', serif;
    cursor: pointer;
    &:hover{
        color: red;
    }
`
const Bottom = styled.div`
    display: flex;
    flex-direction: column;
`
const Label = styled.label`
margin: 15px 0px 0px 20px;
    width: 25px;
  height: 25px;
  font-size: 20px;
  border: 1px solid;
  border-radius: 50%;
  color: #e75757;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const Info = styled.div`
width: 22%;
    display: flex;
    align-items: center;
    margin-left: 20px;
    padding: 10px;
    border-bottom: 1px solid #756e6e;
    ${mobile({
    flexDirection: "column"
})}
`
const Box = styled.div`
    position: relative;
`
const Image = styled.img`
position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
`
const Image1 = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
`
const Name = styled.h3`
    margin-left: 20px;
    font-family: 'Lora', serif;
`
const Input = styled.input`
    margin: 6px ;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #b3a8a8;
`
const Button = styled.button`
    width: 150px;
    align-self: center;
    border: none;
    border-radius: 10px;
    background-color: teal;
    color: white;
    padding: 10px;
    margin: 20px 0px 5px 0px;
    cursor: pointer;
    &:hover{
        filter: brightness(150%);
    }
`
const Form = styled.form`
display: flex;
    flex-direction: column;
`

const Update = () => {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")
    const { user, dispatch } = useContext(Context)
    const [success, setSuccess] = useState(false);
    const [file, setFile] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newUser = {
            name, lastName, username, email, password, cPassword
        }
        dispatch({ type: "UPDATE_START" })
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newUser.profilePic = filename;
            try {
                await axiosInstance.post("/upload", data);
            } catch (err) { }
        }
        try {
            const res = await axiosInstance.put("/user/update/" + user._id, newUser)
            setSuccess(true)
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data })
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" })
        }
    }

    const handleDelete = async () => {
        try {
            await axiosInstance.delete("/user/delete/" + user._id, {
                data: { username: user.name + " " + user.lastName }
            })
            window.location.replace("/")
        } catch (err) { }
    }

    return (
        <Container>
            <SideBar />
            <Wrapper>
                <Title />
                <NonContainer>
                    <Top>
                        <Title1>Update your account</Title1>
                        <Title2 onClick={handleDelete}>Delete account</Title2>
                    </Top>
                    <Bottom>
                        <Info>
                            <Box>
                                {file && (
                                    < Image src={URL.createObjectURL(file)} alt="" />
                                )}
                                <Image1 src="https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                            </Box>
                            <Name>{user.name + " " + user.lastName}</Name>
                        </Info>
                        <Form onSubmit={handleSubmit}>
                            <Label htmlFor="fileInput"><AccountCircle /></Label>
                            <Input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                            <Input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                            <Input type="text" placeholder="Last name" onChange={(e) => setLastName(e.target.value)} />
                            <Input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)} />
                            <Input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                            <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            <Input type="password" placeholder="Confirm password" onChange={(e) => setCPassword(e.target.value)} />
                            <Button type="submit">Update</Button>
                        </Form>
                        {success && (
                            <span
                                style={{ color: "green", textAlign: "center", marginTop: "5px" }}
                            >
                                Profile has been updated...
                            </span>
                        )}
                    </Bottom>
                </NonContainer>
            </Wrapper>
        </Container>
    )
};

export default Update;
