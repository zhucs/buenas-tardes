import '../App.css'
import SideBarMenu from "../components/SideBarMenu.jsx";
import Lessons from "../components/Lessons.jsx";

const MainPage = () => {

    return (
        <div className='flex w-screen h-screen'>
            <div className={`h-full`}>
                <SideBarMenu/>
            </div>
            <div className={`flex-grow bg-amber-50 h-full`}>
                <Lessons/>
            </div>
        </div>
    );
}

export default MainPage;
