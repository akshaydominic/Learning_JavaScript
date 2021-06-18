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