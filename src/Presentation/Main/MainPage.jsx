import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Filtro from "./components/Filtro"
import ListaPeliculas from "./components/ListaPeliculas"
import MainViewModel from "./viewmodels/MainViewModel"

function MainPage() {
    const mainViewModel = MainViewModel()

    const location = useLocation()

    const navigate = useNavigate()

    // Funcion que se renderizara solo la primera vez
    useEffect(function() {
        if (location.state == null) {
            navigate("/")
        }else {
            mainViewModel.obtenerCategorias()
            mainViewModel.obtenerPeliculas(-1)
        }
    }, [])

    return location.state !== null 
        ? <div className="container">
            <Filtro 
                categorias={ mainViewModel.listaCategorias }
                onFiltrar={ mainViewModel.obtenerPeliculas } />
            <ListaPeliculas 
                peliculas={ mainViewModel.listaPeliculas } />
        </div>
        : <div></div>

}

export default MainPage