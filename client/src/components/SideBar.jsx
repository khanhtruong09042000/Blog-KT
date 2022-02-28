import styled from "styled-components";
import { BorderColor, Email, Home, Settings, SettingsPower, Visibility } from "@material-ui/icons"
import { Link } from "react-router-dom"
import { useContext } from 'react'
import { Context } from "../context/Context";
import logo1 from "../images/logo1.png"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 250px;
    height: 100%;
    background-color: #0d74f5;
    top: 0;
    left: 0;
    padding: 20px 30px;
    position: fixed;
    ${mobile({
    width: "5%"
})}
`
const Logo = styled.div`
    border-bottom: 2px solid #a8a8b1;
    ${mobile({
    width: "100%",
})}
`
const Top = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0px;
    border-bottom: 2px solid #a8a8b1;
    ${mobile({
    flexDirection: "column"
})}
`
const ImgContainer = styled.div`
    margin: 0px 10px;
`
const Image = styled.img`
     width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
`
const Name = styled.h3`
    font-family: 'Lora', serif;
    color: white;
    ${mobile({
    fontSize: "15px"
})}
`
const Bottom = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`
const Title = styled.h2`
    font-size: 30px;
    font-family: 'Poppins', sans-serif;
    color: #e4dcdc;
    ${mobile({
    display: "none"
})}
`
const List = styled.div`

`
const Icon = styled.div`
    margin-right: 10px;
    ${mobile({
    marginLeft: "3px"
})}
`
const ListItem = styled.h3`
    display: flex;
    color: #fff;
    padding: 10px 17px;
    font-family: 'Poppins', sans-serif;
    align-items: center;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
    ${mobile({
    padding: "5px 0px",
})}
`
const Desc = styled.h3`
    ${mobile({
    display: "none"
})}
`
const Logout = styled.h2`
    margin-top: 15px;
    border-radius:10px;
    padding: 6px 0px;
    cursor: pointer;
    background-color: white;
    &:hover{
        background-color: #cac7c7;
    }
`
const Item = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    color: black;
    letter-spacing: 5px;
    ${mobile({
    marginLeft: "5px"
})}
`
const Desc1 = styled.h4`
${mobile({
    display: "none"
})}
`
const Images = styled.img`
  width: 90%;
  ${mobile({
    width: "170%"
})}
`

const SideBar = () => {
    const { user, dispatch } = useContext(Context)
    const PF = "https://blog-kt.herokuapp.com/api/images/"

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        window.location.replace("/login")
    };

    return (
        <Container>
            <Logo><Images src={logo1} /></Logo>
            <Top>
                <ImgContainer>
                    <Image src={PF + user.profilePic} />
                </ImgContainer>
                <Name>{user.name + " " + user.lastName}</Name>
            </Top>
            <Bottom>
                <Title>THE FUNCTIONS</Title>
                <List>
                    <Link to="/home" className="link">
                        <ListItem>
                            <Icon><Home /></Icon>
                            <Desc>Home</Desc>
                        </ListItem>
                    </Link>
                    <Link to="/posts" className="link">
                        <ListItem>
                            <Icon><Visibility /></Icon>
                            <Desc>View posts</Desc>
                        </ListItem>
                    </Link>
                    <Link to="/write" className="link">
                        <ListItem>
                            <Icon><BorderColor /></Icon>
                            <Desc>Write post</Desc>
                        </ListItem>
                    </Link>
                    <Link to="/reports" className="link">
                        <ListItem>
                            <Icon><Email /></Icon>
                            <Desc>Reports</Desc>
                        </ListItem>
                    </Link>
                    <Link to="/settings" className="link">
                        <ListItem>
                            <Icon><Settings /></Icon>
                            <Desc>Settings</Desc>
                        </ListItem>
                    </Link>
                </List>
                <Logout onClick={handleLogout}>
                    {user &&
                        <Item >
                            <Icon><SettingsPower /></Icon>
                            <Desc1>LOGOUT</Desc1>
                        </Item>
                    }
                </Logout>
            </Bottom>
        </Container>
    )
};

export default SideBar;
