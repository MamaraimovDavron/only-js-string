let str = "Hi";

writeStr = (str) => {
    const l = str.length;

    if(str.startsWith('x') || str.endsWith('x')){
        return str.slice(1,l-1);
    }

    else{
        return str;
    }
}

console.log(writeStr(str));