let str = "abshihi";

countHi = (str) => {
    let t = str.includes(str,0) == true;
    if(t > 1){
        return t;
    }
}

console.log(countHi(str));