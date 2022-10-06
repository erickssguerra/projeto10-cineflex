import styled from "styled-components"

export default function SuccessScreen() {
    return (
        <SuccessScreenStyled>
            <h1>Pedido feito com sucesso!</h1>
            <h2>Filme e sessão</h2>
            <TextoStyled>
                <p>Enola Holmes</p>
                <p>24/06/2021 - 15:00</p>
            </TextoStyled>

            <h2>Ingressos</h2>
            <TextoStyled>
                <p>Assento 15</p>
                <p>Assento 16</p>
            </TextoStyled>
            <h2>Comprador</h2>
            <TextoStyled>
                <p>Nome: João da Silva</p>
                <p>CPF: 123.456.789-10</p>
            </TextoStyled>
            <ContainerBotaoAmarelo>
                <BotaoAmarelo>Voltar pra Home</BotaoAmarelo>
            </ContainerBotaoAmarelo>


        </SuccessScreenStyled>
    )

}

const SuccessScreenStyled = styled.div`
    padding-top: 80px;
    padding-bottom: 110px;
    width: 375px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    
    h1{
        font-size: 18px;
        line-height: 22px;
        margin: 15px auto;
        color: #293845;
        width: 120px;
        color: #247A6B;
        font-weight: 700;
        text-align: center;
    }

    h2 {
        font-size: 18px;
        font-weight: 700;
        color: #293845;
        margin-bottom: 6px;
    }

  
`

const TextoStyled = styled.div`
    margin-bottom: 30px;

    p {
        line-height: 20px;
    }

`

const ContainerBotaoAmarelo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
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