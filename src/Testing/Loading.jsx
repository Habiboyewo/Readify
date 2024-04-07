import React from 'react'
import {RotatingLines} from "react-loader-spinner"



const Loading = () => {
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center bg-sucess'>
        <RotatingLines
          strokeColor="rgb(182, 139, 110)"
          strokeWidth="3"
          animationDuration="0.75"
          width="200"
          visible={true}
        />
        <h1>LOADING...................</h1>
    </div>
  )
}

export default Loading