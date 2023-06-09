import './App.css'

import {BrowserRouter} from "react-router-dom";
import {useState} from "react";

import MainPage from "./Pages/MainPage.jsx";
import {LanguageContext} from "./constants/LanguageContext.jsx";

const App = () => {
    // Language that the user is currently learning
    const [language, setLanguage] = useState("Spanish");
    const updateLanguage = (newLang) => {
        setLanguage(newLang);
    }

    return (
        <BrowserRouter>
            <LanguageContext.Provider value={{language: language, updateLanguage: updateLanguage}}>
                <MainPage/>
            </LanguageContext.Provider>

        </BrowserRouter>
    );
}

export default App;
