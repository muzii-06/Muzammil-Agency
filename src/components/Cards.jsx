import React from 'react'
import Sliding from './Sliding'
import { gallery_data } from '../data/gallery_data'

const Cards = ({contentNumber}) => {
  return (
    <>
    <div className="card my-gallerycard p-0 bg-transparent rounded-0 position-relative">
        <div className="p-3">
        <img width={"100%"} src={gallery_data[contentNumber].img} alt="" />
        <div className="overlay position-absolute w-100">
            <h2 className='fw-bolder'>{gallery_data[contentNumber].heading}</h2>
            <p>{gallery_data[contentNumber].desc}</p>
            <Sliding content="Read more" />
        </div>
        </div>
    </div>
    </>
  )
}

export default Cards