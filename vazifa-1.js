let a = 'salom';
let b = 'hi';

writeLongShort = (a,b) => {
    if(a.length < b.length){
        return a + b + a;
    }

    else{
        return b + a + b;
    }
}

console.log(writeLongShort(a,b));