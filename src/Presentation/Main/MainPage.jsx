import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import ListaPeliculas from "./components/ListaPeliculas"

function MainPage() {
    /* const listaPeliculas = [
        {
            id : 1,
            nombre : "Avatar 2",
            url : "https://es.web.img3.acsta.net/pictures/22/11/02/15/37/0544148.jpg"
        },
        {
            id : 2,
            nombre : "Gato con Botas",
            url : "https://www.universalpictures-latam.com/tl_files/content/movies/puss_in_boots_2/posters/01.jpg"
        },
        {
            id : 3,
            nombre : "El viaje de chihiro",
            url : "https://es.web.img2.acsta.net/pictures/21/05/11/13/47/5979708.jpg"
        }
    ] */

    const obtenerPeliculas = function() {
        const promesa = fetch("https://script.google.com/a/macros/ulima.edu.pe/s/AKfycbzRqLpRf7PXLuNQrgTKSTer6-Zt0dfmPmdDh-WmEr_dEm34Eh4qsfhMOADDoWgNKzdd/exec?entity=peliculas")
        
        promesa.then(function (response) {
            console.log("Respuesta del servidor")
        })

        console.log("Fin de funcion obtenerPeliculas")
    }

    obtenerPeliculas()


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
            peliculas={ [] } />
        : <div></div>

}

export default MainPage