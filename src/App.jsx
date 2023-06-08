import './App.css'

import { BrowserRouter } from "react-router-dom";
import Lesson from "./components/Lesson.jsx";
import SideBarMenu from "./components/SideBarMenu.jsx";
import MainPage from "./Pages/MainPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <MainPage/>
        </BrowserRouter>
    );
}

export default App;
