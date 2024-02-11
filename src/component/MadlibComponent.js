import React from 'react'

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { fetchMadlib } from '../services/DataService';



export default function Madlib() {
    const [isActive, setIsActive] = useState(false);



    const getResult = async () => {
        if (superhero && city && animal && scary&& dessert && anime) {
            const response = await fetchMadlib(superhero, city, animal, scary, dessert, anime);
            setResult(response);
            setIsActive(true);
            
        }
        else{
            setResult("Please fill all fields!")
        }

    }

    const [superhero, setSuperHero] = useState('');
    const [city, setCity] = useState('');
    const [animal, setAnimal] = useState('');
    const [scary, setScary] = useState('');
    const [dessert, setDessert] = useState('');
    const [anime, setAnime] = useState('');


    const [result, setResult] = useState('');


    return (

        <div className="bg-main bg-no-repeat bg-cover bg-center bg-fixed font-Jim h-[120vh]">

            <h1 className="text-[12rem] text-yellow-200 font-bold text-center pt-9">Madlib</h1>

            <div id="hideMe" className={isActive ? "hidden" : ""}>
                <div className="flex mx-24">
                    <p className="text-3xl text-white font-bold  ">Superhero Name: </p>
                    <input onChange={(ele) => setSuperHero(ele.target.value)} className="max-h-full  w-full  text-3xl" id="Superhero" type="text"></input>
                </div>
                <div className="flex mx-24 py-12">
                    <p className="text-3xl text-white font-bold  ">Name of a City: </p>
                    <input onChange={(ele) => setCity(ele.target.value)} className="max-h-full  w-full  text-3xl" id="city" type="text"></input>
                </div>
                <div className="flex mx-24">
                    <p className="text-3xl text-white font-bold  ">Your Favorite Animal </p>
                    <input onChange={(ele) => setAnimal(ele.target.value)} className="max-h-full  w-full  text-3xl" id="animal" type="text"></input>
                </div>
                <div className="flex mx-24 py-12">
                    <p id="scare" className="text-3xl text-white font-bold  ">Scary Thing: </p>
                    <input onChange={(ele) => setScary(ele.target.value)} className="max-h-full  w-full  text-3xl" id="scaryThing" type="text"></input>
                </div>
                <div className="flex mx-24">
                    <p id="dessert" className="text-3xl text-white font-bold  ">Your Favorite Dessert: </p>
                    <input onChange={(ele) => setDessert(ele.target.value)} className="max-h-full  w-full  text-3xl" id="favDessert" type="text"></input>
                </div>
                <div className="flex mx-24 py-12">
                    <p className="text-3xl text-white font-bold  ">Favorite Tv Show: </p>
                    <input onChange={(ele) => setAnime(ele.target.value)} className="max-h-full  w-full  text-3xl" id="TvShow" type="text"></input>
                </div>

            </div>



            <p id="madlibOutput" className="text-8xl text-white font-bold text-center mt-6"> {result} </p>





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
                    <button id="madlibBtn" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-6xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
        
border-4 border-black w-96 h-32 my-16  rounded-full" onClick={() => getResult()}> MadLib</button>

                </div>


            </div>


        </div>

    )
}


