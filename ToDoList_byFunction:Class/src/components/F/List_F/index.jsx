import {React,useState} from 'react'
import Item from '../Item_F'
import {useRecoilState} from 'recoil'
import { todosState} from '../recoil/index';
import storage from '../model/storage'


export default function List() {

    const [todos,setTodos] = useRecoilState(todosState);

    const editTodo=(text,id)=>{
        const ntodos=todos.map((todoObj)=>{
            if(todoObj.id===id) return {...todoObj,text}
            else return todoObj
        })
        setTodos(ntodos)
        storage.set('todolist',ntodos);
    }

    return (
        <ul className='list'>
        {
            (todos||[]).map((todo)=>{
                return <Item key={todo.id} editTodo={editTodo} {...todo}/>
            })
        }
        </ul>
    )
}
