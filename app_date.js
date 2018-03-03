
const data = new Date();
val = data.getMonth() + 1;
val = data.getFullYear();
val = data.getDate();
val = data.getDay(); //semana

let birth;

birth = new Date();
birth.setFullYear(2054);
birth = birth.getFullYear();
console.log(val);
console.log(birth);

let cars = ['GM','FORD','VW'];

cars.forEach(function(car, index){
    console.warn(`${index}: ${car}`);
})

const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Johnny'},    
];

const ids = users.map(function(user){
    return user.id;
})

const user = 
    {name: 'John',
    lastname: 'Doe',
    age: 30    
    };
for(let x in user){
    console.log(`${x}: ${user[x]}`);
}

console.log(ids);