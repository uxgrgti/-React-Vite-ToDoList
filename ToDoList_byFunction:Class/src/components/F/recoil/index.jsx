import {atom} from 'recoil';

const todosState=atom({
    key:"todosState",
    default:[
        {id:'1',text:'吃饭',done:true},
        {id:'2',text:'睡觉',done:true},
        {id:'3',text:'开会',done:false},
    ]
})

// const mouseState=atom({
//     key:"mouseState",
//     default:false
// })

export default {todosState};
export {todosState}