import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import SideBar from "../components/SideBar";
import Title from "../components/Title";
import {axiosInstance} from "../config"
import { useLocation } from "react-router-dom";
import { Context } from "../context/Context";
import UpdatePost from "../components/UpdatePost";
import Img from "../components/Img";
import { Clear } from "@material-ui/icons";
import { mobile } from "../responsive"

const Container = styled.div`
    text-align: center;
    position: relative;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title0 = styled.h1`
    margin: 20px 0px;
    font-family: 'Explora', cursive;
    font-size: 50px;
    letter-spacing: 5px;
`
const MenuItem = styled.div`
    display: flex;
    margin-bottom: 20px;
    ${mobile({
    flexDirection: "column"
})}
`
const Image = styled.img`
flex: 1;
    width: 50%;
    height: 70vh;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
    opacity: 0.8;
    &:hover{
        opacity: 1;
    }
    ${mobile({
    width: "100%"
})}
`
const Info = styled.div`
width: 30vw;
flex: 1; 
    margin-left: 15px;
    border-radius: 10px;
    border: 1px solid #756e6e;
    ${mobile({
    width: "95%",
    margin: "10px 0px 0px 10px"
})}
`
const Author = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
`
const ImgContainer = styled.div`
    margin-right: 10px;
`
const Image1 = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
`
const Name = styled.h3`
    font-family: 'Lora', serif;
`
const Title1 = styled.h2`
    font-family: 'Poppins', sans-serif;
    margin-bottom: 20px;
    word-wrap: break-word;
`
const Date = styled.h4`
    margin-bottom: 20px;
    font-family: 'Lora', serif;
    color: #adbe0c;
`
const Desc = styled.p`
    text-align: justify;
    font-family: 'Poppins', sans-serif;
    margin :0px 10px;
    word-wrap: break-word;
    text-indent: 20px;
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
const Box = styled.div`
width: 50%;
    display: flex;
    justify-content: space-between;
`
const Button = styled.button`
    width: 150px;
    align-self: center;
    border: none;
    border-radius: 10px;
    background-color: #${props => props.color};
    color: white;
    padding: 10px;
    margin: 20px;
    cursor: pointer;
    &:hover{
        filter: brightness(150%);
    }
`
const Button1 = styled.button`
    position: absolute;
    top: 84vh;
    left: 74vw;
    z-index: 6;
    width: 150px;
    align-self: center;
    border: none;
    border-radius: 10px;
    background-color: #${props => props.color};
    color: white;
    padding: 10px;
    margin: 20px;
    cursor: pointer;
    &:hover{
        filter: brightness(150%);
    }
    ${mobile({
    top: "116vh",
    left: "60vw",
    width: "100px"
})}
`
const Item = styled.div`
    position: absolute;
    top: 50px;
    left: 90vw;
    color: white;
    cursor: pointer;
    padding: 10px;
    &:hover{
        background-color: #969494;
    }
`

const Post = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState([])
    const { user } = useContext(Context);
    const [errorD, setErrorD] = useState(false);
    const [on, toggle] = useState(false);
    const [zoom, setZoom] = useState(false);
    const PF = "https://blog-kt.herokuapp.com/api/images/"

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axiosInstance.get("/posts/find/" + path)
            setPost(res.data)
        }
        fetchPost()
    }, [path])

    const handleDelete = async () => {
        try {
            await axiosInstance.delete(`/posts/delete/${post._id}`, {
                data: { username: user.name + " " + user.lastName }
            })
            window.location.replace("/posts")
        } catch (err) {
            setErrorD(true)
        }
    }
    const handleUpdated = () => {
        toggle(!on)
    }
    const handleZoom = () => {
        setZoom(!zoom)
    }

    return (
        <Container>
            <SideBar />
            <Wrapper>
                <Title />
                <NonContainer>
                    <Title0>The post</Title0>
                    <MenuItem>
                        <Image src={PF + post.photo} onClick={handleZoom} />
                        <Info>
                            <Author>
                                <ImgContainer>
                                    <Image1 src={PF + post.profilePic} />
                                </ImgContainer>
                                <Name>{post.username}</Name>
                            </Author>
                            <Title1>{post.title}</Title1>
                            <Date>{post.createdAt}</Date>
                            <Desc>{post.desc}</Desc>
                        </Info>
                    </MenuItem>
                    <Box>
                        <Button color="1cc70dcc" onClick={handleUpdated}>
                            Update
                        </Button>
                        <Button color="E60023" onClick={handleDelete}>
                            Delete
                        </Button>
                    </Box>
                    {errorD && (
                        <span
                            style={{ color: "red", textAlign: "center", margin: "10px" }} className="h"
                        >
                            You can't delete this post
                        </span>
                    )}
                    <End>
                        <Logo>KT.COM</Logo>
                    </End>
                </NonContainer>
            </Wrapper>
            {on && <UpdatePost post={post} />}
            {on && <Button1 color="E60023" onClick={handleUpdated}>Cancel</Button1>}
            {zoom && <Img post={post} />}
            {zoom && <Item><Clear onClick={handleZoom} /></Item>}
        </Container>
    )
};

export default Post;
