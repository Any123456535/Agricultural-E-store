import React from 'react'
import { Deal } from '../../../../types/dealTypes'
import { useNavigate } from 'react-router-dom'

const DealCard = ({deal}:{deal:Deal}) => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/products/${deal.category.categoryId}`)} className='w-full cursor-pointer p-2'>
        <img className=' w-full h-[12rem] object-cover object-top' src={deal.category.image} alt="" />
        <div className='border-4  bg-teal-600 text-white p-2 text-center h-28'>
            <p className='text-lg font-semibold'>{deal.category.categoryId.split("_").join(" ")}</p>
            <p className='text-2xl font-bold'>{deal.discount}% OFF</p>
            <p className='text-balance text-lg'>shop now</p>

        </div>
    </div>
  )
}

export default DealCard