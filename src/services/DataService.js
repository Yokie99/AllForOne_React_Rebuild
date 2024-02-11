const fetchHello = async (name) =>{
    const promise = await fetch(`https://kmaallforone.azurewebsites.net/SayHello/SayHello/${name}`);
    const response = await promise.text();
    return response;
}


const fetchLessThan = async (num1, num2) =>{
    const promise = await fetch(`https://kmaallforone.azurewebsites.net/GreaterOrLessThan/${num1}/${num2}`);
    const response = await promise.json();
    return response;
}

const fetchReverse = async (Name) =>{
    const promise = await fetch(`https://kmaallforone.azurewebsites.net/Seven/Reversed/${Name}`);
    const response = await promise.text();
    return response;
}

const fetchAddEm = async (num1, num2) =>{
    const promise = await fetch(`https://kmaallforone.azurewebsites.net/Sum/of/${num1}/${num2}`);
    const response = await promise.text();
    return response;
}

const fetchMadlib = async (superheroName, city, animal, scaryThing, dessert, anime) =>{
    const promise = await fetch(`https://kmaallforone.azurewebsites.net/Five/MadLib/${superheroName}/${city}/${animal}/${scaryThing}/${dessert}/${anime}`);
    const response = await promise.text();
    return response;
}

const fetchReverse123 = async (Name) =>{
    const promise = await fetch(`https://kmaallforone.azurewebsites.net/Seven123/ReversedNum/${Name}`);
    const response = await promise.text();
    return response;
}

const fetchWakeUp = async (name, time) =>{
    const promise = await fetch(`https://kmaallforone.azurewebsites.net/WokeUp/${name}/${time}`);
    const response = await promise.text();
    return response;
}

const fetchOddOrEven = async (num) =>{
    const promise = await fetch(`https://kmaallforone.azurewebsites.net/Six/OddOrEven/${num}`);
    const response = await promise.text();
    return response;
}
const fetchEightBall = async () =>{
    const promise = await fetch(`https://kmaallforone.azurewebsites.net/EightBall/AskTheBall`);
    const response = await promise.text();
    return response;
}
const fetchRestaurant = async (input) =>{
    const promise = await fetch(`https://kmaallforone.azurewebsites.net/Resturant/Hunger/${input}`);
    const response = await promise.text();
    return response;
}




export{fetchHello, fetchLessThan, fetchReverse, fetchAddEm, fetchMadlib, fetchReverse123, fetchWakeUp, fetchOddOrEven, fetchEightBall, fetchRestaurant};