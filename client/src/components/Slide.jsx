import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { SlideItems } from "../data"
import { useState } from 'react';
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    position: relative;
    overflow: hidden;
    ${mobile({
    height: "50vh"
})}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #d4d1d1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    z-index: 2;
    cursor: pointer;
    ${mobile({
    width: "30px",
    height: "30px"
})}
`
const Warpper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`
const Slide1 = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
`
const ImgContainer = styled.div`
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    ${mobile({
    width: "95%"
})}
`
const Image = styled.img`
    width: 40%;
    margin: 5px;
    border-radius: 10px;
    cursor: pointer;
`
const Coment = styled.h1`
    font-family: 'Comforter', cursive;
`

const Slide = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
        } else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Warpper slideIndex={slideIndex}>
                {SlideItems.map((item) => (
                    <Slide1>
                        <ImgContainer>
                            <Image src={item.img1} />
                            <Image src={item.img2} />
                            <Image src={item.img3} />
                            <Image src={item.img4} />
                        </ImgContainer>
                        <Coment>
                            {item.coment}
                        </Coment>
                    </Slide1>
                ))}
            </Warpper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
};

export default Slide;
