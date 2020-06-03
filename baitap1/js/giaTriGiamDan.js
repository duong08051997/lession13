let a = [1,2,4,7,8,9,23,-34,-3,-12];
//a.sort(function (b,c) {return c-b})

for(let i=0; i<a.length; i++) {
    for (let j = 0; j < i ; j++) {
        if (a[i] > a[j]) {
            let temp = a[j];
            a[j] = a[i];
            a[i] = temp;
        }
    }
}
console.log(a)