function toReverseBinary(integer) {
    return reverse(toBinary(integer));
}

function toBinary(integer, size = 4) {
    let ans = integer.toString(2);
    if(ans.length < size) {
        let filler = new Array(size - ans.length).fill('0');
        let fillerString = filler.join("");
        ans = fillerString + ans;
        return ans;
    }
    return ans;
}

function reverse(binary) {
    let split = binary.split(""); 
    let splitRev = split.reverse(); 
    if(splitRev.length > 32) {
        return "Integer is too large";
    }
    return splitRev.join(""); 
}


export default toReverseBinary