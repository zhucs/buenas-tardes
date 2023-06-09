import '../App.css'

import {spanishLessons} from "../constants/index.js";
import {useContext} from "react";
import {LanguageContext} from "../constants/LanguageContext.jsx";

const Lessons = () => {
    const {language} = useContext(LanguageContext)
    const getSpanishGreeting = () => {
        const currentTime = new Date().getHours();
        let greeting = '';

        if (currentTime >= 5 && currentTime <= 12) {
            greeting = 'Buenos Días!';
        } else if (currentTime >= 12 && currentTime < 19) {
            greeting = 'Buenas Tardes!';
        } else {
            greeting = 'Buenas Noches!';
        }
        return greeting;
    };

    // Select which greeting is displayed based on current language
    let displayedGreeting;
    switch (language) {
        case "Spanish":
            displayedGreeting = getSpanishGreeting()
            break;
        default:
            displayedGreeting = getSpanishGreeting() // Greeting is Spanish is default
    }

    return (
        <div className={`bg-cover bg-no-repeat bg-white h-full`}>
            <div>
                <div className={`flex justify-center items-center`}>
                    <h3 className={`mt-8 text-black font-semibold lg:text-5xl text-4xl animate-none`}>
                        {displayedGreeting}</h3>
                </div>
                <div className={`flex justify-center items-center`}>
                    <ul className={`mt-12 w-11/12`}>
                        {spanishLessons.map((spanishLesson) => (
                            <li key={spanishLessons.id}
                                className=
                                    {`text-center cursor-pointer h-24 bg-indigo-300 m-8 rounded-lg 
                                transition-transform hover:scale-105 text-white text-xl`}
                            >
                                {spanishLesson.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Lessons;
