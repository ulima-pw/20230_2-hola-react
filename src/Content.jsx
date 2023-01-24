import ListaDiasSemana from "./ListaDiasSemana"

function Content(props) {
    const listaDias = ["Lunes", "Miercoles" ,"Viernes"]

    if (props.sePintaNombre == true) {
        return <div>
            <p>Hola { props.nombre }</p>
            <ListaDiasSemana 
                lista={ listaDias }
                modo={ "tabla" }/>
        </div>
    } else {
        return <div>
            <p>Hola { props.apellido }</p>
        </div>
    }
}

export default Content