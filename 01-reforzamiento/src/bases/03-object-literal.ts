interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address
}

interface Address {
    postalCode: string;
    city: string
}

const ironMan :Person = {
    
    firstName: 'Tony',
    lastName : 'stark',
    age: 41,
    address:{
        postalCode: 'asdf',
        city: 'New York'
    }
};



console.log(ironMan);
// // el spread solo sirve para propiedades sencillas
// // const spiderMan = {...ironMan};

// const spiderMan = structuredClone(ironMan);

// spiderMan.firstName = 'Peter';
// spiderMan.lastName = 'Parker'
// spiderMan.age = 22;
// spiderMan.address.city = 'San jose';

// console.log(ironMan, spiderMan);