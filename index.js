let obj = [14,12,21,31,11,33,17];


// for accessing every single element in an object
let cocle = () => obj.map((x)=>x);
console.log(cocle())

// for filtering out your matching elements
let filte = () => obj.filter((x)=>{
    return x > 10;
});
console.log(filte());

// for multiplying, adding, subtracting elements value
let reduc = () => obj.reduce((x,y) => x+y,0);
console.log(reduc())


// for finding the exact number you want
let finds = obj.find((x)=> x==21);
console.log(finds);

// for finding the index of the exact number you want
let findIndex = obj.findIndex((x)=> x==21);
console.log(findIndex)

// for checking if the exact number you want is in the array or not
let include = obj.includes(21);
console.log(include);

// for checking if the exact number you want is in the array or not
let somes = obj.some((x)=> x==21);
console.log(somes);

// for checking if the exact number is every element of array or not
let everys = obj.every((x)=> x==21);
console.log(everys);

// for doing some equation with every element of an array
let maps = obj.map((x)=> x*2);
console.log(maps);

// for reversing the sort of an array
let reverses = obj.reverse();
console.log(reverses);

// for sorting the array
let sorts = obj.sort((x,y)=> x-y);
console.log(sorts);

// for splicing the array
let splices = obj.splice(0,2);
console.log(splices);

// for slicing the array
let slices = obj.slice(0,2);
console.log(slices);

// for adding new elements to an array which will increase the length of array 
let concats = obj.concat([1,2,3,4,5,6,7,8,9,10]);
console.log(concats);

