import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import ListaPeliculas from "./components/ListaPeliculas"

function MainPage() {
    const listaPeliculas = [
        {
            id : 1,
            nombre : "Avatar 2",
            url : "https://es.web.img3.acsta.net/pictures/22/11/02/15/37/0544148.jpg"
        },
        {
            id : 2,
            nombre : "Gato con Botas",
            url : "https://www.universalpictures-latam.com/tl_files/content/movies/puss_in_boots_2/posters/01.jpg"
        }
    ]

    const location = useLocation()

    const navigate = useNavigate()

    // Funcion que se renderizara solo la primera vez
    useEffect(function() {
        if (location.state == null) {
            navigate("/")
        }
    }, [])

    return location.state !== null 
        ? <ListaPeliculas 
            peliculas={ listaPeliculas } />
        : <div></div>

}

export default MainPage