import React from 'react'

import { Link } from 'react-router-dom';
import { useState } from 'react';



export default function LessThanOrGreater() {
    return (

<body className="bg-main bg-no-repeat bg-cover bg-center bg-fixed font-Jim h-[100vh]">

    <h1 className="text-[12rem] text-yellow-200 font-bold text-center pt-9"> &gt;||&lt;</h1>

<div className="flex mx-24">
<p className="text-6xl text-white font-bold  ">Enter a Number: </p>
    <input className="max-h-full  w-full  text-6xl" id="num1" type="text"></input>
</div>
<div className="flex mx-24 py-20">
<p className="text-6xl text-white font-bold  ">Enter another Number: </p>
    <input className="max-h-full  w-full  text-6xl" id="num2" type="text"></input>
</div>
    

<p id="lessthanOutput" className="text-8xl text-white font-bold text-center mt-6"> holder </p>





<div className="flex justify-end fixed bottom-4">

    <div className="pl-10">
    <Link to='/'>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-6xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
        
border-4 border-black w-96 h-32 my-16 rounded-full"> Back</button>
        </Link>
    </div>

</div>     


<div className="flex justify-end fixed bottom-4 right-0">
<div className="pr-10">
        <button id="lessthanBtn" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-6xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
        
border-4 border-black w-96 h-32 my-16  rounded-full"> &gt;||&lt;
        </button>

    </div>


</div>



</body>
)
}