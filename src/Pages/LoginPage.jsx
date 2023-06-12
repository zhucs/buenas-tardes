import '../App.css'
import LoginForm from "../components/LoginForm.jsx";

const LoginPage = () => {

    return (
        <div className={`flex w-full h-screen`}>
            <div className={`flex w-full h-screen items-center justify-center lg:w-1/2`}>
                <LoginForm/>
            </div>
            <div className={`hidden relative lg:flex h-full items-center justify-center bg-gray-200 w-1/2`}>
                <div className={`w-60 h-60 bg-gradient-to-tr from-indigo-300 to-blue-500 rounded-full animate-pulse`}/>
                <div className={`w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg`}/>
            </div>
        </div>
    );
}

export default LoginPage;
