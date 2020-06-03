let a = [12, 12, 34, 65, 1, 2, 4, 76, 66, 9,11,12,15,51,345,56];
let max = a[0];
let index = 0;

for (let i = 0; i < a.length; i++) {
    if (a[i] > max) {
        max = a[i];
        index = i;
    }
}
console.log(max);
let sum = 0;
for (let i = 0; i < a.length; i++) {
    sum += a[i]

}
let tb = Math.floor(sum / a.length);
console.log(tb);