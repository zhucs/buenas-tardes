import './App.css'

import { BrowserRouter } from "react-router-dom";
import Lesson from "./components/Lesson.jsx";
import SideBarMenu from "./components/SideBarMenu.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <div className='flex'>
                <div className={`bg-blue-300 w-64 h-screen`}>
                    <SideBarMenu/>
                </div>
                <div className={`flex-grow`}>
                    <Lesson/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
