import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function MainPage() {
    const location = useLocation()

    const navigate = useNavigate()

    // Funcion que se renderizara solo la primera vez
    useEffect(function() {
        if (location.state == null) {
            navigate("/")
        }
    }, [])

    return location.state !== null 
        ? <div>Main Page: { location.state.username }</div>
        : <div></div>

}

export default MainPage