// import React from 'react'
import Navbar from "./components/Navbar"
import FirstSection from "./components/FirstSection"
import "./styles.css"
import SecondSection from "./components/SecondSection"
import PlanCards from "./components/PlanCards/PlanCards"
import MapSection from "./components/MapSection"
import CustomersSection from "./components/CustomersSection"
import Footer from "./components/Footer"


export const BASE_URL =
  "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com";


const App = () => {
  return (
    <div className="bg-slate-100">
      <Navbar />
      <FirstSection />
      <SecondSection />
      <div className="flex flex-col justify-center sm:flex-row">
        <PlanCards />
      </div>
      <MapSection />
      <CustomersSection />
      <Footer />
    </div>
  )
}

export default App