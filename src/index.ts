// import { User } from './models/User';

// const user = new User({name: 'myname', age: 20});

// console.log(user.get('name'));
// console.log(user.get('age'));

// user.set({name:'newname'})

// user.on('change', () => {
//     console.log('change 1')
// });
// user.on('change', () => {
//     console.log('change 32')
    
// });
// user.on('save', () => {
//     console.log('save here triggered')
// });

// user.trigger('change')

import axios from 'axios';

axios.post('http://localhost:3000/users', {
    name: 'myname',
    age: 20
}); 

axios.get('http://localhost:3000/users/1')