import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import NavbarLogin from "../components/NavbarLogin";
import Title from "../components/Title";
import { mobile } from "../responsive"

const Container = styled.div`
    
`
const Wrapper = styled.div`
    width: 100%;
    height: 75vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`
const Title1 = styled.h1`
     font-family: 'Explora', cursive;
     font-size: 80px;
     letter-spacing: 5px;
     margin: 20px;
`
const Menu = styled.div`
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    ${mobile({
    width: "100%"
})}
`
const Item = styled.div`
     color: white;
    font-family: 'Lora', serif;
    font-size: 30px;
    letter-spacing: 5px;
    cursor: pointer;
`
const MenuItem = styled.div`
    width: 45%;
    height: 120px;
    background-color: #${props => props.color};
    margin: 20px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    &:hover{
        filter: brightness(200%);
    }
`

const HomePages = () => {
    return (
        <Container>
            <Title />
            <NavbarLogin />
            <Wrapper>
                <Title1>The funtions</Title1>
                <Menu>
                    <MenuItem color="55ACEE">
                        <Link to="/write" className="link">
                            <Item >Write post</Item>
                        </Link>
                    </MenuItem>
                    <MenuItem color="1cc70dcc">
                        <Link to="/posts" className="link">
                            <Item >View posts</Item>
                        </Link>
                    </MenuItem>
                    <MenuItem color="E60023">
                        <Link to="/reports" className="link">
                            <Item >Reports</Item>
                        </Link>
                    </MenuItem>
                    <MenuItem color="d84519d7">
                        <Link to="/settings" className="link">
                            <Item >Settings</Item>
                        </Link>
                    </MenuItem>
                </Menu>
            </Wrapper>
            <Footer />
        </Container>
    )
};

export default HomePages;
