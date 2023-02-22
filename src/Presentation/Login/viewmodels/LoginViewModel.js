import { useNavigate } from "react-router-dom"

const LoginViewModel = function() {
    const navigate = useNavigate()

    const login = async function(usuario, password) {
        // 1. Peticion HTTP POST -> /endpoints/login
        const response = await fetch(
            "http://localhost:8000/endpoints/login",
            {
                method : "POST",
                body : JSON.stringify(
                    { 
                        usuario : usuario, 
                        password : password 
                    }
                )
            }
        )
        const data = await response.json()

        const error =  data.error

        if (error === "") {
            // Login correcto
            const dataUsuario = {
                username : usuario,
                password : password
            }

            // JSON.stringify : convierte objetos js a JSON (string)
            const dataUsuarioJSON = JSON.stringify(dataUsuario)
            // Guardado en session storage
            sessionStorage.setItem("DATA_USUARIO", dataUsuarioJSON)

            navigate("/20230_2-hola-react/main", {
                state : {
                    username : usuario
                }
            })
        }else {
            console.error(error)
        }
    }

    return {
        login
    }
}

export default LoginViewModel