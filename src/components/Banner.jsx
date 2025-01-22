import React from 'react'
import { GoHorizontalRule } from "react-icons/go";
import { FaFacebookF,FaInstagram,FaTwitter,FaPinterestP } from "react-icons/fa";
import Dot from './Dot';
import { GoDotFill } from 'react-icons/go'
import { FaPlay } from "react-icons/fa";
import Sliding from './Sliding';

const Banner = () => {
  return (
    <>
   <div className="container-fluid position-relative">
    <div className="row align-items-center postion-relative ">
        <div className="col-xl-6">
            <div className="row g-lg-4 g-sm-0 align-items-center ">
                <div className="col-3 d-flex flex-column gap-5 align-items-center justify-content-between ">
                    <div className="d-flex  flex-column gap-5 align-items-end justify-content-betweeen ">       
                <FaFacebookF size={30} className='text-secondary' />
                <FaInstagram size={30} className='text-secondary' />
                <FaTwitter size={30} className='text-secondary' />
                <FaPinterestP size={30} className='text-secondary' />
                </div>
                <div className="scrolling d-flex flex-column align-items-center justify-content-center gap-5   ">

                <div className="d-flex flex-column justify-content-center align-items-center gap-1">
                <Dot size={25} moving={true} className="p-0 m-0" />
                <div className="bar-move">

                <div className="bar2"></div>
                </div>
              
                </div>
                <p className=" scroll  fw-bolder">Scroll</p>
                </div>
                    
                </div>
                <div className="col-sm-7 col-9  d-flex   flex-column gap-4">
                    <div className="d-flex align-items-center gap-3">

                    <div className="bar-front">
                      
                    </div>
                    <div className="dot">
                        <Dot size={25} moving={true}  />
                    </div>
                    <h1  className="fs-4 p-0 m-0 text-secondary ">
                    Innovative Ideas
                    </h1>
                    </div>
                    <h1 className='fw-bolder font-h1'>We Offer You <span className='red-color m-0 p-0'>  A Digital </span> Platform  <GoDotFill className='red-color' size={25}/></h1>
                    <p className="para">
                    Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Nisl purus in mollis nunc sed id sempe egestas quis ips. 
                    </p>
                    <div className="d-flex justify-content-between">
                        <Sliding content="Get Started" />
                        <div className="d-flex gap-2 align-items-center justify-content-center">
                            <div className="video-icon">
                                <FaPlay className='play' size={22}/>
                            </div>
                            <p className='p-0 m-0 fw-bold'>View Video</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-6 front-image">
        <img className='  ' width={'100%'} height={'100%'} style={{objectFit:"contain"}} src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Slider-1-Image-1-1536x1347.jpg" alt="" />
        </div>
    </div>

   </div>
             
    </>
  )
}

export default Banner
