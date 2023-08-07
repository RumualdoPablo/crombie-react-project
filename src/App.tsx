// import React from 'react'
import Navbar from "./components/Navbar"
import FirstSection from "./components/FirstSection"
import "./styles.css"
import SecondSection from "./components/SecondSection"

const App = () => {
  return (
    <div className="bg-slate-100">
      <Navbar/>
      <FirstSection/>
      <SecondSection/>
    </div>
  )
}

export default App