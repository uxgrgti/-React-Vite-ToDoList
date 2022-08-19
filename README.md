# ToDoList-React-Vite-202208
**简介**：用Vite和React实现简单ToDoList，其中router仅为了分别展示函数式组件和类式组件两种写法的TodoList，两种写法的功能相同。  
   
!!!!!注意：需要把文件名中的:删掉或者改掉才能用npm run dev运行   
  
## 项目依赖的版本号
ToDoList_byFunction:Class   
├── @types/react-dom@18.0.6    
├── @types/react@18.0.15    
├── @vitejs/plugin-react@2.0.0   
├── react-dom@18.2.0   
├── react-router-dom@6.3.0   
├── react@18.2.0  
├── recoil@0.7.4  
└── vite@3.0.2  
## 实现功能
1.增加List  
2.删除List  
3.修改List  
4.local storage暂存  
## 项目目录
~~第一次做项目，目录很不规范(dbq)~~ 
  
ToDoList_byFunction:Class   
+ public              -- 项目公用文件
  - vite.svg
+ src                -- 源文件目录
  + assets
    + react.svg
  + **components**
    + C  --用类式组件实现的todolist  
      + Footer_C
      + Header_C
      + Item_C
      + model  localstorage的封装 下同  
    + F  --用函数式组件实现的todolist  
      + Header_F
      + Item_F
      + List_F
      + model
      + recoil --类式和函数式公用的recoil 也可以不共用  
    + pages
      + Class.jsx --类式组件todolist首页  
      + Func.jsx  --函数式组件todolist首页
    + **App**.jsx --把两个todolist用react-router写在一起
    + **index**.css --样式
    + **main**.jsx
+ .gitgnore   -- git的管理配置文件
+ index.html   -- 项目的首页
+ package-lock.json  --项目包的锁定文件，用于防止包版本不一样导致的错误
+ vite.config.js  
