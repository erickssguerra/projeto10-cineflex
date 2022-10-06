import GlobalStyle from "../assets/GlobalStyle";
import Footer from "./Footer";
import Header from "./Header";
import MovieScreen from "./MoviesScreen";
import SeatsScreen from "./SeatsScreen";
import SessionsScreen from "./SessionsScreen";
import SuccessScreen from "./SuccessScreen";


export default function App() {

    return (
        <div>
            <GlobalStyle />
            <Header />
            <MovieScreen />
            {/* <SessionsScreen /> */}
            {/* <SeatsScreen /> */}
            {/* <SuccessScreen /> */}
            <Footer />
        </div>)
}