import React from 'react'
import Sliding from './Sliding'
import Cards from './Cards'

const Projects = () => {
  return (
    <>
   

    <div className="row p-3 align-items-center justify-content-center " >
        <div className="col-lg-4 p-5  ms-auto">
            <div className="circle-add position-relative">
            <div className="circle position-absolute"></div>
            <h2 className='display-3 fw-bold '>All Projects</h2>
            </div>
            <p className=" just text-secondary ">
            Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Euismod nisi porta lorem mollis aliquam ut porttitor. In hac habitasse platea dictumst. Amet massa vitae tortor condimentum lacinia quis.
            </p>
            <Sliding content="View All" />
        </div>
        <div className=" row col-lg-7">
            <div className="col-lg-6">

        <Cards contentNumber={3} />
            </div>
            <div className="col-lg-6">

        <Cards contentNumber={4 } />
            </div>
        
        
        </div>
    </div>
    
    </>
  )
}

export default Projects