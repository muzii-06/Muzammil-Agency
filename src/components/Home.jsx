import React, { useState } from 'react'
import Header from './Header'
import Popup from './Popup'
import Banner from './Banner'
import Group from './Group'
import Gallery from './Gallery'
import Projects from './Projects'
import { Digital } from './Digital'
import { Particless } from './Particles'

const Home = () => {
    const[open,setOpen]=useState(false)
  return (
   <>
   <Particless/>
    {open && <Popup open={open} setOpen={setOpen} />}
    <div className="main-blur pb-5">

    <Header open={open} setOpen={setOpen} />
    <Banner />

    </div>
    <div className="hi">

    <Group />
    </div>
    <Gallery />
    <Projects/>
    <Digital />

    </>
  )
}

export default Home;