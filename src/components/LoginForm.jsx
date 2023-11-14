import '../App.css'
import GreetingAnimation from "./LoginGreetings.jsx";
import {GoogleLogin} from 'react-google-login';
import {useEffect} from "react";
import {gapi} from 'gapi-script';

const clientId = "803198850896-8jff6l0sv4mbn6a0panjuf66983qg0lf.apps.googleusercontent.com";

const LoginForm = () => {
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        }
        gapi.load('client:auth2', start);
    });

    const onSuccess = (res) => {
        console.log("LOGIN SUCESS! Current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res);
    }

    return (
        <div className={`bg-white px-10 py-10 rounded-3xl border-2 border-gray-200`}>
            <GreetingAnimation/>
            <p className={`font-medium text-lg text-gray-500 mt-4`}> Welcome back! Please enter your details.</p>
            <div className={`mt-6 text-left`}>
                <div>
                    <label className={`text-lg font-medium`}>Email</label>
                    <input
                        className={`w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent`}
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label className={`text-lg font-medium`}>Password</label>
                    <input
                        className={`w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent`}
                        placeholder="Enter your password"
                        type="password"
                    />
                </div>
                <div className='mt-6 flex justify-between items-center'>
                    <div className={``}>
                        <input type="checkbox" id='remember'/>
                        <label className='ml-2 font-medium text-base' htmlFor="remember">Remember me</label>
                    </div>
                    <button className='font-medium text-base text-indigo-300'>Forgot password</button>
                </div>
                <div className={`mt-6 flex flex-col gap-y-4`}>
                    <button className={`active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out bg-indigo-300 text-white text-lg font-bold py-3 rounded-xl`}>Sign in</button>
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Sign in with Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                        className={`flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4  rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100`}
                    />
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
