type StringOrNumber = string|Number;
type userData = {name:string,uid:string};

const logDetails= (uid: StringOrNumber,item: string)=>{
    console.log(`${item} has a uid of ${uid}`);
}

const greet2 = (user:{name:string,uid:string}) => {
 console.log(`${user.name} says hie`)
}

const greet3 = (user: userData) => {
    console.log(`${user.name} says hie`)
 }