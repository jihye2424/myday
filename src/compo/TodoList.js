import React from 'react';

const TodoList = ({todos,onDelete,ontoggle}) => {
    if(todos.length===0){
        return <p>할 일이 없습니다</p>;
    }
    return (
             <ul >
                {todos.map((item)=>{
                    return (
                    <li  key={item.id}>
                        <input type="checkbox" onChange={()=>{ontoggle(item.id)}} checked={item.done}/>
                        <sapn style={{textDecoration:item.done ?'line-through':'none'}}>{item.todo}</sapn>
                        <button onClick={()=>{onDelete(item.id)}}>삭제</button>
                    </li>
                    );
                })
                }
                
             </ul>
    );
};

export default TodoList;