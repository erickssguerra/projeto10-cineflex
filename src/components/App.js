import GlobalStyle from "../assets/GlobalStyle";
import Header from "./Header";
import MovieScreen from "./MoviesScreen";
import SeatsScreen from "./SeatsScreen";
import SessionsScreen from "./SessionsScreen";
import SuccessScreen from "./SuccessScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {

    return (
        <div>
            <BrowserRouter>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route path="/" element={<MovieScreen />} />
                    <Route path="/sessoes/:idFilme" element={<SessionsScreen />} />
                    <Route path="/assentos/:idSessao" element={<SeatsScreen />} />
                    <Route path="/sucesso/" element={<SuccessScreen />} />
                </Routes>

            </BrowserRouter>
        </div>)
}