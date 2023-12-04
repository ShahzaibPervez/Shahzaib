//Push ,Pop,Shift,Unshift
let x:(string|number|boolean)[]=[1, 2 ,3,'ali','3',true];
console.log(x);
x.push('ahmad',true,3);
console.log('after push the array will be',x);
x.pop();
console.log('after pop the array will be',x);
x.shift();
console.log('after shift the array will be',x);
x.unshift(true);
console.log('after unshift the array wii be',x);


//creating a sub array by removing elements from the original array using splice.
 let arr:(number|string)[]=['ali','asad',1, 2, 3];
 console.log('orignal array',arr);
 let new_arr:(number|string)[]=arr.splice(1,3);
 console.log('orignal array after splice',arr);
 console.log('SUB_array',new_arr);


 //Create a subarray without modifying the original array using slice.
 let a:(number|string)[]=['ali','asad',1, 2, 3];
 let array=a.slice(1,4);
 console.log('subarray',array);
 console.log('orignal array after slice',a);