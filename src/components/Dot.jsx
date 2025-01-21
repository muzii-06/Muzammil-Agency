import React from 'react'
import { GoDotFill } from 'react-icons/go'

const Dot = ({size,moving}) => {
  return (
    <>
    <GoDotFill size={size} className={`${moving && 'scaling'}`} color="#dd4242" />
    </>
  )
}

export default Dot