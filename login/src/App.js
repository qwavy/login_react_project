import { Routes, Route, Link } from 'react-router-dom'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Error from './pages/Error'
import About from './pages/About'
import {useState} from 'react'
function App() {
  const [data,SetData] = useState([{username:'pasha',password:12}])
  // const data = ['asd','asdf']
  return (
    <div>
      <div>
        <Link to='/'>Home  </Link>
        <Link to='sign-in'>
          SignIn   </Link>
        <Link to='sign-up'>SignUp</Link>
        <Link to='about'>About</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' data={data} element={<SignUp />} />
        <Route path='*' element={<Error />} />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App;
