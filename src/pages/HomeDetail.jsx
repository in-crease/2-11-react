import React from 'react'
import { useParams } from 'react-router-dom'

const HomeDetail = ({data}) => {
  const {id} = useParams()
  let newData = data.filter(item=> item.id == id)[0]

  return (
    <div className='flex justify-center items-center'>
      <img src={newData.img} alt="" />
      <div>
      <h1 className='text-3xl'>{newData.name}</h1>
      <h1 className='text-3xl pt-[15px] pb-[15px]'>{newData.description}</h1>
      <h1 className='text-3xl text-sky-600'>${newData.price}</h1>
      <div>
        <button className='bg-amber-600 text-white w-[150px] h-[50px] rounded-3xl mt-[100px] cursor-pointer'>Add to card</button>
      </div>
      </div>
    </div>
  )
}

export default HomeDetail