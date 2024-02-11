import React from 'react'

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { fetchRestaurant } from '../services/DataService';

export default function Restaurant() {
    const getResult = async () => {
        if (inputField) {
            const response = await fetchRestaurant(inputField);
            setResult(response);
        }
        else{
            setResult("Please enter something!")
        }

    }

    const [inputField, setInputField] = useState('');
    const [result, setResult] = useState('');

    return (
        <div className="bg-main bg-no-repeat bg-cover bg-center bg-fixed font-Jim h-[100vh]">

        <h1 className="text-[12rem] text-yellow-200 font-bold text-center pt-9">Restaurant</h1>
    
    
    <p className="text-6xl text-white font-bold text-center">Choices: </p>
    <p className="text-6xl text-white font-bold text-center pb-12">[FastFood, Asian, Mexican] </p>
        
    <div className="flex pb-36">
        <p className="text-6xl text-white font-bold  mx-24 pb">Enter a choice : </p>
            <input onChange={(ele) => setInputField(ele.target.value)} className="max-h-full  w-full mx-24 text-6xl" id="restaurantChoice" type="text"></input>
        </div>
    
    
        
    
    <p id="restaurantOutput" className="text-8xl text-white font-bold text-center mt-6"> {result}</p>
    
    
    
    
    
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
                <button id="restaurantBtn" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-6xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
                
    border-4 border-black w-96 h-32 my-16  rounded-full" onClick={() => getResult()}> Restaurant</button>
    
            </div>
    
    
       </div>
            
    

    </div>

    )
}
