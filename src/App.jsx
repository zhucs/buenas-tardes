import './App.css'
import {useState} from "react";
import {LanguageContext} from "./constants/LanguageContext.jsx";
//import LoginPage from "./Pages/LoginPage.jsx";
import MainPage from "./Pages/MainPage.jsx";

const App = () => {
    // Language that the user is currently learning
    const [language, setLanguage] = useState("Spanish");
    const updateLanguage = (newLang) => {
        setLanguage(newLang);
    }

    return (
        <LanguageContext.Provider value={{language: language, updateLanguage: updateLanguage}}>
            <div className={`w-screen`}>
                <MainPage/>
            </div>
        </LanguageContext.Provider>

    );
}

export default App;
