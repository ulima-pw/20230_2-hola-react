import { useNavigate } from "react-router-dom"
import LoginForm from "./components/LoginForm"

function LoginPage() {

    const navigate = useNavigate()

    const onLoginOk = function(
        usuario, password
    ) {
        if (usuario === "pw" 
            && password === "123") {

            const dataUsuario = {
                username : usuario,
                password : password
            }

            // JSON.stringify : convierte objetos js a JSON (string)
            const dataUsuarioJSON = JSON.stringify(dataUsuario)
            console.log(dataUsuario)
            console.log(dataUsuarioJSON)
            // Guardado en session storage
            sessionStorage.setItem("DATA_USUARIO", dataUsuarioJSON)


            navigate("/20230_2-hola-react/main", {
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