const arr =[7,3,13,11,10,20,30,40,50];

//forEach
// arr.forEach(n=>(console.log(n*2)));

//Map
let mapArray =arr.map(n=>(n*0.5));

let mapArray1 = arr.map((n)=>{
    if(n%2==0)
        return n;
    return 0;
});

let mapObject = arr.map(n=>{
    return {
        value:n,
        isEven:n%2==0
    };
});
