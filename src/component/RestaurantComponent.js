import React from 'react'

import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Restaurant() {
    const [inputField, setInputField] = useState('');

    return (
        <body class="bg-main bg-no-repeat bg-cover bg-center bg-fixed font-Jim h-[100vh]">

        <h1 class="text-[12rem] text-yellow-200 font-bold text-center pt-9">Restaurant</h1>
    
    
    <p class="text-6xl text-white font-bold text-center">Choices: </p>
    <p class="text-6xl text-white font-bold text-center pb-12">[FastFood, Asian, Mexican] </p>
        
    <div class="flex pb-36">
        <p class="text-6xl text-white font-bold  mx-24 pb">Enter a choice : </p>
            <input class="max-h-full  w-full mx-24 text-6xl" id="restaurantChoice" type="text"></input>
        </div>
    
    
        
    
    <p id="restaurantOutput" class="text-8xl text-white font-bold text-center mt-6"> holder </p>
    
    
    
    
    
        <div class="flex justify-end fixed bottom-4">
    
            <div class="pl-10">
            <Link to='/'>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-6xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
        
border-4 border-black w-96 h-32 my-16 rounded-full"> Back</button>
                    </Link>
            </div>
    
       </div>     
    
    
       <div class="flex justify-end fixed bottom-4 right-0">
    <div class="pr-10">
                <button id="restaurantBtn" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-6xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
                
    border-4 border-black w-96 h-32 my-16  rounded-full"> Restaurant</button>
    
            </div>
    
    
       </div>
            
    

    </body>

    )
}
