import { useNavigate } from "react-router-dom"
import LoginForm from "./components/LoginForm"

function LoginPage() {

    const navigate = useNavigate()

    const onLoginOk = function(
        usuario, password
    ) {
        if (usuario === "pw" 
            && password === "123") {
            navigate("/main", {
                state : {
                    username : usuario
                }
            })
        }
    }

    return <div className="container">
        <div className="row">
            <div className="col"></div>
            <div className="col">
                <LoginForm 
                    onLoginOk={ onLoginOk } />
            </div>
            <div className="col"></div>
        </div>
    </div>
}

export default LoginPage