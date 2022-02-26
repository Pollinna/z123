function getResult(array) {
    let c = 0;

    array.map(x => {
        c = c + x
    });
    

    return c;
}
    
console.log(getResult([1, 3, 5]));
console.log(getResult([-4, 27, -5]));
console.log(getResult([-3, -8, -17]));

