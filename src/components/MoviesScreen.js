import movie from "../assets/images/movie-example.png"
import styled from "styled-components"


export default function MovieScreen() {

    return (
        <MovieScreenStyled>
            <h1>Selecione o filme</h1>
            <ul>
                <li><img src={movie} alt="filme" /></li>
                <li><img src={movie} alt="filme" /></li>
                <li><img src={movie} alt="filme" /></li>
                <li><img src={movie} alt="filme" /></li>
                <li><img src={movie} alt="filme" /></li>
                <li><img src={movie} alt="filme" /></li>
                <li><img src={movie} alt="filme" /></li>
                <li><img src={movie} alt="filme" /></li>
            </ul>
        </MovieScreenStyled>
    )
}

const MovieScreenStyled = styled.div`
    
    padding-top: 80px;
    padding-bottom: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
   
    
    h1{
        font-size: 18px;
        margin: 15px auto;
        color: #293845;
    }

    ul {
        display: flex;
        gap: 25px;
        max-width: 375px;
        margin: 0 auto;
        flex-wrap: wrap;
        justify-content: center;
    }

    li {
        width: 145px;
        height: 209px;
        background-color: white;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
    }

    img {
      width: 129px;
    }

`