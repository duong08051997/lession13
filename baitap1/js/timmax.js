let a = [12, 12, 34, 65, 1, 2, 4, 76, 66, 9];
let max = a[0];
let index = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] > max) {
        max = a[i];
        index = i;
    }

}
console.log(`so lon nhat la ${max} o vi tri thu ${index}`);
