import '../App.css'

import {sidebarItems} from "../constants/index.js";
import {useContext} from "react";
import {LanguageContext} from "../constants/LanguageContext.jsx";

const SideBarMenu = () => {
    const { language } = useContext(LanguageContext);

    return (
        <div className="flex">
            <div className="w-56 bg-indigo-300 h-screen">
                <div>
                    <div className="">
                        <h3 className="text-center font-semibold text-3xl m-4">Menu</h3>
                        <h1 className="text-center font-mono text-lg bg-white m-4">{`Language: ${language}`}</h1>
                    </div>
                    <div>
                        <ul className="">
                            {sidebarItems.map((sidebarItem) => (
                                <li
                                    key={sidebarItem.id}
                                    className="text-center cursor-pointer bg-white m-4 rounded-lg transition-transform hover:scale-105 text-xl"
                                >
                                    {sidebarItem.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SideBarMenu;
