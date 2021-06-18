let myObjectExample = {
    name:"akshay",
    age:24,
    sex:"male"
}
function display(obj){
    for(let props in obj){
        console.log(obj[props]);
    }
    return "success";
}

function isValidPassword(password,username){
    if(password.length >= 8 && !(password.includes(" ")) && !(password.includes(username))){
        return true;
    }
    return false;
}

function findAverage(array){
    let total=0;
    for(let item of array){
        total+=item;
    }
    return total/array.length;
}

function isPangram(sentence){
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    sentence = sentence.toLowerCase();
    for(let item of alpha){
        if(!sentence.includes(item))
            return false;
    }
    return true;
}

function getCard(){
    const value = [1,2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
    const suits = ["clubs","spades","hearts","diamonds"];
    let randValue = Math.floor(Math.random()*value.length);
    let randsuits = Math.floor(Math.random()*suits.length);

    let obj = {
        value : value[randValue],
        suit : suits[randsuits]
    };
    return obj;
}


















