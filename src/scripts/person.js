export class Person {
    constructor(name, email){
        this.name = name;
        this.email= email;
    }

   print = () => console.log(`my name is ${this.name}. my email is ${this.email}`);
}

export default Person;