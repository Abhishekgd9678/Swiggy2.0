import React, { useState } from 'react'

const Filter = () => {
        const[stext,setstext]=useState("");
  
    return (
    <>
    
    <div className='search'>
        <div><input type='text' placeholder="Search" /> </div>
        <div><button className="btn btn-warning" type='Submit'>Serach</button></div>
    </div>
    <div className='res-filters'>
        <button className='btn btn-outline-dark' type="submit">All</button>
        <button className='btn btn-outline-dark' type="submit">Top Rated</button>
        <button className='btn btn-outline-dark' type="submit">Nearest</button>
        <button className='btn btn-outline-dark' type="submit">Pocket-Friendly</button>
    </div>
    </>
  
    )
}

export default Filter