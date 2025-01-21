import React from 'react'
import Dot from './Dot'

const Sliding = ({content}) => {
  return (
    <>
    <div className="d-flex align-items-center gap-1 hov w-50   ">
                            <div className="bar1 para"></div>
                            <Dot />
                           
                            <p className='p-0 m-0 fw-bold '>{content}</p>
                            <div className="bar3"></div>
                        </div>
    </>
  )
}

export default Sliding