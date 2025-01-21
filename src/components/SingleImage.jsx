import React from 'react'

const SingleImage = ({id,imageURL,imagename,imag,setImg}) => {
  return (
    <>
     <img width={"90%"}   style={{scale:`${imag ==imagename?"1":"0"}`,opacity:`${imag ==imagename?" 1":"0"}`,}} src={imageURL} alt="" className='d-block  blob-image position-absolute' />
    </>
  )
}

export default SingleImage