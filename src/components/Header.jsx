import React from 'react'
import Button from './Button'
import { GoDotFill,GoHorizontalRule } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { BsChevronRight } from "react-icons/bs";
import { menu_data } from '../data/menu_data';

const Header = ({open,setOpen}) => {
  return (
    <>
    <div className="d-flex p-4 justify-content-around align-items-center head ">
     <div className="logo d-flex align-items-center">
    <GoDotFill size={25} color='#dd4242' />
    <h2  className='text-white m-0'>Muzammil
      </h2>  
         <span className='x'>X</span>
    <GoDotFill size={25} className='text-white'  />

     </div>
        <ul className="items d-flex list-unstyled m-0 gap-5 pt-3 text-uppercase text-white  ">
       <li><IoMdClose className='ms-auto my-auto close-btn  border-0 close' size={25} /> </li>
          {menu_data?.map((item,index)=>
        {
          return(
            <>
             <li key={index}>

<div className={`my-items d-flex align-items-center ${item =='Home' && 'active'} pt-3  justify-content-between`}>
<p className='ms-1' >{item}</p>
<div className="menu-icon d-flex align-items-center justify-content-center ">
  
  <GoHorizontalRule className='bar'/>
  
  <BsChevronRight className='arrow-right'/>
</div>
</div>
</li>
            </>
          );
        })}
          
        </ul>
        <div className="d-flex align-items-center gap-5">

        <Button content="Book a Consultation" />
        <div className="d-flex flex-column gap-3 line-parent " onClick={()=>setOpen(true)}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
        </div>
    </div>
        </div>

    </>
  )
}

export default Header