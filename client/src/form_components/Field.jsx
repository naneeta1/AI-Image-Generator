import React from 'react';
import { preview } from '../assets';

const Field = ({ type, name, placeholder, value, handleChange, isSurpriseMe,handleSurpriseMe}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2 ml-7'>
        {isSurpriseMe && (
          <button type='button' onClick={handleSurpriseMe} 
          className='text-white bg-black font-medium rounded-md text-sm 
              px-5 py-2.5 ml-8 mb-2'>
            Generate Prompt</button>
        )}
      </div>
      <input type={type} id={name} name={name} placeholder={placeholder} 
       value={value} onChange={handleChange} required
       className='bg-gray-50 border border-black text-black
       text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3' />
       
    </div>
  )
}

export default Field;