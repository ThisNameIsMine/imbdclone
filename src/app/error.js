'use client';

import { useEffect } from 'react';


import React from 'react'

export default function error() {
    useEffect(()=>{
        console.log(error);
    },[error]);
  return (
    <div className="text-center mt-10">
        <h1>Something went wrong.</h1>
        <button className="hover:text-amber-600" onClick={() => reset()}>Try again</button>
    </div>
  )
}
