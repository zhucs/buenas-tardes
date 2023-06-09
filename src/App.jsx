import './App.css'

import {BrowserRouter} from "react-router-dom";
import MainPage from "./Pages/MainPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <MainPage/>
        </BrowserRouter>
    );
}

export default App;
