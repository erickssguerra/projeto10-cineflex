import GlobalStyle from "../assets/GlobalStyle";
import Header from "./Header";
import MoviePage from "./MoviesPage";
import SeatsPage from "./SeatsPage";
import SessionsPage from "./SessionsPage";
import SuccessPage from "./SuccessPage";
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
                    <Route path="/" element={<MoviePage />} />
                    <Route path="/sessoes/:idFilme" element={<SessionsPage />} />
                    <Route path="/assentos/:idSessao" element={<SeatsPage setObjeto={setObjeto} />} />
                    <Route path="/sucesso/" element={<SuccessPage objeto={objeto} />} />
                </Routes>

            </BrowserRouter>
        </div>)
}