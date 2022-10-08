import { Link } from "react-router-dom"
import styled from "styled-components"

export default function SuccessScreen(props) {
    const { objeto } = props;
    console.log(objeto);

    if (!objeto) {
        return (
            <SuccessScreenStyled>
                <h2>Você não selecionou nenhum filme!</h2>
                <ContainerBotaoAmarelo>
                    <Link to="/"><BotaoAmarelo>Voltar pra Home</BotaoAmarelo></Link>
                </ContainerBotaoAmarelo>
            </SuccessScreenStyled>
        )
    }

    const cpfEstilizado = objeto.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
        function (regex, argumento1, argumento2, argumento3, argumento4) {
            return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
        })

    return (
        <SuccessScreenStyled>
            <h1>Pedido feito com sucesso!</h1>
            <h2>Filme e sessão</h2>
            <TextoStyled>
                <p>{objeto.titulo}</p>
                <p>{objeto.dia} - {objeto.hora}</p>
            </TextoStyled>

            <h2>Ingressos</h2>
            <TextoStyled>
                {objeto.assentos.map(a => <p>Assento {a}</p>)}
            </TextoStyled>
            <h2>Comprador</h2>
            <TextoStyled>
                <p>Nome: {objeto.nome}</p>
                <p>CPF: {cpfEstilizado}</p>
            </TextoStyled>
            <ContainerBotaoAmarelo>
                <Link to="/"><BotaoAmarelo>Voltar pra Home</BotaoAmarelo></Link>
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
    cursor: pointer;

    &:hover {

    }
`