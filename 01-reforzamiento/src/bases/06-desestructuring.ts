const person = {
    name: 'Tony',
    age: 45,
    key:'ironman'
}

const { name: iromanName, age, key } = person;

// const name = person.name;
// const age = person.age;
// const key = person.key;

console.log(iromanName, age, key);

interface Hero {
    name: string;
    age: number;
    key: string
    rank?: string
}



const useContetx = ({ name, age, key, rank = 'sin rango'} :Hero) => {
    return {
        keyname: key,
        user: {
            name,
            age
        },
        rank: rank
    }
}

const { rank, keyname, user:{ name } } = useContetx(person);

console.log({rank, keyname, name});