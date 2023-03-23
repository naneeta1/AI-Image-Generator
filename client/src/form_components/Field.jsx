import React from 'react';
import { preview } from '../assets';

const Field = ({ type, name, placeholder, value, handleChange}) => {
  return (
    <div>
      <input type={type} id={name} name={name} placeholder={placeholder} 
       value={value} onChange={handleChange} required
       className='bg-gray-50 border border-black text-black
       text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3' />
       
    </div>
  )
}

export default Field;