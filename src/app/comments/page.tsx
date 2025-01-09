"use client";
import React from 'react';


import { useState } from 'react'; 
 
export default function Comments(){
  
        const [countClick, setCountClick] = useState(0);
        const countClickHandler = () => {
            setCountClick(countClick + 1);
        };
        
        return(  
    <div className='text-center w-screen h-[1100]
     bg-pink-300 bg-opacity-15'>
         <button className='outline outline-gray-700 w-72 h-24 outline-8 text-3xl bg-amber-950 bg-opacity-10 text-center text-amber-950' onClick={countClickHandler}>
                Click to Like:&nbsp;&nbsp;{countClick}  </button> 
                <br/>  <h2><br/>1. <input className='m-12  outline outline-4 outline-gray-500 text-amber-950 bg-white text-xs tracking-wide w-[300] h-24' type='text' placeholder='Enter your comments............'/> </h2>
                <br/>  <h2><br/>2.<input className='m-12  outline outline-4 outline-gray-500 text-amber-950 bg-white text-xs tracking-wide w-[300] h-24' type='text' placeholder='Enter your comments............'/> </h2>
                <br/>  <h2><br/>3.
              <input className='m-12  outline outline-4 outline-gray-500 text-amber-950 bg-white text-xs tracking-wide w-[300] h-24' type='text' placeholder='Enter your comments............'/> </h2>
                <br/>  <h2><br/>4.
               <input className='m-12  outline outline-4 outline-gray-500 text-amber-950 bg-white text-xs tracking-wide w-[300] h-24' type='text' placeholder='Enter your comments............'/> </h2>
           
        
           
    </div>)
}