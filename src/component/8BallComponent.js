import React from 'react'

import { Link } from 'react-router-dom';
import { useState } from 'react';

import ball from '../assets/ball.png'

export default function EightBall() {
    const [inputField, setInputField] = useState('');

    return (
        <body className="bg-main bg-no-repeat bg-cover bg-center bg-fixed font-Jim h-[100vh]">

            <h1 className="text-[12rem] text-yellow-200 font-bold text-center pt-9">8Ball</h1>

            <div className="flex">
                <p className="text-6xl text-white font-bold  mx-24 ">Enter a question: </p>
                <input className="max-h-full  w-full mx-24 text-6xl" id="ballQuestion" type="text"></input>
            </div>


            <div className="flex justify-center items-center pt-24">
                <p id="ballOutput" className="text-8xl text-white font-bold pr-36"> Click on the 8ball for an answer </p>


                <img src={ball} alt="A Magic Eight Ball"></img>
                
            </div>





            <div className="flex justify-end fixed bottom-4">

                <div className="pl-10">
                    <Link to='/'>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-6xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
        
border-4 border-black w-96 h-32 my-16 rounded-full"> Back</button>
                    </Link>
                </div>

            </div>


            <div className="flex justify-end fixed bottom-4 right-0">


            </div>

        </body>

    )
}
