import { Link } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../components/SideBar";
import Title from "../components/Title";
import {axiosInstance} from "../config"
import { useEffect, useState } from "react";
import { mobile } from "../responsive"

const Container = styled.div`
     width: 100%;
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
    text-align: center;
`
const Title0 = styled.h1`
    margin: 20px 0px;
    font-family: 'Explora', cursive;
    font-size: 50px;
    letter-spacing: 5px;
`
const Menu = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Detail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 95%;
  display: flex;
  padding-top: 20px;
  justify-content: center;
  background-color: #00000065;
  z-index: 3;
  opacity: 0;
  transition: all 1.5s ease;
`
const MenuItem = styled.div`
    width: 48.2%;
    height: 75vh;
    margin-right: 15px;
    margin-bottom: 20px;
    border-bottom: 1px solid #756e6e;
    background-color: white;
    transition: all 1.5s ease;
    position: relative;
    &:hover ${Detail}{
        opacity: 1;
        border-radius: 10px;
    }
    ${mobile({
    width: "100%"
})}
`
const Image = styled.img`
    width: 100%;
    height: 30vh;
    border-radius: 10px;
    object-fit: cover;
`
const Author = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
`
const ImgContainer = styled.div`
   margin-right: 10px;
`
const Image1 = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`
const Name = styled.h3`
    font-family: 'Lora', serif;
`
const Title1 = styled.h2`
height: 35px;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
`
const Date = styled.h4`
    margin-bottom: 10px;
    font-family: 'Lora', serif;
    color: #adbe0c;
`
const Desc = styled.p`
    height: 22vh;
    text-align: justify;
    font-family: 'Poppins', sans-serif;
    margin :0px 10px 10px 10px;
    overflow-wrap: break-word;
    overflow:hidden ;
    text-indent: 20px;
`
const Desc1 = styled.h1`
     color: white;
    font-family: 'Lora', serif;
    font-size: 60px;
    cursor: pointer;
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

const Posts = () => {
    const [posts, setPosts] = useState([])
    const PF = "https://blog-kt.herokuapp.com/api/images/"

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axiosInstance.get("/posts/find")
            setPosts(res.data)
        }
        fetchPosts() 
    }, [])

    return (
        <Container>
            <SideBar />
            <Wrapper>
                <Title />
                <NonContainer>
                    <Title0>The posts</Title0>
                    <Menu>
                        {posts.map((p) => (
                            <MenuItem>
                                {< Image src={PF + p.photo} />}
                                <Author>
                                    <ImgContainer>
                                        <Image1 src={PF + p.profilePic} />
                                    </ImgContainer>
                                    <Name>{p.username}</Name>
                                </Author>
                                <Title1>{p.title}</Title1>
                                <Date>{p.createdAt}</Date>
                                <Desc>{p.desc}</Desc>
                                <Detail>
                                    <Link to={`/post/${p._id}`} className="link">
                                        <Desc1>Let's go !</Desc1>
                                    </Link>
                                </Detail>
                            </MenuItem>
                        ))}
                    </Menu>
                    <End>
                        <Logo>KT.COM</Logo>
                    </End>
                </NonContainer>
            </Wrapper>
        </Container>
    )
};

export default Posts;
