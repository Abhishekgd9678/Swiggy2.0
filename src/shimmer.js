import React from 'react'
import Shimmercard from './Shimmercard'

const Shimmer = () => {
  return (
    <div className='Shimmer-Container'>
        {Array(20).fill().map((e,index)=>{return <Shimmercard key={index}/>})}
    </div>
    
  )

}

export default Shimmer