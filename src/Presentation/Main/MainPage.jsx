import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Filtro from "./components/Filtro"
import ListaPeliculas from "./components/ListaPeliculas"

function MainPage() {
    // Variable de estado
    const [listaPeliculas, setListaPeliculas] = useState([])
    const [listaCategorias, setListaCategorias] = useState([])

    const obtenerPeliculasAsyncAwait = async function() {
        try {
            const response = await fetch("https://script.google.com/a/macros/ulima.edu.pe/s/AKfycbzRqLpRf7PXLuNQrgTKSTer6-Zt0dfmPmdDh-WmEr_dEm34Eh4qsfhMOADDoWgNKzdd/exec?entity=peliculas")
            const data = await response.json()
            console.log("Respuesta del servidor:", data)
            setListaPeliculas(data)
        }catch(error) {
            console.error("Error de comunicacion")
        }
        
    }

    const obtenerCategoriasAsyncAwait = async function() {
        try {
            const response = await fetch("https://script.google.com/a/macros/ulima.edu.pe/s/AKfycbzRqLpRf7PXLuNQrgTKSTer6-Zt0dfmPmdDh-WmEr_dEm34Eh4qsfhMOADDoWgNKzdd/exec?entity=categorias")
            const data = await response.json()
            setListaCategorias(data)
        }catch(error) {
            console.error("Error obteniendo categorias")
        }
    }

    /*const obtenerPeliculas = function() {
        const promesa = fetch("https://script.google.com/a/macros/ulima.edu.pe/s/AKfycbzRqLpRf7PXLuNQrgTKSTer6-Zt0dfmPmdDh-WmEr_dEm34Eh4qsfhMOADDoWgNKzdd/exec?entity=peliculas")
        
        promesa.then(function (response) {
            const promesaResponse = response.json()
            promesaResponse.then((data) => {
                console.log("Respuesta del servidor:", data)
            })
        })

        promesa.catch(function(err) {
            // Funcion a ejecutar cuando haya un error
            console.error("Error de comunicacion")
        })

        console.log("Fin de funcion obtenerPeliculas")
    }*/

    const location = useLocation()

    const navigate = useNavigate()

    // Funcion que se renderizara solo la primera vez
    useEffect(function() {
        if (location.state == null) {
            navigate("/")
        }else {
            obtenerCategoriasAsyncAwait()
            obtenerPeliculasAsyncAwait()
        }
    }, [])

    return location.state !== null 
        ? <div className="container">
            <Filtro categorias={ listaCategorias } />
            <ListaPeliculas 
                peliculas={ listaPeliculas } />
        </div>
        : <div></div>

}

export default MainPage