import React from 'react'

const Rescard = (props) => {
 const {name,cloudinaryImageId,areaName,avgRating}=props.data.info;
 const{deliveryTime}=props.data.info.sla;
                                                    
  return (
    <div className='card bg-slate-100 hover:bg-slate-300 border border-2 rounded-5'>
     <div className='image-container'>
     <img className="card-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
     </div>
    
    
    
    <div className='total-des'>
    <div className='card-title'>
        <h4 className='t fw-bold'>{name}</h4>
    </div>
   
   <div className='pt-2 card-des'>
   <p className='card-text fs-5 fw-medium' > {avgRating} <i class="fa-solid fa-star" style={{"color": "#66c83c"}}></i></p>
        <p className='card-text fs-5 fw-semibold'> {deliveryTime} mins </p>
   </div>
        
        <p className='py-4 card-text fw-medium'>
     {areaName} </p>
    </div>
    </div>
    
  );
};

 export const withPromotedLabel=(Rescard) =>{
    return(props)=>{
      return(
        <div className=''>
          <label className='bg-gray-500 text-white w-[100] text-center rounded-tl-3xl relative top-7 left-1 z-1'>Top Rated</label>
          <Rescard {...props}/>
        </div>
      
      )
    }
  }
  

export default Rescard