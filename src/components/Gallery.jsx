import React from 'react'
import Dot from './Dot'
import Cards from './Cards'

const Gallery = () => {
  return (
    <>
    <div className="container-fluid py-5">

    <header className='d-flex align-items-center justify-content-center gap-1'>
        <div className="bar1"></div>
        <Dot moving={true} size={23}/>
        <h3 className="text-secondary">Gallery</h3>
        <Dot moving={true} size={23}/>
        <div className="bar1"></div>
        
    </header>
    <h2 className='text-center fw-bold display-5 p-3'>Our Project Portfolio</h2>
    <div className="row m-0 justify-content-center align-items-center ">
        <div className="col-lg-3 col-sm-6">
            <Cards contentNumber={0} />
        </div>
        <div className="row col-lg-9 col-sm-6">
        <div className="col-lg-8">
        <Cards contentNumber={1} />
        </div>
        <div className="col-lg-4">
        <Cards contentNumber={2} />
        </div>
        </div>
        

    </div>
    </div>
    </>
  )
}

export default Gallery