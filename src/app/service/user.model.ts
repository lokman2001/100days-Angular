export class User {
  public id: number;
  public firstName: string;
  public lastName: string;
  public age: string;

  constructor(data : any ={} ) {
    this.id = data.id;
    this.firstName = data.firstName ? data.firstName : '';
    this.lastName = data.lastName ? data.lastName : '';
    this.age = data.age ? data.age : '';
  }
}
