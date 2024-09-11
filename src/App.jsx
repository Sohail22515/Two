import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
// import { Button } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Video from './components/Video'
import UpLoad from './components/UpLoad'
import Login from './components/Login'
import SignUp from './components/SignUp'


function App() {

  return (
    <>
     <Router>
      <Header/>
      <Routes>
        <Route path='sohail22515.github.io/Two/' element={<Home/>} ></Route>
        <Route path='/videos' element={<Video/>} ></Route>
        <Route path='/upload' element={<UpLoad/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/signup' element={<SignUp/>} ></Route>
      </Routes>
      <Footer/>
     </Router>
    </>
  )
}

export default App
