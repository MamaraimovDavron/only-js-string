let str = "Hello";

extraFront = (srt) => {
    
    if(str){
        return str.slice(0,2) + str.slice(0,2) + str.slice(0,2);
    }
    else{
        return str;
    }
}

console.log(extraFront(str));