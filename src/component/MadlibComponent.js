import React from 'react'

import { Link } from 'react-router-dom';
import { useState } from 'react';



export default function Madlib() {
    return (

        <body class="bg-main bg-no-repeat bg-cover bg-center bg-fixed font-Jim h-[120vh]">

            <h1 class="text-[12rem] text-yellow-200 font-bold text-center pt-9">Madlib</h1>

            <div id="hideMe" class="">
                <div class="flex mx-24">
                    <p class="text-3xl text-white font-bold  ">Superhero Name: </p>
                    <input class="max-h-full  w-full  text-3xl" id="Superhero" type="text"></input>
                </div>
                <div class="flex mx-24 py-12">
                    <p class="text-3xl text-white font-bold  ">Name of a City: </p>
                    <input class="max-h-full  w-full  text-3xl" id="city" type="text"></input>
                </div>
                <div class="flex mx-24">
                    <p class="text-3xl text-white font-bold  ">Your Favorite Animal </p>
                    <input class="max-h-full  w-full  text-3xl" id="animal" type="text"></input>
                </div>
                <div class="flex mx-24 py-12">
                    <p id="scare" class="text-3xl text-white font-bold  ">Scary Thing: </p>
                    <input class="max-h-full  w-full  text-3xl" id="scaryThing" type="text"></input>
                </div>
                <div class="flex mx-24">
                    <p id="dessert" class="text-3xl text-white font-bold  ">Your Favorite Dessert: </p>
                    <input class="max-h-full  w-full  text-3xl" id="favDessert" type="text"></input>
                </div>
                <div class="flex mx-24 py-12">
                    <p class="text-3xl text-white font-bold  ">Favorite Tv Show: </p>
                    <input class="max-h-full  w-full  text-3xl" id="TvShow" type="text"></input>
                </div>

            </div>



            <p id="madlibOutput" class="text-8xl text-white font-bold text-center mt-6"> holder </p>





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
                    <button id="madlibBtn" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-6xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
        
border-4 border-black w-96 h-32 my-16  rounded-full"> MadLib</button>

                </div>


            </div>


        </body>

    )
}


