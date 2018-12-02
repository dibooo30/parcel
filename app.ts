import {getUser, users,fun, createUser} from './src/js/a';
createUser(users, {name:"hany", age:11});

const input:any = document.getElementById('input');
input.addEventListener("keyup", ()=>{
    let val:string = input.value.toString();
    getUser(val)
    .then((res =>{console.log(res)}))
    .then(fun)
    .catch(err => console.log(err));
})
