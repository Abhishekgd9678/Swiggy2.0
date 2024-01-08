import React from 'react'

const Category = (props) => {


    return (
    <div className='bg-slate-100 my-6 flex flex-col flex-wrap justify-between items-center w-auto ml-10 py-2'>
      <div className="">
      <h4 className=' text-center mb-3 p-2 font-bold text-2xl'>{props?.data?.card?.card?.title}    🔽</h4>
  
      </div>
     
    <div className='w-[500] px-5'>
    <ul className='menu-list'>
{props.data.card.card.itemCards.map((x)=>
<div className='flex justify-between'>
<div>
<li className='py-1'>{x.card.info.name}</li>
</div>
<div>
<button className=' '>Add +</button>
</div>
</div>
)}
        </ul>
    </div>
    
    </div>
  )}

export default Category;