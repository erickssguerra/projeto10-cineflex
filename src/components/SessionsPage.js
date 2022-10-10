import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components"
import SessionsDetails from "./SessionsDetails";
import Footer from "./Footer"
import axios from "axios";

export default function SessionsPage() {
    const { idMovie } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`);

        promise.then((response) => {
            setItems(response.data)
        })

        promise.catch(err => {
            console.log(err.response.data);
        })

    }, [idMovie]);

    if (items.length === 0 || items === undefined || items === null) {
        return (
            <SessionsPageStyled>
                <img src="http://www.sitiosaocarlos.com.br/imgsite/loading.gif" alt="Carregando..." />
            </SessionsPageStyled>
        )
    }

    return (
        <>
            <SessionsPageStyled>
                <h1>Selecione o horário</h1>
                {items.days.map((item) =>
                    <SessionsDetails
                        data-identifier="session-date"
                        key={item.id}
                        weekday={item.weekday}
                        date={item.date}
                        times={item.showtimes}
                    />)}
            </SessionsPageStyled>
            <Footer title={items.title} poster={items.posterURL} />
        </>
    )
}

const SessionsPageStyled = styled.div`
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