import { User } from './models/User';

import axios from 'axios';

// axios.post('http://localhost:3000/users', {
//     name: 'myname',
//     age: 20
// }); 

// axios.get('http://localhost:3000/users/1')

const user = new User({name: 'new record', age: 0});

// user.set({name: 'NEW NAME', age: 202});

user.save();

user.events.on('change', () => {
    console.log('change!!!')
})

user.events.trigger('change')

console.log(user)