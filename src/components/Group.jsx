import React from 'react'
import { group_data } from '../data/group_data'

const Group = () => {
  return (
    <>
    <div className="container-fluid my-5 p-lg-5">
        <div className="row justify-content-between ">
            {group_data?.map((item,index)=>
            {
                return(
                    <>
                    <div className="d-flex gap-5  col-lg-4 col-md-6 p-lg-3 justify-content-lg-center justify-content-md-center justify-content-center align-items-center mt-5  ">
                        <div className='col-sm-2'>
                            <img className='d-block mx-auto' width={"80px"} src={item.icon} alt="" />

                        </div>
                        <div className="d-flex flex-column col-sm-7">
                            <h3>{item.naam}</h3>
                            <p className='font-small'> {item.desc} </p>
                        </div>
                    </div>
                    </>
                )
            })}
            
        </div>
    </div>
    </>
  )
}

export default Group