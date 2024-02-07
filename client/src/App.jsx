import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Users from './Users';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import Terms from './Terms';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>}></Route>
          <Route path='/create' element={<CreateUser/>}></Route>
          <Route path='/update' element={<UpdateUser/>}></Route>
          <Route path='/terms' element={<Terms/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
