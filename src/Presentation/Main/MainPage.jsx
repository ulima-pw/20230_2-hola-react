import { useLocation } from "react-router-dom"

function MainPage() {
    const location = useLocation()
    console.log(location)

    const username = location.state.username

    return <div>Main Page: { username }</div>
}

export default MainPage