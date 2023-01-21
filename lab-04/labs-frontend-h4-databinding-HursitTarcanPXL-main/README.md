# H4 Databinding 
In deze lab voegen we dynamische functionaliteit toe aan onze components in de vorm van databinding & eventbinding. Databinding is in grote lijnen vergelijkbaar met die van VueJS. De change detection engine van Angular zorgt ervoor dat de data op de view up to date blijft. Er zijn verschillende stratigieën waarin je de Angular dection engine kan laten werken maar dit valt buiten de scope van deze lab. Gegeven is deze repo. Hierin staat een Angular project met reeds een confessions klasse. **Navigeer naar deze folder via de CLI** en voer volgend commando uit: ```npm install```
 
Vervolgens voer je, nog steeds in deze folder, het commando ```ng serve -o``` uit. Hiermee zal de applicatie gestart worden en gaat er automatisch een browser open. Moest dit laatste niet het geval zijn, surf je naar http://localhost:4200. Bij elke aanpassing in de code zal de browser automatisch refreshen.

## One way databinding
We starten met het maken van een cofession-item component. Hiervoor gebruiken we de angular CLI als volgt:
```
ng g c components/confession-item
```
De component wordt aangemaakt en automatisch toegevoegd aan de ```app.module.ts``` file. Voeg vervolgens de component toe aan de ```app.component.html```:
```html
<div class="container">
  <h1>PXL Confessions</h1>
  <app-confession-item></app-confession-item>
  <app-confession-item></app-confession-item>
</div>
```

Ga naar de file ```confession-item.component.ts``` en voorzie een Confession Object:
```typescript
export class ConfessionItemComponent implements OnInit {
  confession!: Confession;
  constructor() { }

  ngOnInit(): void {
    this.confession = new Confession('Mondays are the worst','PXL-Digital','anonymous',false);
  }

}
```
Het uitroepteken na de confession property is een non-null assertion operator. Dit is een manier om tegen de compiler te vertellen dat deze expressie niet ```null``` of ```undefined``` kan zijn.

Vervolgens hebben we een object wat we kunnen gebruiken in de view om databinding op toe te passen. Het gebruik van dubbele curly braces is een one way databinding. Pas de file ```confession-item.component.html``` aan als volgt:
```html
<div class="card">
  <div class="card-header">
    {{confession.department}}
  </div>
  <div class="card-body">
    <h5 class="card-title"> {{confession.post}}</h5>
    <p class="card-text">{{confession.author}}</p>
    <a class="btn btn-success">({{confession.likes}}) like</a>
    <a class="btn btn-danger">({{confession.dislikes}}) dislike</a>
  </div>
</div>
```
De data van het confession object wordt nu 2 maal getoond op onze webpagina in de confession-item component. Dit komt omdat we in de app component 2 keer de confession-item component oproepen.

## Two way input databinding
We starten met het maken van een add-confession component. Hiervoor gebruiken we de angular CLI als volgt:
```
ng g c components/add-confession
```

Voorzie in de add-confession.component.ts file een object met lege values toe.Doe dit aan de hand van volgende code:
```typescript
export class AddConfessionComponent implements OnInit {
  confession!: Confession;
  constructor() { }

  ngOnInit(): void {
    this.confession = new Confession('', '', '');
  }

}

```

Voorzie in de add-confession.component.html volgende code:
```html
<form>
  <div class="form-group">
    <label for="confession">Confession</label>
    <input type="text" class="form-control" id="confession" placeholder="Enter confession" name="post" [(ngModel)]="confession.post">
  </div>
  <div class="form-group">
    <label for="author">Author</label>
    <input type="text" class="form-control" id="author" placeholder="Author" name="author" [(ngModel)]="confession.author">
  </div>
  <div class="form-group">
    <label for="department">Department</label>
    <select class="form-control" id="department" name="department" [(ngModel)]="confession.department">
      <option>PXL-Digital</option>
      <option>PXL-Business</option>
      <option>PXL-Education</option>
      <option>PXL-MAD</option>
      <option>other</option>
    </select>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```
de ```[(ngmodel)]``` binding zorgt voor een databinding in twee richtingen tussen de properties van het object & de input velden. Om deze binding te kunnen gebruiken, voegen we de ```FormsModule``` toe aan de ```app.module.ts``` file:
```typescript
...
 imports: [
    BrowserModule,
    FormsModule
  ],
...
```

