import '../App.css'
import { spanishLessons } from "../constants/index.js";

import { BrowserRouter } from "react-router-dom";

const Lesson = () => {
    const getGreeting = () => {
        const currentTime = new Date().getHours();
        let greeting = '';

        if (currentTime >= 5 && currentTime <= 12) {
            greeting = 'Buenos Días';
        } else if (currentTime >= 12 && currentTime < 19) {
            greeting = 'Buenas Tardes';
        } else {
            greeting = 'Buenas Noches';
        }
        return greeting;
    };

    return (
        <div className={`bg-cover bg-no-repeat bg-blue-500`}>
            <div>
                <div className={``}>
                    <h3 className={`text-center font-semibold text-3xl animate-bounce`}>{getGreeting()}</h3>
                </div>
                <div className={`w-full`}>
                    <ul className={`grid-cols-1 gap-4 sm:grid-cols-1 mt-20`}>
                        {spanishLessons.map((spanishLesson) => (
                            <li key={spanishLessons.id}
                                className=
                                    {`text-center cursor-pointer bg-gray-800 m-4 rounded-lg 
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

export default Lesson;
