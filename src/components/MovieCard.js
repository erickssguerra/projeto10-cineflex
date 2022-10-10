import { Link } from "react-router-dom"

export default function MovieCard(props) {

    const { poster, title, idMovie } = props

    return (
        <Link to={`/sessoes/${idMovie}`} >
            <li>
                <img src={poster} alt={title} />
            </li>
        </Link >
    )
}