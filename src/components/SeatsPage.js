import styled from "styled-components";
import Footer from "./Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SeatsPage(props) {

    const { setPurchaseDetails } = props
    const { idSession } = useParams();
    const [items, setItems] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([])
    const [selectedSeatNumbers, setSelectedSeatNumbers] = useState([])
    const navigate = useNavigate();
    const [form, setForm] = useState({ ids: "", name: "", cpf: "" })

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`);
        promise.then((response) => {
            setItems(response.data)
        })

        promise.catch(err => {
            console.log(err.response.data);
        })

    }, [idSession]);

    if (items.length === 0 || items === undefined || items === null) {
        return (
            <SeatsPageStyled>
                <img src="http://www.sitiosaocarlos.com.br/imgsite/loading.gif" alt="Carregando..." />
            </SeatsPageStyled>
        )
    }

    function selectSeat(id, name) {
        if (!selectedSeats.includes(id)) {
            const selected = [...selectedSeats, id];
            setSelectedSeats(selected);
            const selectedNumbers = [...selectedSeatNumbers, name];
            setSelectedSeatNumbers(selectedNumbers);
        }
        if (selectedSeats.includes(id)) {
            const selected = selectedSeats.filter(s => s !== id);
            setSelectedSeats(selected);
            const selectedNumbers = selectedSeatNumbers.filter(b => b !== name);
            setSelectedSeatNumbers(selectedNumbers);
        }
    }

    function inputControl(event) {
        setForm({
            ...form, [event.target.name]: event.target.value
        })
    }

    function bookSeats(e) {
        const data = {
            movieTitle: items.movie.title,
            day: items.day.date,
            time: items.name,
            seats: selectedSeatNumbers,
            buyer: form.name,
            cpf: form.cpf
        }
        setPurchaseDetails(data);

        e.preventDefault();
        if (selectedSeats.length === 0) {
            alert("Selecione um assento!")
            return
        }

        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", { ...form, ids: selectedSeats })

        promise.then(() => {
            navigate("/sucesso/")
        })
        promise.catch(err => console.log(err.response.data));
    }

    return (
        <>
            <SeatsPageStyled>
                <h1>Selecione o(s) assento(s)</h1>

                <ContainerSeats data-identifier="seat">
                    {items.seats.map((seat) =>
                        seat.isAvailable ?
                            selectedSeats.includes(seat.id) ?
                                <SelectedSeat onClick={() => selectSeat(seat.id, seat.name)} key={seat.id}>
                                    {seat.name}
                                </SelectedSeat>
                                :
                                <AvailableSeat onClick={() => selectSeat(seat.id, seat.name)} key={seat.id}>
                                    {seat.name}
                                </AvailableSeat>
                            :
                            <UnavailableSeat onClick={() => alert("Assento ocupado!")} key={seat.id}>
                                {seat.name}
                            </UnavailableSeat>
                    )}
                </ContainerSeats>

                <ContainerLegend>
                    <div><AvailableSeat data-identifier="seat-available-subtitle" /><p>Disponível</p></div>
                    <div><SelectedSeat data-identifier="seat-selected-subtitle" /><p>Selecionado</p></div>
                    <div><UnavailableSeat data-identifier="seat-unavailable-subtitle" /><p>Ocupado</p></div>
                </ContainerLegend>

                <ContainerBuyer onSubmit={bookSeats}>
                    <p>Nome do comprador:</p>
                    <input
                        type="text"
                        placeholder="Digite seu nome..."
                        onChange={inputControl}
                        value={form.name}
                        required
                        name="name"
                        data-identifier="buyer-name-input"
                    />
                    <p>CPF do comprador:</p>
                    <input
                        type="text"
                        placeholder="Digite seu CPF..."
                        onChange={inputControl}
                        value={form.cpf}
                        pattern="\d{3}.?\d{3}.?\d{3}-?\d{2}"
                        maxLength="11"
                        required
                        name="cpf"
                        data-identifier="buyer-cpf-input"
                    />
                    <div>
                        <ReservationButton data-identifier="reservation-btn" type="submit">Reservar Assento(s)</ReservationButton>
                    </div>
                </ContainerBuyer>

            </SeatsPageStyled>

            <Footer title={items.movie.title} poster={items.movie.posterURL} hour={items.name} />
        </>
    )
}

const SeatsPageStyled = styled.div`
    
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
`

const ContainerSeats = styled.div`
    display: flex;
    gap: 10px;
    width: 370px;
    height: 200px;
    flex-wrap: wrap;
    justify-content: center;

    button {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        font-size: 11px;
        margin-bottom: 10px;
        cursor: pointer; 
    }

`

const AvailableSeat = styled.button`
        border: 1px solid #808F9D;
        background-color: #C3CFD9; 
`

const SelectedSeat = styled.button`
        border: 1px solid #0E7D71;
        background-color: #1AAE9E;
`

const UnavailableSeat = styled.button`
        border: 1px solid #F7C52B;
        background-color: #FBE192;
`

const ContainerLegend = styled.div`
    width: 100%;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 30px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    p {
        font-size: 13px;
        margin-top: 3px;
    }

    button{
        width: 23px;
        height: 23px;
        border-radius: 50%;
        font-size: 11px;
    }
`

const ContainerBuyer = styled.form`
display: flex;
flex-direction: column;
width: 370px;
margin-top: 15px;
padding-left: 20px;
font-size: 16px;

p{
    margin-bottom: 5px;
  
}

input {
    font-size: 16px;
    border-radius: 3px;
    border: 1px solid #D4D4D4 ;
    margin-bottom: 15px; 
    height: 40px;
    width: 90%;

    &::placeholder {
        font-style: italic;
    }
}

div {
    display: flex;
    justify-content: center;
}
`

const ReservationButton = styled.button`
    background-color: #E8833A;
    color: white;
    border-radius: 3px;
    border: none;
    height: 40px;
    width: 225px;
    font-size: 16px;
    cursor: pointer;
`