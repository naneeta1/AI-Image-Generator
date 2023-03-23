import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets';
import {getRandomPrompt} from '../utils';
import { Loader, Field } from '../form_components';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
 
    prompt:'Enter your Text',
    photo: '',  
  });
  const [generateImg, setGenerateImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGenerateImg(true);
        const response = await fetch('http://localhost:7000/api/v1/general', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: form.prompt,
          }),
        });

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (err) {
        alert(err);
      } finally {
        setGenerateImg(false);
      }
    } else {
      alert('Please provide proper prompt');
    }
  };
  const handleSubmit =()=>{

  }

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const handleSurpriseMe =()=>{
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({...form, prompt:randomPrompt});
  }

  return (
    <section className='max-w-7xl mx-auto'>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className='font-extrabold text-[#222328] text-[32px] items-center'>AI Image Generator</h1>
        <p className='mt-2 text-[#666e75] text-[146x] max-w-[500px]'>Create the collection of imaginative
         visually stunning images through DALL-E-AI and share them with community.</p>
    </div>
    <div className="flex justify-center">
    <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
      <div className='flex flex-col gap-4'>
       
        <Field 
            type='text'
            name='prompt'
            placeholder={form.prompt}
            form={form.prompt }
            handleChange={handleChange}
          />

        <div class="flex justify-center">
            <button type='button' onClick={handleSurpriseMe} 
              className='text-white bg-black font-medium rounded-md text-sm  px-5 py-2.5 mb-2'>
              Generate Prompt
            </button>

            <button type='button' onClick={generateImage} className='text-white bg-black font-medium rounded-md text-sm  px-5 py-2.5 ml-6 mb-2'>
              {generateImg ? 'Generating...':'Generate Image'}
            </button>
      </div>
        <div className='relative bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:boder-blue-500 w-64 p-3 
          h-54 flex justify-center items-center ml-6'>
        {form.photo ? (<img src={form.photo} alt={form.prompt}
        className='w-full h-full object-contain' />):
        (<img src={preview} alt={preview} 
        className='w-9/12 h-9/12 object-contain opacity-40 ml-5'/>)}
        {generateImg && (
          <div className='absolute inset-0 flex justify-center items-center bg-[rgba(0,0,0,0,0.5)]
           rounded-lg '>
            <Loader />
          </div>
        )}
        
       </div>
      </div>
     
      
    </form>
    </div>
    </section>
  )
}

export default CreatePost