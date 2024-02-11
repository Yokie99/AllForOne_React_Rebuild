const fetchHello = async (name) =>{
    const promise = await fetch(`https://kmaallforone.azurewebsites.net/SayHello/SayHello/${name}`);
    const response = await promise.text();
    return response;
}

export{fetchHello};