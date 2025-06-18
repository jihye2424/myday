import React, { useEffect, useState } from 'react';

const Weather = () => {
    const API_KEY="a979a13bc0bd210878acc69bd4984cba";
    const [weather,setweather]=useState(null);
    const [loading,setloading]=useState(true);
    const [error,seterror]=useState(null);
    useEffect(()=>{
        if(!navigator.geolocation){
            seterror("위치 정보를 지원하지 않는 브라우저 입니다.")
            setloading(false);
            return;
        }
        navigator.geolocation.getCurrentPosition((position)=>{
            const{latitude,longitude}=position.coords;
            const URL=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
            // console.log(URL);
            //fetch API:브라우저의 내장함수, 외부에 요청을 보내고, 응답을 받을수 있음
            fetch(URL)
            .then((res)=>{
                if(!res.ok){seterror("데이터 요청 실패!")}

                return res.json();})
            .then((data)=>{
                console.log(data);
                setweather(data);
                setloading(false);})
            .catch((err)=>{
                seterror("날씨데이터를 불러오는데 실패했습니다.");
                setloading(false);
            });
        });
        console.log(weather);
    },[]);
    return (
        <div className='weather'>
    {
        weather && (
        <div className='weather'>
        <h3>🌍{weather.name}</h3>
            <p className='temp'>
            <h3>{(weather.main.temp)} ℃</h3>
            <h3>{weather.weather[0].description}</h3>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}></img>
            </p>
            </div>
        )
    }
        </div>
    );
};

export default Weather;