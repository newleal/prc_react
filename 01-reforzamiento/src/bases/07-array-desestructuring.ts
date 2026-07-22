const caracterName =['Goku', 'Vegueta', 'Trunks'];

const [ ,,Trunks ] = caracterName;

console.log({ Trunks});

const returnsArrayFn = () => {
    return ['ABC', 123] as const
}

const [letras, numeros] = returnsArrayFn();

console.log(numeros + 10);

const userState = (value: string) => {
    return [
        value, 
        (name:string)=>{
        console.log(name)
        }
    ] as const;

};

const [ name, setName ] = userState('Goku');

console.log({name});
setName('Vegueta');
