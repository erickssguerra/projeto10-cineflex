import styled from "styled-components";
import Footer from "./Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SeatsScreen(props) {

    const { setObjeto } = props
    const { idSessao } = useParams();
    const [items, setItems] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([])
    const [seatNumber, setSeatNumber] = useState([])
    const navigate = useNavigate();
    const [form, setForm] = useState({ ids: "", name: "", cpf: "" })

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then((resposta) => {
            setItems(resposta.data)
        })

        promise.catch(erro => {
            console.log(erro.response.data);
        })

    }, [idSessao]);

    if (items.length === 0 || items === undefined || items === null) {
        return (
            <SeatsScreenStyled>
                <img src="http://www.sitiosaocarlos.com.br/imgsite/loading.gif" alt="Carregando..." />
            </SeatsScreenStyled>
        )
    }

    function selectSeat(id, name) {
        if (!selectedSeats.includes(id)) {
            const selected = [...selectedSeats, id];
            setSelectedSeats(selected);
            const selectedNumber = [...seatNumber, name];
            setSeatNumber(selectedNumber);
        }
        if (selectedSeats.includes(id)) {
            const selected = selectedSeats.filter(s => s !== id);
            setSelectedSeats(selected);
            const selectedNumber = seatNumber.filter(b => b !== name);
            setSeatNumber(selectedNumber);
        }
    }

    function inputControl(event) {
        setForm({
            ...form, [event.target.name]: event.target.value
        })
    }

    function reservar(e) {
        console.log()
        const data = { titulo: items.movie.title, dia: items.day.weekday, hora: items.name, assentos: seatNumber, nome: form.name, cpf: form.cpf }
        setObjeto(data);

        e.preventDefault();
        if (selectedSeats.length === 0) {
            alert("Selecione um assento!")
            return
        }

        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", { ...form, ids: selectedSeats })

        promise.then(response => {
            navigate("/sucesso/")
        })
        promise.catch(err => console.log(err.response.data));
    }

    console.log(selectedSeats);
    return (
        <>
            <SeatsScreenStyled>
                <h1>Selecione o(s) assento(s)</h1>

                <ContainerAssentos>
                    {items.seats.map((seat) =>
                        seat.isAvailable ?
                            selectedSeats.includes(seat.id) ?
                                <AssentoSelecionado onClick={() => selectSeat(seat.id, seat.name)} key={seat.id}>
                                    {seat.name}
                                </AssentoSelecionado>
                                :
                                <AssentoLivre onClick={() => selectSeat(seat.id, seat.name)} key={seat.id}>
                                    {seat.name}
                                </AssentoLivre>

                            :
                            <AssentoOcupado onClick={() => alert("Assento ocupado!")} key={seat.id}>
                                {seat.name}
                            </AssentoOcupado>
                    )}
                </ContainerAssentos>

                <ContainerLegenda>
                    <div><AssentoLivre /><p>Disponível</p></div>
                    <div><AssentoSelecionado /><p>Selecionado</p></div>
                    <div><AssentoOcupado /><p>Ocupado</p></div>
                </ContainerLegenda>

                <ContainerComprador onSubmit={reservar}>
                    <p>Nome do comprador:</p>
                    <input
                        type="text"
                        placeholder="Digite seu nome..."
                        onChange={inputControl}
                        value={form.name}
                        required
                        name="name"
                    />
                    <p>CPF do comprador:</p>
                    <input
                        type="text"
                        placeholder="Digite seu nome..."
                        onChange={inputControl}
                        value={form.cpf}
                        pattern="\d{3}.?\d{3}.?\d{3}-?\d{2}"
                        maxLength="11"
                        required
                        name="cpf"
                    />
                    <div>
                        <BotaoAmarelo type="submit">Reservar Assento(s)</BotaoAmarelo>
                    </div>
                </ContainerComprador>

            </SeatsScreenStyled>

            <Footer titulo={items.movie.title} imagem={items.movie.posterURL} horario={items.name} />
        </>
    )
}

const SeatsScreenStyled = styled.div`
    
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

const ContainerAssentos = styled.div`
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

const AssentoLivre = styled.button`

        border: 1px solid #808F9D;
        background-color: #C3CFD9; 
              
        
`

const AssentoSelecionado = styled.button`
    
        border: 1px solid #0E7D71;
        background-color: #1AAE9E;

`

const AssentoOcupado = styled.button`
        
        border: 1px solid #F7C52B;
        background-color: #FBE192;
      

`

const ContainerLegenda = styled.div`
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

const ContainerComprador = styled.form`
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

const BotaoAmarelo = styled.button`
    background-color: #E8833A;
    color: white;
    border-radius: 3px;
    border: none;
    height: 40px;
    width: 225px;
    font-size: 16px;
    cursor: pointer;
`