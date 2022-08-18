import {React,useEffect} from 'react'
import List from '../components/F/List_F/index'
import Footer from '../components/F/Footer_F/index'
import Header from '../components/F/Header_F/index'
import {RecoilRoot,useRecoilState} from 'recoil'
import {todosState} from  '../components/F/recoil/index'
import storage from '../components/F/model/storage'


export default function App() {

    const[todos,setTodos]=useRecoilState(todosState)

    useEffect(() => {
        //获取缓存的数据
        var todolist=storage.get('todolist');
        if(todolist){
            //拿到缓存的数据 自动刷新
            setTodos(todolist)
        }
    },[]);

    // componentDidMount=()=>{
    //     //获取缓存的数据
    //     var todolist=storage.get('todolist');
    //     if(todolist){
    //         //拿到缓存的数据 自动刷新
    //         setTodos(todolist)
    //     }
    // }

    return (
        <div className="container">
            <div className="wrap">
                <div className="App">
                    {/* <RecoilRoot> */}
                        <Header/>
                        <List/>
                        <Footer/>
                    {/* </RecoilRoot> */}
                </div>
            </div>
        </div>
    )
}
