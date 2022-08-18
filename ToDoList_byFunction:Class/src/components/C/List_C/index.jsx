import React, { Component } from 'react'
import Item from '../Item_C'

export default class List extends Component {
    render() {
        const {todos}=this.props
        //console.log(todos)
        return (
            <ul className='list'>
            {
                (todos||[]).map((todo)=>{
                    return <Item key={todo.id} {...todo} 
                                    updateTodo={this.props.updateTodo} 
                                    deleteTodo={this.props.deleteTodo}
                                    todos={todos}/>
                })
            }
            </ul>
        )
    }
}
