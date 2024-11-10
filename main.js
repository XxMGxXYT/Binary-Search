// Can i make a word from athor words? => problem solving
/*
function isItGood(source, target){
    source = source.toLowerCase()
    target = target.toLowerCase()
    let arr = source.split("")
    let arr2 = target.split("")
    let arr3 = []

    for(let i = 0; i <= arr2.length; i++){
        if(arr.includes(arr2[i])){
            arr3.push(arr2[i])
        } else{
            continue
        }
    }

    if(arr3.length === arr2.length){
        console.log("Yes")
    } else{
        console.log("No")
    }
}

isItGood("Hubcoders", "coderhub")
// isItGood("WorldHello", "hello")
// isItGood("programmer", "programming")
*/

// Increasing array => problem solving
let testArray = [2, 6, 1, 3, 6, 10, -2, 0, 9, 4, 7, 5, 11, -1, 8, -3, -4, 5]
let counter = 0;

function increasing_array(arr){
    // Increase counter.
    counter += 1
    // Empty variable.
    let num = 0;
    // Looping to check the smallest and biggest numbers.
    for(let ele = 0; ele < arr.length; ele++){
        // Check if current element (arr[ele]) is greater than the next element (arr[ele+1]), else just skip it.
        if(arr[ele] > arr[ele+1]){
            // Save the current element to replace it
            num = arr[ele]
            // Replace the current element with the next element (Which is smaller than the current).
            arr[ele] = arr[ele+1]
            // Replace the next element with the current element that saved in the "num" variable.
            arr[ele+1] = num
        } else {
            continue
        }
    }
    // Call back the function again if the counter not equal to arr.length, else stop the function.
    if(counter !== arr.length - 1){
        increasing_array(arr)
    } else{
        console.log(arr)
        return false
    }
}

increasing_array(testArray)
