"use client";
import { useEffect, useState } from 'react';

const useCounter = (end: number, duration = 10000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const stepTime = Math.abs(Math.floor(duration / end));
        const startTime = performance.now();
        const animateCount = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            console.log("progress", progress);
            const currentCount = Math.floor(progress * end);
            setCount(currentCount);
            if (progress < 1) {
                requestAnimationFrame(animateCount);
            } else {
                setCount(end);
            }
        };
        requestAnimationFrame(animateCount);
    }, [end, duration]);

    return count;
};

export default useCounter;
