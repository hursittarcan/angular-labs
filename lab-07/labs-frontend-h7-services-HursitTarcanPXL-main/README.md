# H7 services & dependency injection
In deze lab voorzien we de implementatie van een service & dependency injection. Gegeven is deze repo. Hierin staat een Angular project met reeds een login en register component. Er is zowel een template driven als reactive form aanwezig. Er wordt in deze lab ook gebruik bemaakt van een zelf geschreven modal dialog voor het register formulier. In een later hoofdstuk maken we gebruik van bv. Angular Material om dit voor ons af te handelen.

**Navigeer naar deze folder via de CLI** en voer volgend commando uit: ```npm install```
 
Vervolgens voer je, nog steeds in deze folder, het commando ```ng serve -o``` uit. Hiermee zal de applicatie gestart worden en gaat er automatisch een browser open. Moest dit laatste niet het geval zijn, surf je naar http://localhost:4200. Bij elke aanpassing in de code zal de browser automatisch refreshen.

![alt_text](https://i.imgur.com/TT9FcyW.png "image_tooltip") Bekijk de code van het project. Zoom zeker in op de werking en de verschillen van beide formulieren. Dit is een goede herhaling van he vorige hoofdstuk.

## Service
We gebruiken de angular CLI om een nieuwe service te genereren via onderstaand commando:
```
ng generate service services/user
```

Hiermee wordt er in de folder `services` een nieuwe `user.service.ts` aangemaakt. Hierin wordt ook de `provideIn` property ingesteld zodat de service doorheen de volledige applicatie beschikbaar is.

Voorzie in de `user.service.ts` volgende code:
```typescript
export class UserService {
  users: User[];

  constructor() {
    this.users = [];
  }

  addUser(user: User): void{
    this.users.push(user);
    console.log(this.users);
  }
}
```
We houden in bovenstaande service een lijst met users bij. Deze kunnen toegevoegd worden via de `addUser()` methode. We gebruiken deze service in de `register.component.ts`. Dit doen we via dependency injection. We kunnen de service injecteren via de constructor van de component:
```typescript
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private userService: UserService) { }
```
We voorzien ook nog een eventEmitter in `register.component.ts`. Dit doen we zodat, wanneer een gebruiker zich geregistreerd heeft, het formulier terug sluit:
```typescript
 @Output() finishRegister = new EventEmitter();
 ```

Pas vervolgens de `onSubmit` methode aan als volgt:
```typescript
onSubmit(): void{
    let newUser: User = new User('','','','',0,'');
    Object.assign(newUser,this.registerForm.value);
    this.userService.addUser(newUser);
    this.finishRegister.emit(newUser);
  }
```
We spreken hier de service aan om een gebruiker toe te voegen aan de array. Daarnaast doen we een emit van de `finishRegister` eventEmitter. Pas tenslotte nog de `app.component.html` aan om deze emitter op te vangen:
```html
<app-register (finishRegister)="hideRegister()"></app-register>
```

Maak een nieuwe auth-service aan via de Angular CLI:
```
ng generate service services/auth
```

Deze `auth.service.ts` maakt gebruik van de `UserService` die we daarstraks hadden aangemaakt. Ook hier injecteren we deze service via de constructor:
```typescript
export class AuthService {

  constructor(private userService: UserService) { }
```
de userService is een singleton object. Elke component, service, .... deelt dus dezelfde instantie van deze `UserService`. Voeg volgende methode toe aan de `auth.service.ts`:
```typescript
login(email: string, password: string){
    if(this.userService.users.some(e => e.email === email)){
      return true;
    }
    return false;
  }
```
De service is nu klaar voor gebruik. We injecteren de service in de `login.component.ts`:
```typescript
export class LoginComponent implements OnInit {
  @Output() triggerRegister = new EventEmitter();
  email: string = '';
  password: string ='';
  constructor(private authService: AuthService) { }
```
Vervolgens passen we de `onSubmit` methode aan in `login.component.ts` zodat deze gebruik maakt van de geinjecteerde `AuthService`:
```typescript
 onSubmit(form: any): void{
    if(this.authService.login(form.value.email, form.value.password)){
      alert("login succes!");
    }else{
      alert("email not found, register first!");
    }
  }
```

![alt_text](https://i.imgur.com/TT9FcyW.png "image_tooltip") Recap? Bouw verder op de confessions app lab. In de `app.component.ts` file staat een array van data die gebruikt wordt doorheen de applicatie. Verplaats deze array van data naar een zelf geschreven service. Pas de applicatie aan zodat deze gebruikt maakt van deze service.
