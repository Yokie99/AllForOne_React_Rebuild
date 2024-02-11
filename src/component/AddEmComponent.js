import React from 'react'

import { Link } from 'react-router-dom';
import Plus from '../assets/Plus.png'

import { useState } from 'react';
import { fetchAddEm } from '../services/DataService';

export default function AddEm() {

    const getResult = async () => {
        if (num1 && num2) {
            const response = await fetchAddEm(num1, num2);
            setResult(response);
        }
        else{
            setResult("Enter 2 numbers please")
        }

    }

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    return (
        <div className="bg-main bg-no-repeat bg-cover bg-center bg-fixed font-Jim h-[100vh]">

            <h1 className="text-[12rem] text-yellow-200 font-bold text-center pt-9">Add Em</h1>


            <p className="text-6xl text-white font-bold text-center pb-36">Enter 2 Numbers </p>

            <div className="flex justify-between align-middle pb-28">
                <input onChange={(ele) => setNum1(ele.target.value)} className="w-3/6 text-6xl mx-8" id="addEmOne" type="text"></input>
                <img src={Plus} alt="Plus symbol"></img>
                <input onChange={(ele) => setNum2(ele.target.value)} className=" w-3/6 text-6xl mx-8" id="addEmTwo" type="text"></input>
            </div>

            <p id="addEmOutput" className="text-8xl text-white font-bold text-center mt-6"> {result} </p>

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
                    <button id="addEmBtn" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-6xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
            
border-4 border-black w-96 h-32 my-16  rounded-full" onClick={() => getResult()}> Add Em</button>

                </div>


            </div>




        </div>

    )
}
