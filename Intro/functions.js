const arr =[7,3,13,11,10,20,30,40,50];
const words = ['asap','byob','rsvp','diy'];
const votes =['y','y','y','y','n','n','y','n'];

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

let abbrev = words.map(string=>{
    return string.toUpperCase().split('').join(".");
});

//find
let foundWord = words.find(string=>(
    string.includes('rs')
));

//filter

let onlyEven = arr.filter(n=>(n%2==0));

//every 

let numResult = arr.every(n=>(n>1));

//some

let numResultSome = arr.some(n=>(n<0));

//Sort

let sortedNum = arr.slice().sort((a,b)=>(a-b));

let reducedVote = votes.reduce((total,current)=>{
    if(total[current])
        total[current]++;
    else
        total[current]=1;
    return total;
},{})

//Spread spreading the contents in the data structure
const exampleSpread = [1,2,3,4,5,10,20,30];
// ...exampleSpread

//Rest grouping the elements in the data sructures;

