export const users = [
    {name:"ahmed", age:28},
    {name:"mohmed", age:33},
    {name:"emad", age:40}
]


export const fun = () =>{
    console.log('done');
}
export  const  createUser = (array:Array<object>, user:Object)=>{
     array.push(user)
 }

export var getUser = (name:string)=>{
    console.log(name)
    return new Promise((resolve, rejact) => {
        let u = users.find(user => {return user.name === name})
        if(u){
                resolve(u)
        }
        if (!u) {
                rejact(name +" not founded in users")
        }
    })
}