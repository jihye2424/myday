import { useState } from 'react';

const TodoForm = ({onAdd}) => {
    const [task,setTask]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault(); //입력된값을 초기화시켜주는 것
        const trimmed=task.trim();
        if(trimmed){
            
            //할일 텍스트를 메인페이지(MainPage) 부모에 전달해야한다.
            onAdd(task);
            setTask('');
        }
    }
    return (
        <form className='todoform' onSubmit={handleSubmit} >
            <h2>To do list</h2>
            <input 
            value={task}
            onChange={(e)=>{setTask(e.target.value);}}
            placeholder='할 일을 입력하세요.'/>
            <button type='submit'>➕</button>
        </form>
    );
};

export default TodoForm;