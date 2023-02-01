import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Filtro from "./components/Filtro"
import ListaPeliculas from "./components/ListaPeliculas"

function MainPage() {
    // Variable de estado
    const [listaPeliculas, setListaPeliculas] = useState([])
    const [listaCategorias, setListaCategorias] = useState([])

    const obtenerCategoriasAsyncAwait = async function() {
        try {
            const response = await fetch("https://script.google.com/a/macros/ulima.edu.pe/s/AKfycbzRqLpRf7PXLuNQrgTKSTer6-Zt0dfmPmdDh-WmEr_dEm34Eh4qsfhMOADDoWgNKzdd/exec?entity=categorias")
            const data = await response.json()
            setListaCategorias(data)
        }catch(error) {
            console.error("Error obteniendo categorias")
        }
    }

    const filtrarPelicula = async function (categoriaId) {
        try {
            const response = await fetch("https://script.google.com/a/macros/ulima.edu.pe/s/AKfycbzRqLpRf7PXLuNQrgTKSTer6-Zt0dfmPmdDh-WmEr_dEm34Eh4qsfhMOADDoWgNKzdd/exec?entity=peliculas")
            const data = await response.json()

            let peliculas = data;
            if (categoriaId != -1) {
                peliculas = data.filter(function(pelicula) {
                    return pelicula.categoria == categoriaId
                })
            }
    
            setListaPeliculas(peliculas)
        }catch(error) {
            console.error("Error de comunicacion")
        }
    }

    const location = useLocation()

    const navigate = useNavigate()

    // Funcion que se renderizara solo la primera vez
    useEffect(function() {
        if (location.state == null) {
            navigate("/")
        }else {
            obtenerCategoriasAsyncAwait()
            filtrarPelicula(-1)
        }
    }, [])

    return location.state !== null 
        ? <div className="container">
            <Filtro 
                categorias={ listaCategorias }
                onFiltrar={ filtrarPelicula } />
            <ListaPeliculas 
                peliculas={ listaPeliculas } />
        </div>
        : <div></div>

}

export default MainPage