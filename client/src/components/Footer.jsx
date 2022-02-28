import styled from "styled-components";
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter, LinkedIn, Android, AddLocation, CloudCircle } from "@material-ui/icons";
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100%;
    height: 55vh;
    display: flex;
    background-image: linear-gradient(50deg,#abc70dcc 50%,#d84519d7);
    ${mobile({
    flexDirection: "column",
    height: "100%",
    marginTop: "20px"
})}
`
const Left = styled.div`
    flex: 1;
    text-align: center;
`
const Title = styled.h1`
    margin: 20px 0px 20px 20px;
    font-family: 'Yellowtail', cursive;
    border-bottom: 1px solid #756e6e;
    font-size: 50px;
    color: white;
    letter-spacing: 5px;
`
const DescContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const List = styled.div`
    width: 45%;
    display: flex;
    align-items: center;
    padding-left: 5px;
    margin: 10px 10px;
    background-color: #00eeff86;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        filter: brightness(200%);
    }
    ${mobile({
    width: "60%"
})}
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Desc = styled.h4`
    font-family: 'Source Serif 4', sans-serif;
    font-size: 15px;
    color: white;
    ${mobile({
    fontSize: "10px"
})}
`
const Right = styled.div`
    flex: 1;
    text-align: center;
`
const SocialContainer = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    left: 0;
    right: 0;
    margin: auto;
    ${mobile({
    justifyContent: "center"
})}
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Title>ABOUT US</Title>
                <DescContainer>
                    <List>
                        <Icon color="3B5999">
                            <Phone />
                        </Icon>
                        <Desc>
                            0866918529
                        </Desc>
                    </List>
                    <List>
                        <Icon color="E4405F">
                            <MailOutline />
                        </Icon>
                        <Desc>
                            Khanh09042000@gmail.com
                        </Desc>
                    </List>
                    <List>
                        <Icon color="55ACEE">
                            <Room />
                        </Icon>
                        <Desc>
                            Tan Hoa, Hung Ha, Thai Binh
                        </Desc>
                    </List>
                </DescContainer>
            </Left>
            <Right>
                <Title>CONTACT</Title>
                <SocialContainer>
                    <List>
                        <SocialIcon color="3B5999">
                            <Facebook />
                        </SocialIcon>
                        <Desc>
                            Facebook
                        </Desc>
                    </List>
                    <List>
                        <SocialIcon color="E60023">
                            <Instagram />
                        </SocialIcon>
                        <Desc>
                            Instagram
                        </Desc>
                    </List>
                    <List>
                        <SocialIcon color="abc70dcc">
                            <Pinterest />
                        </SocialIcon>
                        <Desc>
                            Pinterest
                        </Desc>
                    </List>
                    <List>
                        <SocialIcon color="d84519d7">
                            <Twitter />
                        </SocialIcon>
                        <Desc>
                            Twitter
                        </Desc>
                    </List>
                    <List>
                        <SocialIcon color="d819ced7">
                            <LinkedIn />
                        </SocialIcon>
                        <Desc>
                            LinkedIn
                        </Desc>
                    </List>
                    <List>
                        <SocialIcon color="1cc70dcc">
                            <Android />
                        </SocialIcon>
                        <Desc>
                            Android
                        </Desc>
                    </List>
                    <List>
                        <SocialIcon color="E4405F">
                            <AddLocation />
                        </SocialIcon>
                        <Desc>
                            Location
                        </Desc>
                    </List>
                    <List>
                        <SocialIcon color="55ACEE">
                            <CloudCircle />
                        </SocialIcon>
                        <Desc>
                            Cloud
                        </Desc>
                    </List>
                </SocialContainer>
            </Right>
        </Container>
    )
};

export default Footer;

