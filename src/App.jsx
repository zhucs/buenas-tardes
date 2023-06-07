import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/Users/kentliu/IdeaProjects/buenas-tardes/public/vite.svg'
import './App.css'
import { spanishLessons } from "./constants/index.js";

import { BrowserRouter } from "react-router-dom";
import Lessons from "./components/Lessons.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <div className='relative z-0'>
                <Lessons/>
            </div>
        </BrowserRouter>
    );
}

export default App;
