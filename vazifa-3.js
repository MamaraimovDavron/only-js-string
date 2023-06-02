let str = "abshihihiih";
let count = 0;

countHi = (str) => {
    for(let i = 0; i < str.length; i++){
        if(str.substring(i,i+2) == 'hi'){
            count ++;
        }
    }

    return count;
}

console.log(countHi(str));