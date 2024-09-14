
// import './App.css'
import Login from './login'
import Signup from './signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
