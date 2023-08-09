// import React from 'react'
import Navbar from "./components/Navbar"
import FirstSection from "./components/FirstSection"
import "./styles.css"
import SecondSection from "./components/SecondSection"
import PlanCards from "./components/PlanCards"
import MapSection from "./components/MapSection"
import CustomersSection from "./components/CustomersSection"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="bg-slate-100">
      <Navbar/>
      <FirstSection/>
      <SecondSection/>
      <div className="flex justify-center">
        <PlanCards titulo="Gratis" precio={0} plan={1}/>
        <PlanCards titulo="Standard" precio={9} plan={2}/>
        <PlanCards titulo="Premium" precio={12} plan={3}/>
      </div>
      <MapSection/>
      <CustomersSection/>
      <Footer/>
    </div>
  )
}

export default App