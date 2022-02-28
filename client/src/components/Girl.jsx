import styled from "styled-components";
import { Girls } from "../data"
import { mobile } from "../responsive"

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000065;
  z-index: 3;
  opacity: 0;
  transition: all 1.5s ease;
  border-radius: 20px;
`
const Container = styled.div`
    width: 100%;
    height: 100vh;
    border-top: 1px solid #756e6e;
    ${mobile({
   height: "100%"
})}
`
const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0px;
    font-size: 50px;
    color: #504d4d;
    font-family: 'Yellowtail', cursive;
`
const Warrper = styled.div`
    display: flex;
    ${mobile({
  flexDirection: "column"
})}
`
const Slide = styled.div`
    flex: 1;
    width: 30%;
    height: 70vh;
    margin: 7px;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
    ${mobile({
   width: "96%",
   height: "50vh"
})}
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
`
const Desc = styled.h1`
    color: white;
    font-family: 'Lora', serif;
    font-size: 40px;
`

const Girl = () => {
    return (
        <Container>
            <Title>
                Girl Friends
            </Title>
            <Warrper>
                {Girls.map((item) => (
                    <Slide>
                        <Image src={item.img} />
                        <Info>
                            <Desc>
                                {item.desc}
                            </Desc>
                        </Info>
                    </Slide>
                ))}
            </Warrper>
        </Container>
    )
};

export default Girl;
