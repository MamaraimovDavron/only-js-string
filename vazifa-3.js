let str = "abshi";

countHi = (str) => {
    for(let i = 0; i < str.length; i++){
        
        if(str.includes('hi') == true)
            return i;
    }
}

console.log(countHi(str));