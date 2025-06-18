import { useState } from 'react';

const LoginForm = ({onLogin}) => {
    const[user, setuser]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        //trim : 양쪽여백을 없애는작업
        const trimmed =user.trim();
        if(trimmed){onLogin(user); setuser('')}
        onLogin(user);
        // setuser('');
    }
    return (
        <form onSubmit={handleSubmit} className='login'>
            <h2>당신의 이름을 입력하세요</h2>
            <input placeholder='이름' 
            type='text' 
            value={user} 
            onChange={(e)=>{setuser(e.target.value)}}/>
            <button type='submit'>입력하기</button>
        </form>
    );
};

export default LoginForm;