export class Contact {
  name: string;
  email: string;
  phone: string;
  isFavorite: boolean;

  constructor(name: string, email: string, phone: string, isFavorite: boolean = false){
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.isFavorite = isFavorite;
  }
}
