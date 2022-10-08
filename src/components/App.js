import GlobalStyle from "../assets/GlobalStyle";
import Header from "./Header";
import MovieScreen from "./MoviesScreen";
import SeatsScreen from "./SeatsScreen";
import SessionsScreen from "./SessionsScreen";
import SuccessScreen from "./SuccessScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


export default function App() {

    const [objeto, setObjeto] = useState(false)


    return (
        <div>
            <BrowserRouter>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route path="/" element={<MovieScreen />} />
                    <Route path="/sessoes/:idFilme" element={<SessionsScreen />} />
                    <Route path="/assentos/:idSessao" element={<SeatsScreen setObjeto={setObjeto} />} />
                    <Route path="/sucesso/" element={<SuccessScreen objeto={objeto} />} />
                </Routes>

            </BrowserRouter>
        </div>)
}