## Eventbinding
Eventbinding start met het aanmaken van methodes die opgeroepen bij een event. Voeg daarom volgende code toe aan de ```AddConfessionComponent``` klasse in ```add-confession.component.ts```:
```typescript
 resetForm(): void{
    this.confession.author = '';
    this.confession.post = '';
    this.confession.department = '';
  }

   addNew(): void{
    let newConfession: Confession = new Confession(this.confession.post, this.confession.department, this.confession.author);
    console.log(newConfession);
    alert("Added confession!");
    this.resetForm();
  }
```
Vervolgens leggen we een link tussen de ```addNew``` methode uit de klasse en een element in de view, in dit geval de submitknop van het formulier. Pas volgende code aan in ```add-confession.component.html```:
```html
<button type="submit" class="btn btn-primary" (click)="addNew()">Submit</button>
```
de ```(click)``` geeft aan dat je de click DOM event koppelt aan de ```addNew``` methode. Bij het klikken op de knop wordt het object zichtbaar in de console en worden de values daarna op lege strings gezet. Dit zorgt er ook meteen voor dat de formuliervelden terug leeggemaakt worden door de 2 way input binding.

![alt_text](https://i.imgur.com/TT9FcyW.png "image_tooltip") Zorg ervoor dat elke keer als je op de 'like' of 'dislike' knop van een confession klikt, de waarde van de teller voor dat object omhoog gaat met 1. De nieuwe waarde wordt ook getoont in de knop.

## @Input properties
Input properties kunnen we gebruiken voor communicatie van Parent naar Child components. Voor dit gedeelte voorzien we een array van confession objecten als property van de ```AppComponent``` klasse in ```app.component.ts```:
```typescript
confessionList: Confession[] = [
    new Confession('Mondays are the worst','PXL-Digital','anonymous', true),
    new Confession('Angular beats VueJS any day','PXL-Digital','anonymous', true),
    new Confession('Taxes taxes taxes','PXL-Business','anonymous', false),
    new Confession('Am i an artist yet','PXL-MAD','banksy', false)
  ]
```

Vervolgens geven we in de klasse ```ConfessionItemComponent``` in ```confession-item.component.ts``` mee dat het Confession object een input parameter is. De ```ngOnInit``` methode maken we ook leeg:
```typescript
export class ConfessionItemComponent implements OnInit {
  @Input() confession!: Confession;
  constructor() { }

  ngOnInit(): void {

  }

}
```
Voorzie de nodige import uit ```@angular/core```.

We moeten er nu enkel nog voor zorgen dat er een object meeggegeven wordt aan de confession-item component bij het aanroepen in de ```app.component.html```:
```html
<app-confession-item [confession]="confessionList[0]"></app-confession-item>
<app-confession-item [confession]="confessionList[1]"></app-confession-item>
<app-confession-item [confession]="confessionList[2]"></app-confession-item>
<app-confession-item [confession]="confessionList[3]"></app-confession-item>
```
Het gedeelte tussen de vierkante haken verwijst naar de input property in de child component. Het gedeelte tussen de quotes verwijst naar de property (in dit geval de array) uit de parent component.

## @Output properties
Voor de communicatie van een child component naar een parent component maken we gebruik van
Output properties. Dit in de vorm van Events die vanuit de child component geemit worden en in de parent component opgevangen worden. In dit voorbeeld gaan we het aangemaakte object uit de add-confession component (child) toevoegen aan de array in de app component (parent).

We starten met het aanpassen van de ```add-confession.component.ts``` file. Voeg onderstaande toe als property van de ```AddConfessionComponent``` klasse:
```typescript
 @Output() newItemEvent = new EventEmitter<Confession>();
 ```
Voorzie de nodige import uit ```@angular/core```. Let op: hier voorziet de IDE soms een foute automatische import voor het datatype ```EventEmitter```. Deze moet ook uit ```@angular/core``` komen!

De naam van deze ```EventEmitter``` is belangrijk, dit is de naam van de event die we straks gaan gebruiken. In ons geval is dit dus ```newItemEvent```. We kunnen deze event triggeren met de ```emit()``` methode. Dit doen we in de verwerking van ons formulier (de `addnew()` methode) in de ```add-confession.component.ts```:
```typescript
 addNew(): void{
    let newConfession = new Confession(this.confession.post, this.confession.department, this.confession.author);
    this.newItemEvent.emit(newConfession);
    this.resetForm();
  }
```
De verwerking en opbouw is in dit voorbeeld nog niet echt volgens de richtlijnen van Angular. Dit zien we in een later hoofdstuk. De `emit()` methode verwacht 1 argument, het datatype hiervan kan je zelf kiezen. De custom event wordt nu getriggered bij het klikken op de submit knop maar wordt nog niet opgevangen door de parent component. We voorzien in de ```app.component.ts``` file in de klasse van de component volgende methode:
```typescript
processAdd(event: Confession): void{
    this.confessionList.push(event);
    console.log(this.confessionList);
  }
```

Deze methode linken we vervolgens aan de EventEmitter in de file ```app.component.html```:
```html
<app-add-confession (newItemEvent)="processAdd($event)"></app-add-confession>
```
De parameter van de methode heeft altijd de naam `$event` en bevat het object dat we meegeven met de `emit()` methode.

In de `console.log` die gedaan wordt, kan je zien dat het object effectief toegevoegd wordt aan de array in de app component. Er is nog geen component beschikbaar voor dit element. Hoe we dit concreet oplossen zien we in de volgende lab.
