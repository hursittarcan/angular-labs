# H5 Directives & property binding
In deze lab voorzien we een aantal structurele directives en maken we gebruik van property bindings om attributen van elementen dynamisch aan properties van een component te koppelen. 

Gegeven is deze repo. Hierin staat een Angular project met reeds een confessions klasse. **Navigeer naar deze folder via de CLI** en voer volgend commando uit: ```npm install```
 
Vervolgens voer je, nog steeds in deze folder, het commando ```ng serve -o``` uit. Hiermee zal de applicatie gestart worden en gaat er automatisch een browser open. Moest dit laatste niet het geval zijn, surf je naar http://localhost:4200. Bij elke aanpassing in de code zal de browser automatisch refreshen.

![alt_text](https://i.imgur.com/TT9FcyW.png "image_tooltip") Starten doen we met herhaling uit vorige lab. Zorg ervoor dat elke keer als je op de 'like' of 'dislike' knop van een confession klikt, de waarde van de teller voor dat object omhoog gaat met 1. De nieuwe waarde wordt ook getoont in de knop. Je kan deze code kopiëren uit de vorige lab.

# Structurele directive ngFor
De eerste aanpassing doen we in de app.component.html file. Hierin gebruiken we de ```ngFor``` directive om over de ```confessionsList``` te loopen en om zo een component te genereren voor elk object in de array:
```html
<app-confession-item *ngFor="let item of confessionList" [confession]="item">
</app-confession-item>
```
De ```ngFor```maakt een confession-item component aan voor elk item in de array. Via ```[confession]="item"``` koppelen we het item uit de ngfor aan de ```Input()``` propert in de confession-item component.

![alt_text](https://i.imgur.com/TT9FcyW.png "image_tooltip") Test het formulier uit de vorige lab. Het nieuw toegevoegde element wordt automatisch getoond dankzij de change detection engine van Angular.

# Structurele directive ngIf
Als iemand als author de naam *anonymous* ingeeft, willen we niet dat deze getoond wordt. Dit doen we met de ```ngIf``` directive. Pas de code in de ```confession-item.component.html``` aan als volgt:
```html
<p class="card-text" *ngIf="confession.author != 'anonymous'">{{confession.author}}</p>
```

# Attribute directives
In plaats van het departement willen we een afbeelding voor het departement tonen. We schrijven in de ```confession-item.component.ts``` file een methode die de url van de afbeelding teruggeeft:
```typescript
getDepartmentUrl(department: string): string {
    department = department.toLowerCase();
    switch(department) {
      case 'pxl-digital': {
         return 'assets/pxl-digital.png'
      }
      case 'pxl-mad': {
        return 'assets/pxl-mad.png'
      }
      case 'pxl-business': {
        return 'assets/pxl-business.png'
      }
      case 'pxl-education': {
        return 'assets/pxl-education.png'
      }
      default: {
        return 'assets/hogeschoolpxl.png'
      }
   }
  }
```
Daarna passen we de ```confession-item.component.html``` aan zodat de methode opgeroepen wordt in de source van een image tag:
```html
<div class="card-header">
    <img [src]="getDepartmentUrl(confession.department)" alt="logo" />
  </div>
```
De afbeelding is nu dynamisch gekoppeld via de ```getDepartmentUrl()``` methode. Als de department property van het confession object veranderd, zal ook de afbeelding aangepast worden.

Voorzie tenslotte nog volgende css code in de `confession-item.component.css`:
```css
img{
  display: block;
  margin: 0 auto;
  width: 140px;
}
```

# NgClass
We willen dat de cards van het departement PXL-digital een groene rand krijgen. Dit doen we met de NgClass directive. We voorzien eerst in de ```confession-item.component.css``` file volgende css klasses:
```css
.digital {
  border: 1px solid green;
}
.card {
  margin-bottom: 1rem;
}

```
Daarna passen we de ```confession-item.component.html``` aan als volgt:
```html
<div class="card" [ngClass]="{'digital': (confession.department.toLowerCase() == 'pxl-digital')}">
```
Enkel de confessions van PXL-digital zullen nu een groene rand krijgen.
