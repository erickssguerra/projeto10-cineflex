import styled from "styled-components"
import { Link } from "react-router-dom"

export default function SessionsDetails(props) {
    const { weekday, date, times } = props

    return (
        <SessionDetailsStyled>
            <h2>{weekday} - {date}</h2>
            <div>
                {times.map((time) =>
                    <Link key={time.id} to={`/assentos/${time.id}`}>
                        <SessionDetailsButton data-identifier="hour-minute-btn" >
                            {time.name}
                        </SessionDetailsButton>
                    </Link>)}
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
   
`
const SessionDetailsButton = styled.button`
        cursor: pointer;
        color: white;
        font-size: 16px;
        width: 83px;
        height: 33px;
        border-radius: 3px;
        border: none;
        margin-right: 10px;
        margin-top: 10px;
        background: #E8833A;
        &:hover{
            filter: brightness(1.2)
        }
`