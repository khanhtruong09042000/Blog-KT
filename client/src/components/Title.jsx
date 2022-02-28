import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("https://images.pexels.com/photos/2397651/pexels-photo-2397651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-size: cover;
`
const Desc = styled.h1`
    font-family: 'Yellowtail', cursive;
`

const Title = () => {
    return (
        <Container>
            <Desc>
                Thiên nhiên kì thú !
            </Desc>
        </Container>
    )
};

export default Title;
