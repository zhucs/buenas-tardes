import '../App.css'
import {sidebarItems} from "../constants/index.js";

const SideBarMenu = () => {
    return (
        <div className="flex">
            <div className="w-56 bg-indigo-300 h-screen">
                <div>
                    <div>
                        <h3 className="text-center font-semibold text-3xl m-4">Menu</h3>
                    </div>
                    <div>
                        <ul className="">
                            {sidebarItems.map((sidebarItem) => (
                                <li
                                    key={sidebarItem.id}
                                    className="text-center cursor-pointer m-4 bg-white rounded-lg transition-transform hover:scale-105 text-xl"
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
