import { useEffect, useState } from 'react';

const Time = () => {
    const[time,setTime]=useState();
    useEffect(()=>{
        const IntervalId=setInterval(()=>{
            setTime(new Date());
        },1000);
        const closeEffect=()=>{
            clearInterval(IntervalId);
        }
        return closeEffect;
    },[])
    return (
        <div>
            {time.toLocaleTimeString()}
        </div>
    );
};

export default Time;