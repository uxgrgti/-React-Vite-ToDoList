import React, { Component } from 'react'

export default class Item extends Component {

    state={mouse:false}

    handleMouse=(flag)=>{
        return()=>{
            this.setState({mouse:flag})
        }
    }

    handleCheck=(id)=>{
        return(event)=>{
            this.props.updateTodo(id,event.target.checked)
        }
    }

    handleDelete=(id)=>{
        this.props.deleteTodo(id)
    }


    render() {
        const{id,text,done}=this.props
        return (
            <li 
            style={{backgroundColor:this.state.mouse?'#ddd':'#fff' }}
            onMouseEnter={this.handleMouse(true)} 
            onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{text}</span>
                </label>
                <button className="btn btn-danger" 
                        onClick={()=>{this.handleDelete(id)}} 
                        style={{display:this.state.mouse?'block':'none'}}>删除</button>
            </li>
        )
    }
}