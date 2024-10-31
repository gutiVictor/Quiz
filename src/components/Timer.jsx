import React, { useState, useEffect } from 'react';

const Timer = ({ time, onTimeout }) => {
    const [seconds, setSeconds] = useState(time);

    useEffect(() => {
        if (seconds > 0) {
            const timer = setTimeout(() => {
                setSeconds(seconds - 1);
            }, 1000);

            return () => clearTimeout(timer);
        } else {
            onTimeout();
        }
    }, [seconds, onTimeout]);

    useEffect(() => {
        setSeconds(time);
    }, [time]);

    return (
        <div className='text-center text-lg font-bold'>
            Tiempo restante: {seconds} segundos
        </div>
    );
};

export default Timer;