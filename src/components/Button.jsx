import React from 'react'
import { GoDotFill } from "react-icons/go";

const Button = ({content}) => {
  return (
    <>
    <button className="my-btn py-3 px-4 border">
        <div className="d-flex align-items-center gap-2 justify-content-center">
            <div className="icon">
        <GoDotFill />
            </div>
        <p className='text-white p-0 m-0 btn-content'>
            {content} 
        </p>
        </div>

    </button>
    </>
  )
}

export default Button