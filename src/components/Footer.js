import styled from "styled-components"
import movie from "../assets/images/movie-example.png"

export default function Footer() {

    return (
        <FooterStyled>
            <FooterContainer><div><img src={movie} alt="filme" /></div>
                <MovieDetailsStyled>
                    <h1>Enola Holmes</h1>
                    <h1>Quinta-feira - 15:00</h1>
                </MovieDetailsStyled>
            </FooterContainer>
        </FooterStyled>
    )
}

const FooterStyled = styled.div`

    display: flex;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #C3CFD9;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: flex-start;
    font-size: 34px;
    color: #E8833A;
    box-shadow: 0px 2px 5px gray; 

`
const MovieDetailsStyled = styled.nav`

    font-size: 16px;
    font-weight: 700;
    color: #293845;
    line-height: 19px;
    margin-left: 10px;

`
const FooterContainer = styled.div`
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    width: 375px;
   
    div {
        background-color: white;
        margin-left: 10px;
        width: 58px;
        height: 83px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    }
    img {
        width: 48px;
    }
`