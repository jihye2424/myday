import { useEffect, useState } from 'react';

const Dark = () => {
    const [dark,setDark]=useState(false);
    useEffect(()=>{
        const saved=localStorage.getItem("theme");
        if(saved){
            setDark(saved);
        }
    },[]);
  useEffect(()=>{
    localStorage.setItem("theme",dark);
    document.body.style.backgroundColor = dark ? "#222":"#fff";
    document.body.style.color = dark ? "#fff":"#222";
  },[dark])
    return (
        <div>
            <button className='darkbutton' onClick={()=>{setDark(!dark)}}>
                {
                    dark ? "라이트모드☀️":"다크모드🌙"
                }</button>
                
        </div>
    );
};

export default Dark;