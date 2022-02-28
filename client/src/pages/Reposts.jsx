import styled from "styled-components";
import SideBar from "../components/SideBar";
import Letter from "../components/Letter";
import Title from "../components/Title";
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
    margin-top: 50px;
    margin-bottom: 63px;
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
    font-size: 5;
`

const Reposts = () => {
    return (
        <Container>
            <SideBar />
            <Wrapper>
                <Title />
                <NonContainer>
                    <Letter />
                </NonContainer>
                <End>
                    <Logo>KT.COM</Logo>
                </End>
            </Wrapper>
        </Container>
    )
};

export default Reposts;
