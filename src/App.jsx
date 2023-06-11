import './App.css'

import {BrowserRouter} from "react-router-dom";
import {useState} from "react";
import {LanguageContext} from "./constants/LanguageContext.jsx";
import LoginPage from "./Pages/LoginPage.jsx";

const App = () => {
    // Language that the user is currently learning
    const [language, setLanguage] = useState("Spanish");
    const updateLanguage = (newLang) => {
        setLanguage(newLang);
    }

    return (
        <BrowserRouter>
            <LanguageContext.Provider value={{language: language, updateLanguage: updateLanguage}}>
                <div className={`w-screen`}>
                    <LoginPage/>
                </div>
            </LanguageContext.Provider>

        </BrowserRouter>
    );
}

export default App;
