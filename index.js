// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]
console.log(cats)


// Test #1 destructivelyAppendCat(name) .push()
// 1) appends a cat to the end of the cats array

function destructivelyAppendCat(name){cats.push("Ralph")}

    
// Test #2 destructivelyPrependCat(name) .unshift()
// 2) prepends a cat to the beginning of the cats array

function destructivelyPrependCat(name){cats.unshift("Bob")}


// Test #3 destructivelyRemoveLastCat(name) .pop()
// 3) removes the last cat from the cats array

function destructivelyRemoveLastCat(){cats.pop()}


// Test #4 destructivelyRemoveFirstCat() .shift()
// 4) removes the first cat from the cats array

function destructivelyRemoveFirstCat(){cats.shift()}


// Test #5 prependCat(name) [...Spread Operator] Can be used before or afterwards!!!
// 5) prepends a cat to the cats array and returns a new array, 
// leaving the cats array unchanged



function appendCat(name){
    return name = [...cats, "Broom"]
}

function prependCat(name){
    return name = ["Arnold",...cats]
}



// Test #6 removeLastCat() cats.slice(#)
// removes the last cat in the cats array and returns a new array, 
// leaving the cats array unchanged

function removeLastCat(name){
    return name = cats.slice(0,-1)
}

// Test #7 removeFirstCat() cats.slice(#)
// removes the first cat from the cats array and returns a new array, 
// leaving the cats array unchanged

function removeFirstCat(name){
    return name = cats.slice(1)
}

