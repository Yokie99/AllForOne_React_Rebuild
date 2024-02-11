import React from 'react'

import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function WakeUp() {
    const [inputField, setInputField] = useState('');

    return (

        <body class="bg-main bg-no-repeat bg-cover bg-center bg-fixed font-Jim h-[100vh]">

            <h1 class="text-[12rem] text-yellow-200 font-bold text-center pt-9">Wake Up</h1>

            <div class="flex mx-24">
                <p class="text-6xl text-white font-bold  ">Whats your name? : </p>
                <input class="max-h-full  w-full  text-6xl" id="wakeUpName" type="text"></input>
            </div>
            <div class="flex mx-24 py-20">
                <p class="text-6xl text-white font-bold  ">When did you wake up?: </p>
                <input class="max-h-full  w-full  text-6xl" id="wakeUpTime" type="text"></input>
            </div>


            <p id="wakeUpOutput" class="text-8xl text-white font-bold text-center mt-6"> holder </p>





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
                    <button id="wakeUpBtn" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-6xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
    
border-4 border-black w-96 h-32 my-16  rounded-full"> Wake Up</button>

                </div>


            </div>




        </body>
    )
}
