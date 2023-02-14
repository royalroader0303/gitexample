const name = "Mike";

const age = 30;

if(name == 'Tom' || age > 19){
    console.log('통과')
}


/* let i = 0;
while (i<10){
    console.log(i);
    i++;
}  */

let i = 0;

do{
    i++
}while(i<10)

while(true){
    let answer = confirm('계속 할까요?');
    if(!answer){
        break;
    }
}

let fruit = prompt('무슨 과일을 사고 싶나요?');

switch(fruit){
    case '사과' :
        console.log('백원');
        break;
    case '메론' :
        console.log('200');
        break;
    }

function sayHello(name){
    const msg = `Hello, ${name}`;
    console.log(msg);

}
sayHello.log(msg);
sayHello.log();


function makeOnject(name, age) {
    return {
        name,
        age,
        hobby: " football"
    };
}

console.log();


function isAdult(user){
    if(user.age< 20){
        return false;
    }
        return true;
}

const Mike = {
    name :
}