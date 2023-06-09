import '../App.css'
import SideBarMenu from "../components/SideBarMenu.jsx";
import Lessons from "../components/Lessons.jsx";

const MainPage = () => {

    return (
        <div className='flex w-screen h-screen overflow-hidden'>
            <div className={`bg-blue-300 h-full`}>
                <SideBarMenu/>
            </div>
            <div className={`flex-grow bg-amber-50 h-full`}>
                <Lessons/>
            </div>
        </div>
    );
}

export default MainPage;
