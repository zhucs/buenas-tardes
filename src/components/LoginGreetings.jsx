import React, {useEffect, useState} from 'react';

const LoginGreetings = () => {
    const [greetingIndex, setGreetingIndex] = useState(0);
    const [rolling, setRolling] = useState(false);
    const greetings = ['Hola', '你好', 'こんにちは', 'नमस्ते', 'Hallo', 'Hello', 'Ciao', 'مرحبًا'];

    useEffect(() => {
        if (rolling) {
            const interval = setInterval(() => {
                setGreetingIndex((prevIndex) => {
                    let newIndex = Math.floor(Math.random() * greetings.length);
                    while (newIndex === prevIndex) {
                        newIndex = Math.floor(Math.random() * greetings.length);
                    }
                    return newIndex;
                });
            }, 2000);

            return () => clearInterval(interval);
        }
    }, [rolling]);

    useEffect(() => {
        // Start rolling the greetings after initial render
        setRolling(true);
    }, []);

    return (
        <h1 className={`text-5xl font-semibold`}>{greetings[greetingIndex]}</h1>
    );
};

export default LoginGreetings;
