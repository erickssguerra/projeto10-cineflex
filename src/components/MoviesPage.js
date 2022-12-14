import styled from "styled-components"
import MovieCard from "./MovieCard"
import { useState, useEffect } from "react"
import axios from "axios"


export default function MoviePage() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then((response) => {
            setItems(response.data)
        })

        promise.catch(err => {
            console.log(err.response.data);
        })

    }, []);

    if (items.length === 0 || items === undefined || items === null) {
        return (
            <MoviePageStyled>
                <img src="http://www.sitiosaocarlos.com.br/imgsite/loading.gif" alt="Carregando..." />
            </MoviePageStyled>
        )
    }

    return (
        <MoviePageStyled>
            <h1>Selecione o filme</h1>
            <ul>
                {items.map((item) => < MovieCard
                    data-identifier="movie-outdoor"
                    key={item.id}
                    idMovie={item.id}
                    poster={item.posterURL}
                    title={item.title}
                />)}
            </ul>
        </MoviePageStyled>
    )
}

const MoviePageStyled = styled.div`
    
    padding-top: 80px;
    padding-bottom: 20px;
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
        
        &:hover {
            transition: all .5s;
            background-color:#C3CFD9 ;
        }
    }

    img {
      width: 129px;
      border-radius: 3px;

      &:hover {
            transition: all .5s;
            filter: brightness(1.2);
        }

      &:active{
            transform: scale(1.1);
        }
    }

`