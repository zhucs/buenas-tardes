import '../App.css'
import SideBarMenu from "../components/SideBarMenu.jsx";
import Lesson from "../components/Lesson.jsx";

const MainPage = () => {

    return (
        <div className='flex w-screen h-screen overflow-hidden'>
            <div className={`bg-blue-300 w-1/4 h-full`}>
                <SideBarMenu/>
            </div>
            <div className={`flex-grow bg-amber-50 h-full`}>
                <Lesson/>
            </div>
        </div>
    );
}

export default MainPage;
