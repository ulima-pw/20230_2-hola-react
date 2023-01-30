import CardPelicula from "./CardPelicula"

function ListaPeliculas(props) {
    const listaRows = []
    let listaCols = []

    props.peliculas.forEach(function(pelicula, index) {
        if (index % 2 === 0) {
            listaCols.push(
                <div className="col-md-6">
                    <CardPelicula />
                </div>
            )
        } else {
            listaCols.push(
                <div className="col-md-6">
                    <CardPelicula />
                </div>
            )
            listaRows.push(
                <div className="row">
                    { listaCols }
                </div>
            )
            listaCols = []
        }
    })

    if (props.peliculas.length % 2 !== 0) {
        listaCols = []
        listaCols.push(
            <div className="col-md-6">
                <CardPelicula />
            </div>
        )
        listaRows.push(
            <div className="row">
                { listaCols }
            </div>
        )
    }

    return <div>
        {
            listaRows
        }
    </div>
    
}

export default ListaPeliculas