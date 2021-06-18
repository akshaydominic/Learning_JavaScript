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