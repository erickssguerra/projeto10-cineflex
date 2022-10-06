import styled from "styled-components"

export default function Header() {
    return (
        <HeaderStyled>
            <h1>CINEFLEX</h1>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: #C3CFD9;
    width: 100%;
    height: 67px;
    align-items: center;
    justify-content: center;
    font-size: 34px;
    color: #E8833A;
    box-shadow: 0px 2px 5px gray;
   
   h1 {
       text-shadow: 1px 3px 0 hsl(200 50% 30%);   
   }
`