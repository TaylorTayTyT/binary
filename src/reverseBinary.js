function toReverseBinary(integer) {
    return reverse(toBinary(integer));
}

function toBinary(integer) {
    return integer.toString(2);
}

function reverse(binary) {
    let split = binary.split(""); 
    let splitRev = split.reverse(); 
    return splitRev.join(""); 
}

console.log(toReverseBinary(4));

//export default toReverseBinary