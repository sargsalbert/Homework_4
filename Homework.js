//Task 1 - Given an array of nested arrays. Write a recursive function that flattens it.

const recursFlattens = (arr) =>{

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        newArr = newArr.concat(recursFlattens(arr[i]));
      } else {
        newArr.push(arr[i]);
      }
    }
    return newArr;
}

console.log(recursFlattens([1, [3, 4, [1, 2]], 10]));
console.log(recursFlattens([14, [1, [[[3, []]], 1], 0]]));


//Task 2 - Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number. Repeat that process if needed and return the result.

const sumDIgits = (num, sum = 0) =>{
    let digit = num % 10;
    
    sum += digit;

    if(num === 0){
        return sum < 10 ? sum : sumDIgits(sum)
    }
    num = Math.floor(num/10);

    return sumDIgits(num, sum)
}

console.log(sumDIgits(14));
console.log(sumDIgits(29));
console.log(sumDIgits(999999999999));


//Task 3 - Given an array and a number N.  Write a recursive function that rotates an array N places to the left. (Hint: to add element to the beginning use arr.unshift())

let rotateArray = (arr, n) =>{

    if(n >= arr.length){
        return arr
    }

    arr.unshift(arr.pop());

    return rotateArray(arr, ++n)
}

console.log(rotateArray([5, 99, 3, 12, 6], 2));
console.log(rotateArray([5, 99, 3, 12, 6], 5));




