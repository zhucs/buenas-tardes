import './App.css'

import { BrowserRouter } from "react-router-dom";
import Lesson from "./components/Lesson.jsx";
import SideBarMenu from "./components/SideBarMenu.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <div className='flex w-screen h-screen'>
                <div className={`bg-blue-300 w-1/4 h-screen`}>
                    <SideBarMenu/>
                </div>
                <div className={`flex-grow w-3/4 bg-amber-50 h-screen`}>
                    <Lesson/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
