import React from 'react'


import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="bg-main bg-no-repeat bg-cover bg-center bg-fixed font-Jim">

            <h1 className="text-[12vw] text-yellow-200 font-bold text-center">MiniQuest</h1>
            <div className="border-4 border-yellow-200 sm:mx-36 pb-12">

                <div className="grid grid-cols-3">
                    <div className="flex flex-col justify-center items-center ">
                        <Link to="sayHello">
                            <button id="sayHelloBtn" type="button" className="text-white bg-green-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-[4vw] px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
            
            border-4 border-black w-[25vw] h-[9vw] my-16  rounded-full"> Say Hello</button>
                        </Link>

                        <Link to="AddEm">
                            <button type="button" className="text-white bg-purple-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  sm:text-[4vw] text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
            
            border-4 border-black w-32 h-[9vw] sm:w-[25vw]  my-16  rounded-full">Add Em</button>
                        </Link>

                        <Link to="WakeUp">
                            <button type="button" className="text-white bg-teal-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  sm:text-[4vw] text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
            
            border-4 border-black w-32 h-[9vw] sm:w-[25vw]  my-16  rounded-full">Wake Up</button>
                        </Link>
                    </div>


                    <div className="flex flex-col justify-center items-center ">

                        <Link to="LessThanOrGreater">
                            <button type="button" className="text-white bg-yellow-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  sm:text-[4vw] text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
            
            border-4 border-black w-32 h-[9vw] sm:w-[25vw]  my-16  rounded-full"> &gt; || &lt;
                            </button>
                        </Link>
                        <Link to="Madlib">
                            <button type="button" className="text-white bg-orange-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  sm:text-[4vw] text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
            
            border-4 border-black w-32 h-[9vw] sm:w-[25vw]  my-16  rounded-full">Madlib
                            </button>
                        </Link>

                        <Link to="OddOrEven">
                            <button type="button" className="text-white bg-pink-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  sm:text-[4vw] text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
            
            border-4 border-black w-32 h-[9vw] sm:w-[25vw]  my-16  rounded-full">Odd or Even
                            </button>

                        </Link>

                    </div>
                    <div className="flex flex-col justify-center items-center ">

                        <Link to="Reverse">
                            <button type="button" className="text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  sm:text-[4vw] text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
            
            border-4 border-black w-32 h-[9vw] sm:w-[25vw]  my-16  rounded-full">Reverse
                            </button>
                        </Link>

                        <Link to="Reverse123">
                            <button type="button" className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  sm:text-[4vw] text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
            
            border-4 border-black w-32 h-[9vw] sm:w-[25vw]  my-16  rounded-full">Reverse 123
                            </button>
                        </Link>

                        <Link to="EightBall">
                            <button type="button" className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  sm:text-[4vw] text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
            
            border-4 border-black w-32 h-[9vw] sm:w-[25vw]  my-16  rounded-full">8Ball
                            </button>
                        </Link>
                    </div>

                    <div></div>
                    <div className="flex justify-center py-12 ">

                        <Link to="Restaurant">
                            <button type="button" className="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  sm:text-[4vw] text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
            
            border-4 border-black w-32 h-[9vw] sm:w-[25vw]   rounded-full ">Restaurant
                            </button>
                        </Link>
                    </div>








                </div>
            </div>




        </div>
    )
}
