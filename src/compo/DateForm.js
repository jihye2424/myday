import {useEffect, useState} from 'react';

const DateFrom = () => {
  const [day,setday]=useState(new Date());
  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setday(new Date());
    },1000);
    const closeEffect = ()=>{
      clearInterval(intervalId);
    }
    return closeEffect;
  },[]);
  return (
    <div className="date">
      {/* {day.toLocaleDateString('en-US')} */}
      {day.toLocaleDateString('ko-KR')}
      {/* {time.toLocaleTimeString('ko-KR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      })} */}
    </div>
  );
};

export default DateFrom;