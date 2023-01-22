export class User{
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  subscription: string;

  constructor(username: string, firstName: string, lastName: string, email: string, age: number, subscription: string){
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.subscription = subscription;
  }

}
