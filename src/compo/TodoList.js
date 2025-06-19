import React from 'react';
import DateFrom from './DateForm';

const TodoList = ({todos,onDelete,ontoggle}) => {
    if(todos.length===0){
        return <p className='nodo'>할 일이 없습니다</p>;
    }
    return (
             <ul className='list'>
                {todos.map((item)=>{
                    return (
                    <li  key={item.id} className='todolist'>
                        <input type="checkbox" onChange={()=>{ontoggle(item.id)}} checked={item.done}/>
                       
                        <sapn style={{textDecoration:item.done ?'line-through':'none'}}>
                            {item.todo}
                            </sapn>
                            <span className='tododate'> <DateFrom/></span>
                        <button onClick={()=>{onDelete(item.id)}}>🗑️</button>
                    </li>
                    );
                })
                }
                
             </ul>
    );
};

export default TodoList;