import React from 'react'


import {Link} from 'react-router-dom'


const Home = ({data}) => {

 
  
  return (
    <div className='grid grid-cols-4 my-4 mx-3 gap-4'>
      {data.map(({name, img, id, price, description})=> {
        return ( <Link key={id} to={`/home/${id}`}>
            <div key={id} className='shadow rounded-xl border p-3'>
              <img src={img} alt="" />
              <h1>{name} </h1>
              <h1 className='mb-3'>{description} </h1>
              <span className='p-1 text-2xl text-sky-400 text-center'>${price}</span>
            </div>
          </Link>)
  
      })}
    </div>
  )
}

export default Home