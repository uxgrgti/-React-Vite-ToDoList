import React, { Component } from 'react'

let num = 0
export default class index extends Component {

    handleKeyUp=(event)=>{
        const {keyCode,target}=event
        if(keyCode!==13) return
        if(target.value.trim()===''){
            alert('输入不能为空')
            return
        }
        num+= 1
        const todoObj={id: num.toString()+target.value,text:target.value,done:false}
        this.props.addTodo(todoObj)
        target.value=''//提交后清空input
    }

    render() {
        return (
            <div className="header">
                <input onKeyUp={this. handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}