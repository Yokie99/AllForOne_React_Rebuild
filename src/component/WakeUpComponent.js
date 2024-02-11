import React from 'react'

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { fetchWakeUp } from '../services/DataService';

export default function WakeUp() {


    const getResult = async () => {
        if (name && time) {
            const response = await fetchWakeUp(name, time);
            setResult(response);
        }
        else{
            setResult("Fill all input fields!")
        }

    }

    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [result, setResult] = useState('');

    return (

        <div className="bg-main bg-no-repeat bg-cover bg-center bg-fixed font-Jim h-[100vh]">

            <h1 className="text-[12rem] text-yellow-200 font-bold text-center pt-9">Wake Up</h1>

            <div className="flex mx-24">
                <p className="text-6xl text-white font-bold  ">Whats your name? : </p>
                <input onChange={(ele) => setName(ele.target.value)} className="max-h-full  w-full  text-6xl" id="wakeUpName" type="text"></input>
            </div>
            <div className="flex mx-24 py-20">
                <p className="text-6xl text-white font-bold  ">When did you wake up?: </p>
                <input onChange={(ele) => setTime(ele.target.value)} className="max-h-full  w-full  text-6xl" id="wakeUpTime" type="text"></input>
            </div>


            <p id="wakeUpOutput" className="text-8xl text-white font-bold text-center mt-6"> {result} </p>





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
                    <button id="wakeUpBtn" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-6xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
    
border-4 border-black w-96 h-32 my-16  rounded-full" onClick={() => getResult()}> Wake Up</button>

                </div>


            </div>




        </div>
    )
}
