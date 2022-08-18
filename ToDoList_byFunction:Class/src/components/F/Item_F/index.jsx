import {React,useState} from 'react'
import {useRecoilState } from 'recoil';
import { todosState} from '../recoil/index'
import storage from '../model/storage'

export default function Item(props) {

    var {id,done,text,editTodo}=props
    const [todos,setTodos] = useRecoilState(todosState);
    const [mouse,setMouse] = useState(false)

    const handleDel=(id)=>{
        const ntodos=todos.filter((todoObj)=>{
            return todoObj.id!==id
        })
        setTodos(ntodos)
        storage.set('todolist',ntodos);
    }

    const handleCheck=(id)=>{
        const ntodos=todos.map((todoObj)=>{
            if(todoObj.id===id) return {...todoObj,done:!done}
            else return todoObj
        })
        setTodos(ntodos)
        storage.set('todolist',ntodos);
    }

    const handleEdit=()=>{
        var input=prompt("请修改任务")
        if(input!==''){
            editTodo(input,id)
        }
    }

    return (
        <li 
        style={{backgroundColor:mouse?'#ddd':'#fff' }}
        onMouseEnter={()=>setMouse(true)} 
        onMouseLeave={()=>setMouse(false)}>
            <label>
                <input type="checkbox" checked={done} onChange={()=>handleCheck(id)}/>
                <span>{text}</span>
            </label>
            <button className="btn btn-danger" 
                    onClick={()=>handleEdit(id)} 
                    style={{display:mouse?'block':'none'}}>编辑</button>
            <button className="btn btn-danger" 
                    onClick={()=>handleDel(id)} 
                    style={{display:mouse?'block':'none'}}>删除</button>
        </li>
    )
}
