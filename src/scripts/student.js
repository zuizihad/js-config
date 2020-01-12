import Person from './person'
class Student extends Person {
    constructor(name, email, id, ){
        super(name, email);
        this.id = id;
    }

    print(){
        super.print();
        console.log(`my id is ${this.id}`);
    }
}

export default Student;