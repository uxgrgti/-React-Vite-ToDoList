import React from 'react'
import Class from './pages/Class'
import Func from './pages/Func'
import { Link,Route,Routes,Navigate} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <div>
        <h2>To Do List</h2>
      </div>
        <Link to="/class">Class</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/func">Func</Link>
        <hr/>
        <Routes>
          <Route path="/class" element={<Class/>}/>
          <Route path="/func" element={<Func/>}/>
          <Route path="/func" element={<Navigate to="/Class"/>}/>
        </Routes>
        <hr/>
    </div>
  )
}
