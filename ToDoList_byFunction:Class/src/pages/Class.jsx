import React, { Component } from 'react'
import Footer from '../components/C/Footer_C'
import Header from '../components/C/Header_C'
import List from '../components/C/List_C'
import storage from '../components/C/model/storage'

export default class App extends Component {

    state ={todos:[
        {id:'1',text:'吃饭',done:true},
        {id:'2',text:'睡觉',done:true},
        {id:'3',text:'开会',done:false},
    ]}


    addTodo=(todoObj)=>{
        const{todos}=this.state
        const nTodos=[todoObj,...todos]
        this.setState({todos:nTodos})
        storage.set('todolist',nTodos);
    }

    updateTodo=(id,done)=>{
        const {todos}=this.state
        const nTodos=todos.map((todoObj)=>{
        if(todoObj.id===id) return {...todoObj,done}
        else return todoObj
        })
        this.setState({todos:nTodos})
        storage.set('todolist',nTodos);
    }

    deleteTodo=(id)=>{
        const{todos}=this.state
        const nTodos=todos.filter((todoObj)=>{
        return todoObj.id!==id
        })
        this.setState({todos:nTodos})
        storage.set('todolist',nTodos);
    }

    //全选or全不选
    checkAllTodo=(done)=>{
        const{todos}=this.state
        const nTodos=todos.map((todoObj)=>{
        return{...todoObj,done}
        })
        this.setState({todos:nTodos})
    }

    clearAllDone=()=>{
        const{todos}=this.state
        const nTodos=todos.filter((todoObj)=>{
        return !todoObj.done
        })
        this.setState({todos:nTodos})
        storage.set('todolist',nTodos);
    }

    componentDidMount(){
        //获取缓存的数据
        var todolist=storage.get('todolist');
        if(todolist){
            //拿到缓存的数据 自动刷新
            this.setState({
                todos:todolist
            })
        }
    }

    render() {
        return (
        <div className="container">
            <div className="wrap">
                <div className="App">
                    <Header addTodo={this.addTodo} todos={this.state.todos}/>
                    <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                    <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        </div>
        )
    }
    }
