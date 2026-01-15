import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Sidebar from './sidebar/Sidebar'






function App() {
  const [contact, setContact] = useState(true)

 
     



  return (
    <>
      {contact ? <Sidebar setContact={setContact} /> : <></>}
      <div className="home">

        <Navbar setContact={setContact} /> 
        <Section />


        <Footer />
      </div>
    </>
  )
}

export default App
