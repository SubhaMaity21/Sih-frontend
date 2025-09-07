import Header from "../components/Header"
import Hero from "../components/Hero"
import ContentSection from "../components/ContentSection"
import BenefitsSection from "../components/BenefitsSection"


import React from "react"

function Home(){
    return (
        <div className="min-h-screen bg-white">
      
      {/* <Header /> */}
      
      
      <main className="relative">
        
        <Hero />
        
        
        <ContentSection />
        
        
        <BenefitsSection />
      </main>
      
      
      {/* <Footer /> */}
    </div>
    )
}

export default Home
