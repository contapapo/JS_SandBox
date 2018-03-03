console.time('time test');
    
    console.log('world');
    console.table([1,2,3,4]);
    console.warn('Warning');
    console.error('Error msg');

console.timeEnd('time test');

let val;
val = 5;
val = Number(new Date());

val = Math.floor(Math.random() * 20 + 1);

console.log( typeof val );
console.log( val );

//Append
let name;
name = 'John ';
name += 'Doe';
console.log(name);

//Concat
let nom, prenom, all, x;
prenom = 'Mariie';
nom = 'Doe';
x = 'test'
prenom = prenom.toUpperCase();
all = prenom.concat(' ', nom,' ', x);
console.log(all);

//indexOf
let index;
index = prenom.indexOf('R');
index = prenom.lastIndexOf('I');

index = prenom.charAt(2);
index = prenom.charAt(prenom.length - 1);

//substring
index = prenom.substring(0,4);
index = prenom.slice(-4);

//split (separa por espaco, virgula)
index = all.split(' ');

//replace
index = all.replace('test', 'Dae');

//include
index = all.includes('Do');

console.log(index);

if(typeof id !== 'undefined'){
    console.log('ok');
} else {
    console.log('no id');
}

//switch
let color = 'red';
switch(color){
    case 'red':
        console.log('is red');
        break;
    default:
        console.log('not red');
        break;        
}

(function(){
    console.log('Immidiatley Invocable Function Expressions IIFEs')
})()

const todo = {
    add: function(){
        console.log('ADD');
    },
    edit: function(id){
        console.log(`ID = ${id}`)
    }
} 

todo.delete = function(){
    console.error('del test');
}
todo.delete();
todo.edit(20);