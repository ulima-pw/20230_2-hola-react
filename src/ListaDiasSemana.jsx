// Componente React
function ListaDiasSemana(props) {
    if (props.modo === "lista") {
        return <div>
            <h3>Dias Semana</h3>
            <ul>
                {
                    props.lista.map(function(dia) {
                        return <li>{ dia }</li>
                    })
                }
            </ul>
        </div>
    }else if (props.modo === "tabla") {
        return <div>
            <h3>Dias Semana</h3>
            <table>
                <thead>
                    <tr>
                        <th>Dia</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.lista.map(function(dia) {
                            return <tr>
                                <td>{ dia }</td>
                            </tr>
                        })
                    }
                    
                </tbody>
            </table>
        </div>
    } else {
        return <div>
            Modo incorrecto
        </div>
    }
    
}

export default ListaDiasSemana