
import { useEffect, useState } from 'react';

import Quote from './Quote';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Mainpage = ({user,onLogout}) => {
    const TODO_KEY="todos";
   const [todos,setTodos]=useState([]);
   const addTodo=(text)=>{
    /***
     * todo{id:현재시간 Date.now(),text}
     */
    const newTodo={id:Date.now(), todo:text, done:false};
    setTodos([...todos,newTodo]);

   }  
   //처음에 localstorage에 저장된 todos값이  있으면 읽어와서 설정
   useEffect(()=>{
    const saved=localStorage.getItem(TODO_KEY);
    if(saved){setTodos(JSON.parse(saved))};// 문자열을 객체로 만들어 준다
    
   },[]);
   // //todos가 변경되면 localstorage 에 저장
   useEffect(()=>{
    // if(todos.length>0){
    const saved=JSON.stringify(todos); // 객체를 문자열로
    localStorage.setItem(TODO_KEY,saved);
    // }
   },[todos])

   const deleteTodo =(id)=>{
    const update =todos.filter((item)=>{ 
        return item.id !==id;
    });
    setTodos(update);
   }
   const toggleTodo=(id)=>{
    const update=todos.map((item)=>{
        return item.id===id? {...todos, done:!item.done}:item;
    });
    setTodos(update);
   }
    return (
        <div>
            <h2>{user}님 반가워요 🖐🏻</h2>
            <button onClick={onLogout}>로그아웃</button>
            <Quote/>
            <TodoForm onAdd={addTodo}/>
            <TodoList todos={todos} onDelete={deleteTodo} ontoggle={toggleTodo}/>
        </div>
    );
};

export default Mainpage;