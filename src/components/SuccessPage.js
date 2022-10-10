import { Link } from "react-router-dom"
import styled from "styled-components"

export default function SuccessPage(props) {
    const { purchaseDetails } = props;

    if (!purchaseDetails) {
        return (
            <SuccessPageStyled>
                <h3>Você não selecionou nenhum filme!</h3>
                <ContainerHomeButton>
                    <Link to="/">
                        <HomeButton data-identifier="back-to-home-btn">
                            Voltar pra Home
                        </HomeButton>
                    </Link>
                </ContainerHomeButton>
            </SuccessPageStyled>
        )
    }

    const cpfRegex = purchaseDetails.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
        function (regex, string1, string2, string3, string4) {
            return string1 + '.' + string2 + '.' + string3 + '-' + string4;
        })

    return (
        <SuccessPageStyled>
            <h1>Pedido feito com sucesso!</h1>
            <h2>Filme e sessão</h2>
            <PurchaseDetailsStyled data-identifier="movie-session-infos-reserve-finished">
                <p>{purchaseDetails.movieTitle}</p>
                <p>{purchaseDetails.day} - {purchaseDetails.time}</p>
            </PurchaseDetailsStyled>

            <h2>Ingressos</h2>
            <PurchaseDetailsStyled data-identifier="seat-infos-reserve-finished">
                {purchaseDetails.seats.map((a, i) => <p key={i}>Assento {a}</p>)}
            </PurchaseDetailsStyled>
            <h2>Comprador</h2>
            <PurchaseDetailsStyled data-identifier="buyer-infos-reserve-finished">
                <p>Nome: {purchaseDetails.buyer}</p>
                <p>CPF: {cpfRegex}</p>
            </PurchaseDetailsStyled>
            <ContainerHomeButton>
                <Link to="/">
                    <HomeButton data-identifier="back-to-home-btn" >
                        Voltar pra Home
                    </HomeButton>
                </Link>
            </ContainerHomeButton>

        </SuccessPageStyled>
    )
}

const SuccessPageStyled = styled.div`
    padding-top: 80px;
    padding-bottom: 110px;
    padding-left: 20px;
    padding-right: 20px;
    width: 320px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    
    h1{
        font-size: 18px;
        line-height: 22px;
        margin: 15px auto;
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

    h3 {
        font-size: 18px;
        line-height: 22px;
        margin: 15px auto;
        color: #293845;
        width: 120px;
        font-weight: 700;
        text-align: center;
    }
`
const PurchaseDetailsStyled = styled.div`
    margin-bottom: 30px;

    p {
        line-height: 20px;
    }

`
const ContainerHomeButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
`
const HomeButton = styled.button`
    background-color: #E8833A;
    color: white;
    border-radius: 3px;
    border: none;
    height: 40px;
    width: 225px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        filter: brightness(1.2);
    }
`