import React from 'react'

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { fetchLessThan } from '../services/DataService';



export default function LessThanOrGreater() {

    const getResult = async () => {
        if (num1 && num2) {
            const response = await fetchLessThan(num1, num2);
            setResult(response);
        }
        else{
            setResult()
        }

    }

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');



    return (

<div className="bg-main bg-no-repeat bg-cover bg-center bg-fixed font-Jim h-[100vh]">

    <h1 className="text-[10vw] text-yellow-200 font-bold text-center"> &gt;||&lt;</h1>

<div className="flex mx-12 items-center">
<p className="text-6xl text-white font-bold pe-6">Enter a Number: </p>
    <input onChange={(ele) => setNum1(ele.target.value)} className="max-h-full w-[50%] text-6xl" id="num1" type="text"></input>
</div>
<div className="flex mx-12 py-20 items-center">
<p className="text-6xl text-white font-bold pe-6 ">Enter another Number: </p>
    <input onChange={(ele) => setNum2(ele.target.value)} className="max-h-full w-[50%] text-6xl" id="num2" type="text"></input>
</div>
    

<p id="lessthanOutput" className="text-7xl text-white font-bold text-center mt-6"> {result} </p>





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
        
border-4 border-black w-96 h-32 my-16  rounded-full" onClick={() => getResult()}> &gt;||&lt;
        </button>

    </div>


</div>



</div>
)
}