import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter ,Route ,Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage'
import Footer from './components/Footer/Footer'
import Complaints from './components/Complaints/Complaints'
import Pcspec from './components/Pcspec/Pcspec'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/complaints' element={<Complaints />}/>
          <Route path='/pcspec' element={<Pcspec />}/>


        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App
