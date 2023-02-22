import LoginForm from "./components/LoginForm"
import LoginViewModel from "./viewmodels/LoginViewModel"

function LoginPage() {

    const loginViewModel = LoginViewModel()

    return <div className="container">
        <div className="row">
            <div className="col"></div>
            <div className="col">
                <LoginForm 
                    onLoginOk={ loginViewModel.login } />
            </div>
            <div className="col"></div>
        </div>
    </div>
}

export default LoginPage