let num:number= 0.0;
let str:string= "string";
let bool:boolean=true;

let sportsTwo: string[] = ["Golf","Cricket","Tennis"];
sportsTwo.push("Baseball");
sportsTwo.push("Futbol");

for(let i=0; i<sportsTwo.length;i++){
    console.log(sportsTwo[i]);

}

for (let tempSports of sportsTwo){
    console.log(tempSports);
}

// public
// protected
// private

class Customer{
    
    private firstName:string;
    private lastName:string;



    constructor(theFirst:string, theLast:string){
        this.firstName = theFirst;
        this.lastName =theLast;
    }

    public getFirstName(): string{
        return this.firstName;
    }

    public getLasttName(): string{
        return this.lastName;
    }

    public setFirstName(firstName:string ):void {
        this.firstName =this.firstName;
    }

    public setLastName(lastName:string ):void {
        this.lastName =this.lastName;
    }

    // using accessors

//     private _firstName:string;
//     private _lastName:string;

//     public get _getFirstName():string {
//         return this._firstName;
//     }

//     public get _getLastName():string {
//         return this._firstName;
//     }

//     public set _setFirstName(firstName: string) {
//          this._firstName = firstName;
//     }

//     public set _setLastName(lastName: string) {
//         this._lastName = lastName;
//    }
}

let myCustomer =new Customer("Jotham","Zvikonyaukwa");
console.log(`${myCustomer.getFirstName} ${myCustomer.getLasttName}`);

// Updated Way
export class NewCustomer{
    constructor(private _firstName: string ,private _lastName:string  ){}

    get _getFirstName():string {
        return this._firstName;
    }

    get _getLastName():string {
        return this._firstName;
    }

    set _setFirstName(firstName: string) {
         this._firstName = firstName;
    }

    set _setLastName(lastName: string) {
        this._lastName = lastName;
   }
}

