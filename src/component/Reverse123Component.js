import React from 'react'

import { Link } from 'react-router-dom';
import { useState } from 'react';



export default function Reverse123() {
    return (

        <body className="bg-main bg-no-repeat bg-cover bg-center bg-fixed font-Jim h-[100vh]">

            <h1 className="text-[12rem] text-yellow-200 font-bold text-center pt-9">Reverse 123</h1>

            <div className="flex">
                <p className="text-6xl text-white font-bold py-36 mx-24 ">Enter a number: </p>
                <input className="max-h-full my-36 w-full mx-24 text-6xl" id="reverseNumber" type="text"></input>
            </div>


            <p id="reverse123Output" className="text-8xl text-white font-bold text-center mt-6"> holder </p>





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
                    <button id="reverse123Btn" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-6xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
        
border-4 border-black w-96 h-32 my-16  rounded-full"> Reverse 123</button>

                </div>


            </div>



            <script src="/scripts/reverse123.js"></script>
        </body>


    )
}


