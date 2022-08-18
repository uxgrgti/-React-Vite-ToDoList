import React from 'react'
import { useRecoilState } from 'recoil'
import {todosState} from  '../recoil/index'
import storage from '../model/storage'

let num=0

export default function Header() {
    
    const[todos,setTodos]=useRecoilState(todosState)

    const handleAdd=(event)=>{
        if(event.keyCode!==13) return
        if(event.target.value.trim()===''){
            alert('输入不能为空')
            return
        }
        const todoObj={id:num.toString()+event.target.value,text:event.target.value,done:false}
        const ntodos=[todoObj,...todos]
        setTodos(ntodos)
        event.target.value=''//提交后清空input
        storage.set('todolist',ntodos);
    }

    num++
    return (
        <div className="header">
            <input type="text" 
                    placeholder='请输入你的任务名称，按回车键确认' 
                    onKeyUp={handleAdd}>
            </input>
        </div>
    )
}
