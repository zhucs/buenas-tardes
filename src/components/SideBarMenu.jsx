import '../App.css'

import {sidebarItems} from "../constants/index.js";
import {useContext, useState} from "react";
import {LanguageContext} from "../constants/LanguageContext.jsx";

const SideBarMenu = () => {
    const { language } = useContext(LanguageContext);
    const[open, setOpen] = useState(true);

    return (
        <div className="flex">
            <div className={` ${open ? "w-56" : "w-0"} bg-indigo-300 h-screen relative duration-300`}>
                <img
                    src="../../public/control.png"
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full  
                    ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}/>
                <div className={`${open ? "" : "hidden"}`}>
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
