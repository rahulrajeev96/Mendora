
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Chatassis from './pages/Chatassis'
import Crisishelp from './pages/Crisishelp'
import Learnandrso from './pages/Learnandrso'
import Moodtrack from './pages/Moodtrack'
import Shareanony from './pages/Shareanony'
import Loginpage from './pages/Loginpage'
import RegisterPage from './pages/RegisterPage'
import MoodGraph from './pages/Moodgraph'



      



function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Landing/>} ></Route>
      <Route path='/home' element={<Home/>} ></Route>
      <Route path='/chat-assistant' element={<Chatassis/>} ></Route>
      <Route path='/crisis-help' element={<Crisishelp/>} ></Route>
      <Route path='/learn-and-resources' element={<Learnandrso/>} ></Route>
      <Route path='/mood-tracker' element={<Moodtrack/>} ></Route>
      <Route path='/share-anonymously' element={<Shareanony/>} ></Route>
      <Route path='/login' element={<Loginpage/>}></Route>
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/mood-cal-graph' element={< MoodGraph/>}></Route>
     
      


      </Routes>
  )
}

export default App
