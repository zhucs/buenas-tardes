import '../App.css'
import { sidebarItems } from "../constants/index.js";

import { BrowserRouter } from "react-router-dom";

const SideBarMenu = () => {
    return (
        <div className="flex">
            <div className="w-64 bg-blue-300">
                <div>
                    <div>
                        <h3 className="text-center font-semibold text-3xl">Menu</h3>
                    </div>
                    <div>
                        <ul className="">
                            {sidebarItems.map((sidebarItem) => (
                                <li
                                    key={sidebarItem.id}
                                    className="text-center cursor-pointer bg-gray-800 m-4 rounded-lg transition-transform hover:scale-105 text-white text-xl"
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
