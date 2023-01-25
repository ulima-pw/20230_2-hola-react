import { useState } from "react"

// Componente React
function ListaDiasSemana(props) {
    // Variable de estado
    const [modoVisualizacion, setModoVisualizacion] = useState(props.modo)

    const butOnClick = function() {
        if (modoVisualizacion === "tabla") {
            // cambiar a modo lista
            setModoVisualizacion("lista")
        }else {
            // cambiar a modo tabla
            setModoVisualizacion("tabla")
        }
    }


    if (modoVisualizacion === "lista") {
        return <div className="card">
            <div className="card-body">
                <h3>Dias Semana <button onClick={ butOnClick } className="btn btn-primary" type="button">Cambiar</button> </h3>
                <ul className="list-group">
                    {
                        props.lista.map(function(dia) {
                            return <li key={ dia }
                                        className="list-group-item">
                                        { dia }
                                    </li>
                        })
                    }
                </ul>
            </div>
        </div>
    }else if (modoVisualizacion === "tabla") {
        return <div className="card">
            <div className="card-body">
                <h3>Dias Semana <button onClick={ butOnClick } className="btn btn-primary" type="button">Cambiar</button></h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Dia</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.lista.map(function(dia) {
                                return <tr key={ dia }>
                                    <td>{ dia }</td>
                                </tr>
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    } else {
        return <div>
            Modo incorrecto
        </div>
    }
    
}

export default ListaDiasSemana