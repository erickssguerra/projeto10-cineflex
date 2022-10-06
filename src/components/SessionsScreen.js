import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Footer from "./Footer"
import axios from "axios";



export default function SessionsScreen() {
    const { idFilme } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promise = axios.get(
            `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        promise.then((resposta) => {
            setItems(resposta.data)
        })

        promise.catch(erro => {
            console.log(erro.response.data);
        })

    }, [idFilme]);

    if (items.length === 0 || items === undefined || items === null) {
        return (<SessionsScreenStyled><img src="http://www.sitiosaocarlos.com.br/imgsite/loading.gif" alt="carregando..." /></SessionsScreenStyled>)
    }

    return (
        <><SessionsScreenStyled>
            <h1>Selecione o horário</h1>
            <SessionsDetails />
            <SessionsDetails />
            <SessionsDetails />
            <SessionsDetails />
            <SessionsDetails />
            <SessionsDetails />
            <SessionsDetails />
        </SessionsScreenStyled>
            <Footer />
        </>
    )
}

function SessionsDetails() {
    return (
        <SessionDetailsStyled>
            <h2>Quinta-feira - 24/06/2021</h2>
            <div>
                <button>15:00</button>
                <button>19:00</button>
            </div>
        </SessionDetailsStyled>
    )
}

const SessionDetailsStyled = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    margin-bottom: 35px;
  
   h2 {
        font-size: 18px;
        color: #293845;
   }
   button {
        color: white;
        font-size: 16px;
        width: 83px;
        height: 33px;
        border-radius: 3px;
        border: none;
        margin-right: 10px;
        margin-top: 10px;
        background: #E8833A;
   }
`


const SessionsScreenStyled = styled.div`
    padding-top: 80px;
    padding-bottom: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 330px;    
    
    h1{
        font-size: 18px;
        margin: 15px auto;
        color: #293845;
    }


`