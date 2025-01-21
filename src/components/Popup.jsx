import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { ImageData } from '../data/image_data';
import SingleImage from './SingleImage';
const Popup = ({open,setOpen}) => {
  const[close,setClose]=useState(false);
  
  const[imag,setImg]=useState("blog")
  
  return (

    <>
  
    <div className="container-fluid pop-up position-fixed top-0 d-flex justify-content-center align-items-center" style={{
        width:"100%",height:"100%",
    }}>
      {/* <div onMouseOver={() => setClose(true)} onMouseLeave={()=>setClose(false)} className='position-absolute text-danger ' style={{top:'10px',right:'10px',}}>

        <IoMdClose className="text-danger cross" size={40}  style={{ top:'10px',right:'10px', scale:`${close ? "0" : "1"}`,}} / >
      </div> */}
        <p onClick={()=>setOpen(false)}   className=' position-absolute  text-danger fw-bolder cross-text   ' style={{ top:'15px',right:'10px',}} >Close</p>
       <div className="blob-images w-50 position-relative">
       {/* /* scale:`${close ? "1":"0"}`, */}
       
        {ImageData?.map((item,index)=>
        {
          return <SingleImage key={index} {...item} imag={imag} setImg={setImg}/>
        })}
        {/* <img  className='d-block  blob-image position-absolute' style={{scale:`${imag =='blog'?"1":"0"}`,opacity:`${imag =='blog'?"1":"0"}`,}} src={images[0]} alt="" /> */}
       </div>

        <ul className='display-1 list-unstyled stroke-items text-uppercase w-25'>
          {ImageData?.map((item,index)=>
          {
            return(
              <li onMouseOver={()=>setImg(item?.imagename)} className='stroke'>{item?.imagename}</li>
            );
            

              
            
          })}
            {/* <li onMouseOver={()=>setImg("career")} className='stroke'>career</li>
            <li onMouseOver={()=>setImg("contact")} className='stroke'>contact</li>
            <li onMouseOver={()=>setImg("services")} className='stroke'>services</li>
            <li onMouseOver={()=>setImg("project")} className='stroke'>project</li> */}
        </ul>
    </div>
    </>
  )
}

export default Popup