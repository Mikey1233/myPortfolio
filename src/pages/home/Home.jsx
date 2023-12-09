import React from 'react'
import './home.css'
import Header from '../../component/Header/Header'
import Gallery from '../../component/gallery/Gallery'
import Inprogress from '../../component/InProgress/Inprogress'
import Footer from '../../component/footer/Footer'
function Home() {
  return (
    <div className='home'>
      <Header/>
      <Gallery/>
      <Inprogress/>
      <Footer/>
    </div>
  )
}

export default Home
