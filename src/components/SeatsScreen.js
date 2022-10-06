import styled from "styled-components"
import Footer from "./Footer"

export default function SeatsScreen() {

    return (
        <> <SeatsScreenStyled>
            <h1>Selecione o(s) assento(s)</h1>
            <ContainerAssentos>
                <AssentoLivre>01</AssentoLivre>
                <AssentoSelecionado>02</AssentoSelecionado>
                <AssentoOcupado>03</AssentoOcupado>
            </ContainerAssentos>
            <ContainerLegenda>
                <div><AssentoLivre /><p>Disponível</p></div>
                <div><AssentoSelecionado /><p>Selecionado</p></div>
                <div><AssentoOcupado /><p>Ocupado</p></div>
            </ContainerLegenda>
            <ContainerComprador>
                <p>Nome do comprador:</p>
                <input placeholder="Digite seu nome..." />
                <p>CPF do comprador:</p>
                <input placeholder="Digite seu nome..." />
            </ContainerComprador>
            <BotaoAmarelo>Reservar Assento(s)</BotaoAmarelo>
        </SeatsScreenStyled>
            <Footer />
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

const ContainerComprador = styled.div`
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
        margin-left: 10px;
        
    }
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
`