function numberCompare(a, b){
    if(a > b){
        return 1;
    }else if(a < b){
        return -1;
    }else{
        return 0;
    }
}

let a = [8, 42, 17, 99];
a.sort();
console.log(a);
a.sort(numberCompare);
console.log(a);

function square(a){
    return a ** 2;
}

let squareAlt = (a) => {
    return a ** 2;
}

console.log(square(7));
console.log(squareAlt(8));
