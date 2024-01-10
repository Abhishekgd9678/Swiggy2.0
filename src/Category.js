import React, { useState } from 'react'

const Category = (props) => {
  const[click,setclick]=useState(false);
  const handleclick=()=>{
setclick(!click);
  }

console.log(props);
    return (
      <>
    
     
    <div className='bg-slate-100   ml-10 py-2'>
     
      <div className="cursor-pointer"  onClick={handleclick}>
      <h4 className='font-bold text-xl pl-5 border-b-2 cursor-pointer sha'>{props?.data?.card?.card?.title}   </h4>
  
      </div>
     
    <div className='w-[700] px-5'>
    <ul className='menu-list'>
{click &&  props.data.card.card.itemCards.map((x)=>
<div className='flex flex-wrap justify-between border-b-4'>
<div className='w-50 flex flex-wrap'>
<li className='px-3 font-bold text-xl pt-4   '>{x.card.info.name}</li>
</div>
<div className=' m-2 '>
  <img className="w-36 rounded-2xl "  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+x?.card?.info?.imageId}/>
<button className='btn rounded-3xl btn-dark btn-sm'>Add +</button>
</div>
</div>
)}
        </ul>
    </div>
    
    </div>
    </>
  )}

export default Category;