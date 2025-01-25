import React from 'react'
import { digital_data } from '../data/digital'

export const Digital = () => {
  return (
    <>
    <div style={{background:"#15171C"}} className=" pt-5 mt-5 container-fluid   ">
        <h2 className="text-center mx-auto display-4 fw-bold  font-sty p-5">
        It's Time To Take Your Digital Marketing  To The Next Level  We Are Always Here To Help You Grow Your Business 
        </h2>
        <div className=" mx-auto">

        <div className="row justify-content-center align-items-center mx-auto container p-5">
         {digital_data.map((item,index)=>{
          return (
            <>
            <div className=" col-xl-3 col-sm-6 ">
                <div className="d-flex align-items-center  gap-4 fill ">
                  <h1 className=' sizee sty '>{item.number}</h1>  
                <div className="text-capitalize">
                <h6 className="text-secondary fs-4  m-0 p-0">
                    {item.title1}
                    </h6>
                    <h6 className="text-secondary fs-4  m-0 p-0">
                    {item.title2}
                    </h6>
                </div>
                </div>
               
                   
                
            </div>
          
            </>
          )
         })}
            
        </div>
        

        </div>
    </div>
    
    </>
  )
}
