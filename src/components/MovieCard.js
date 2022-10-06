import { Link } from "react-router-dom"

export default function MovieCard(props) {


    const { imagem, titulo, id } = props

    return (
        <Link to={`/sessoes/${id}`} > <li><img src={imagem} alt={titulo} /></li></Link >
    )
}