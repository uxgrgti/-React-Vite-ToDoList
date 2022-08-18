import React, { Component } from 'react'

export default class index extends Component {
    //全选or全不选
    handleCheckAll= (event)=>{
        //console.log('event.target.checked', event.target.checked)
            this.props.checkAllTodo(event.target.checked)
        }

    //检查已完成的项目
    handleClareAllDone=()=>{
    this.props.clearAllDone()
    }
    render() {
        const {todos}=this.props
        const doneCount=todos.reduce((pre,todo)=>{return pre+(todo.done?1:0)},0)
        const total=todos.length

        return (
            <div className='footer'>
                <label>
                    <input type="checkbox" 
                        onChange={this.handleCheckAll}
                        checked={doneCount===total&&total!==0 ?true:false} />
                    <span>已完成{doneCount}/全部{total}</span>
                </label>
                <button onClick={this.handleClareAllDone} 
                        className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}