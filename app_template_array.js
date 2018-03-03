name = 'John';
const city = 'LA';
age = 17;
let html;

html = `
        <ul>
            <li>Name: ${name}</li>
            <li>City: ${city}</li>
            <li>Age: ${age >= 18 ? 'ok' : 'menor = '+age}</li>
        </ul>
`;

document.body.innerHTML = html;


let numbers = [10, 45, 3, 78];
let sorting = [10, 45, 3, 78];
console.log(numbers);

//add at end
numbers.push(124);
console.log(numbers);
//out from end
numbers.pop();
console.log(numbers);

//add at begginig
numbers.unshift(457);
//out start at ... how many
numbers.splice(1,2);
console.log(numbers);

//out from beggining
numbers.shift();
console.log(numbers);

numbers.reverse();
console.log(numbers);

//sort
sorting.sort(function(x,y){
    return x-y;
})
console.log(sorting);

//find 1st
function under(num){
    return num < 50;
}
val = numbers.find(under);
console.log(val);
