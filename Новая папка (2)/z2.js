function getResult(mass) {
    let max = 0;
    for (nmb1 of mass) {
        for (numb2 of mass) {
            if (numb1 > numb2) {
                max = numb1;
                min = numb2;
            }
            else {
                max = numb2;
                min = numb2;
            }
        }
    }
    console.log (max, min);
}
    
console.log(getResult([2, 15, 15, 32, 2]));
console.log(getResult([5, 5, 6, 6, 7, 7]));
console.log(getResult([4, 4, 4]));
console.log(getResult([4, 5, 8, 22]));