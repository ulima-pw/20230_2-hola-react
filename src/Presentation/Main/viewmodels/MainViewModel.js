import { useState } from "react"

const MainViewModel = function() {

    // Variable de estado
    const [listaCategorias, setListaCategorias] = useState([])
    const [listaPeliculas, setListaPeliculas] = useState([])

    const obtenerCategorias = async function() {
        try {
            const response = await fetch("https://script.google.com/a/macros/ulima.edu.pe/s/AKfycbzRqLpRf7PXLuNQrgTKSTer6-Zt0dfmPmdDh-WmEr_dEm34Eh4qsfhMOADDoWgNKzdd/exec?entity=categorias")
            const data = await response.json()
            setListaCategorias(data)
        }catch(error) {
            console.error("Error obteniendo categorias")
        }
    }

    const obtenerPeliculas = async function(categoriaId) {
        try {
            const response = await fetch(
                `http://localhost:8000/endpoints/peliculas/listar?categoria=${ categoriaId }`
            )
            const data = await response.json()
    
            if (data.error === "") {
                setListaPeliculas(data.peliculas)
            }else {
                console.error(data.error)
            }
            
        }catch(error) {
            console.error("Error de comunicacion")
        }
    }

    return {
        listaCategorias,
        listaPeliculas,
        obtenerCategorias,
        obtenerPeliculas
    }
}

export default MainViewModel