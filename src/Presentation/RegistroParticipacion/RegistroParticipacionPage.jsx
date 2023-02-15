import { useState } from "react"
import ListaActoresXPelicula from "./components/ListaActoresXPelicula"
import ListaPeliculas from "./components/ListaPeliculas"
import './RegistroParticipacionPage.css'

const RegistroParticipacionPage = function() {

    const [idPeliculaSeleccionada, setidPeliculaSeleccionada] = useState(null)
    const [listaPeliculas, setListaPeliculas] = useState([])
    const [listaPeliculasSeleccionadas, setListaPeliculasSeleccionadas] = useState([])

    return <div className="container">
        <h1>Registro Participación</h1>
        <div className="row">
            <div className="col">
                <h3>Peliculas</h3>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" />
                    <span className="input-group-text material-symbols-outlined boton">search</span>
                </div>
                <ListaPeliculas peliculas={listaPeliculas} />
            </div>
            <div className="col">
                <h3>Actores</h3>
                <ListaActoresXPelicula 
                    pelicula={idPeliculaSeleccionada}
                    seleccion={listaPeliculasSeleccionadas}/>
            </div>
        </div>
    </div>
}

export default RegistroParticipacionPage