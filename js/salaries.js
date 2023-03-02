let sum = null;
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

for (let i of Object.values(salaries)) {
  sum = sum + i;
}
console.log(sum);