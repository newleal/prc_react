// 2 maneraq de definir funciones en js

function greet(name: string):string
{
    return `Hola ${name}`
}

const greet2 = (name:string) => {
    return `Hola ${name}`
}

const message = greet('Goku');

const message2 = greet2('Vegeta')
;
//console.log(message);
console.log(message, message2)

function getUser() {
    return {
        uid: 'ABC-123',
        username: 'El_papi23'
    }
}

const getuser2 = () => {
    return {
        uid: 'ABC-123',
        username: 'El_papi23'
    }
};

const user = getuser2();

console.log(user);