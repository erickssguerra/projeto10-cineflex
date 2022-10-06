import { Link } from "react-router-dom"

export default function MovieCard(props) {

    const { imagem, titulo, idFilme } = props

    return (
        <Link to={`/sessoes/${idFilme}`} >
            <li>
                <img src={imagem} alt={titulo} />
            </li>
        </Link >
    )
}