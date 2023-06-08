import './App.css'

import { BrowserRouter } from "react-router-dom";
import Lesson from "./components/Lesson.jsx";
import SideBarMenu from "./components/SideBarMenu.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <div className='flex w-screen h-screen overflow-hidden'>
                <div className={`bg-blue-300 w-1/4 h-full`}>
                    <SideBarMenu/>
                </div>
                <div className={`flex-grow bg-amber-50 h-full`}>
                    <Lesson/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
