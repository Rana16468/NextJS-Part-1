
'use client'

import React, { useState } from 'react';

const Counter = () => {

    const [counter,setCounter]=useState(0);
    return (
        <>

       <h1 className='text-4xl'>Counter:{counter}</h1>
        
       <button onClick={()=>setCounter(counter+1)} className='text-xl bg-green-500 p-3'>Increase</button>
       <button  onClick={()=>setCounter(counter-1)} className='text-xl bg-red-500 p-3'>Decrease</button>
       
        </>
    );
};

export default Counter;