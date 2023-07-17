import '../App.css'
import {useEffect, useRef, useState} from "react"

const LessonPage = () => {
    const [chatLog, setChatLog] = useState([{speaker: "cpu", message: "Hola! Cómo estás?"}]);
    const [liveText, setLiveText] = useState('');
    const bottomRef = useRef(null);
    useEffect(() => {
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [chatLog]);
    const handleChatInput = (event) => {
        if (event.key !== "Enter")
            return;
        event.target.blur();
        const chatInput= event.target.value;
        if (chatInput) {
            setChatLog([
                ...chatLog,
                {speaker: "human", message: chatInput}
            ]);
            setLiveText('');
        }
        // DEBUG:
        console.log("The message log is: " + JSON.stringify([...chatLog,
            {speaker: "human,", message: chatInput}]));
    }

    return (
        <div className="flex justify-center w-screen h-screen bg-white">
            <div className="flex flex-col w-10/12 bg-white">
                <div className='mt-4 mb-4 pt-4 pb-8 text-3xl font-semibold border-b border-gray-200'>
                    Usted está en un restaurante y...
                </div>
                <div className='overflow-scroll h-4/6 border border-white-100'>
                    <div className="chat chat-start mb-1 mt-1 rounded-2xl bg-amber-50">
                        <div className="chat-bubble bg-amber-100 text-black flex justify-center">Hola y bienvenido al Pirata Feliz! Soy <br></br> Jorge y voy a ser su mesero esta noche. </div>
                    </div>
                    <div className="chat chat-end mb-1 mt-1 rounded-2xl bg-gray-100">
                        <div className="chat-bubble bg-gray-700 text-white">Buenas Tardes, Jorge! Cómo estás?</div>
                    </div>
                    <div className="chat chat-start mb-1 mt-1 rounded-2xl bg-amber-50">
                        <div className="chat-bubble bg-amber-100 text-black">Estoy muy bien! Aquí tiene nuestro menú: </div>
                    </div>
                    <div className="mb-2 mt-2 rounded-2xl bg-amber-50">
                        <br></br>
                        <div className="">Menú del Pirata Feliz!</div>
                        <div className="">------------------------------</div>
                        <ul className="">Entradas
                            <li className="text-sm ">Papa a la Huancaina</li>
                            <li className="text-sm ">Ceviche de Pescado</li>
                            <li className="text-sm ">Ceviche Mixto</li>
                            <li className="text-sm ">Leche de Tigre</li>
                        </ul>
                        <br></br>
                        <ul className="">Pollo
                            <li className="text-sm ">Pollo a la Plancha</li>
                            <li className="text-sm ">Aji de Gallina</li>
                            <li className="text-sm ">Chaufa de Pollo</li>
                        </ul>
                        <br></br>
                    </div>
                    <div className="chat chat-end mb-1 mt-1 rounded-2xl bg-gray-100">
                        <div className="chat-bubble bg-gray-700 text-white">Buenas Tardes, Jorge! Cómo estás?</div>
                    </div>
                    <div className="chat chat-end mb-1 mt-1 rounded-2xl bg-gray-100">
                        <div className="chat-bubble bg-gray-700 text-white">Buenas Tardes, Jorge! Cómo estás?</div>
                    </div>
                    {chatLog.map(({speaker, message}, index) => {
                        return (<div key={index}
                             className={(speaker === "human")
                                 ? "chat chat-end mb-1 mt-1 rounded-2xl bg-gray-100"
                                 : "chat chat-start mb-1 mt-1 rounded-2xl bg-amber-50"
                            }>
                                <div className={(speaker === "human")
                                    ? "chat-bubble bg-gray-700 text-white"
                                    : "chat-bubble bg-amber-100 text-black flex justify-center"
                                }> {message}</div>
                        </div>);
                    })}
                    <div ref={bottomRef}></div> {/*Scroll here after render*/}
                </div>

                <label className='flex-row h-1/6 mt-4 mb-4 rounded-2xl bg-white border border-gray-200 cursor-text'>
                    <textarea className='w-11/12 h-3/4 mt-4 pl-4 pr-4 pt-4 pb-4 text-sm text-left bg-white !outline-none border-2 border-b-gray-300 resize-none'
                            placeholder='Click here to chat'
                            onKeyDown={handleChatInput}
                            onChange={(e) => {
                                setLiveText(e.target.value);
                            }}
                            value={liveText}>
                    </textarea>
                </label>
            </div>
        </div>
    );
}

export default LessonPage;
