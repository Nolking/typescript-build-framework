import { User } from './models/User';
import { Eventing } from './models/Eventing';
import axios from 'axios';

// axios.post('http://localhost:3000/users', {
//     name: 'myname',
//     age: 20
// }); 

// axios.get('http://localhost:3000/users/1')

const user = new User({name: 'new record', age: 0});

// user.set({name: 'NEW NAME', age: 202});

class Person {
    constructor(public firstName: string, public lastName: string) {}
    
    
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }    
    
    
}

const person = new Person('firstname', 'lastname');
console.log(person.fullName)