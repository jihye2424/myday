import { useEffect, useState } from "react";
import "./App.scss"
import LoginForm from "./compo/LoginForm";
import Time from "./compo/Time";
import Mainpage from "./compo/Mainpage";
import Weather from "./compo/Weather";
import DateFrom from "./compo/DateForm";
import Dark from "./compo/Dark";

// import bgImg from "./image/about_me.jpg"



const App = () => {
  const USER_KEY="user_name";
  const [user,setUser]=useState('');
  useEffect(()=>{
    const saved =localStorage.getItem(USER_KEY);
    if(saved){setUser(saved);}
  },[]);
  const handleLogin=(data)=>{
    localStorage.setItem(USER_KEY,data);
    setUser(data); }
  const handleLogout =()=>{
      localStorage.removeItem(USER_KEY);
      setUser('');
   
  }
  return (
    <div className="app">
      
     {/* <img src={bgImg} alt="dllawl"></img> */}
      {/* <img src="./Images/contact.jpg" alt="이미지1"/>
      <img src={`${process.env.PUBLIC_URL}/Images/contact.jpg`} alt="이미지1"/> */}
      
      <div className="up">
        <Dark/>
      <DateFrom/>
      
      </div>
      <Weather/>
     <Time/>
     {user ? (<Mainpage user={user} onLogout={handleLogout}/>):(<LoginForm onLogin={handleLogin}/>)}
  
    </div>
  );
};

export default App;

