import React from 'react'
import { useRecoilState } from 'recoil';
import { todosState } from '../recoil/index'


export default function Footer() {

    const [todos,setTodos] = useRecoilState(todosState);
    const doneCount=todos.reduce((pre,todo)=>{return pre+(todo.done?1:0)},0)
    const total=todos.length

    const handleAllCheck=(event)=>{
        const ntodos=todos.map((todoObj)=>{
            return {...todoObj,done:event.target.checked}
        })
        setTodos(ntodos)
    }

    const handleClearAllDone=()=>{
        const ntodos=todos.filter((todoObj)=>{
            if(todoObj.done===false) return {todoObj}
        })
        setTodos(ntodos)
    }

    return (
        <div className='footer'>
            <label>
                <input type="checkbox" 
                        onChange={handleAllCheck}
                        checked={doneCount===total?true:false}/>
                <span>已完成{doneCount}/全部{total}</span>
            </label>
            <button className="btn btn-danger" onClick={handleClearAllDone}>清除已完成任务</button>
        </div>
    )
}
