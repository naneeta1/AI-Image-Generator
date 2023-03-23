import React from 'react';
import {BrowserRouter, Route, Link,Routes} from 'react-router-dom'; 
import {logo} from './assets';
import {CreatePost} from './Components'
import About from './Components/About';

const App = () => {
  return (
   <BrowserRouter>
   <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
   <Link to="/">
    <img src={logo} alt='logo' className='w-28 object-contain'/>
  </Link>
   <Link to="/about" className='font-inter font-medium bg-black text-white px-4 py-2 rounded-md'>About</Link>
   </header>
   <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
    <Routes>
      <Route path='/' element={<CreatePost />} />
      <Route path='/about' element={<About />} />
    </Routes>

   </main>
   </BrowserRouter>
  )
}

export default App