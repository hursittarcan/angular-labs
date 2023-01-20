# H2 Lab Typescript
In deze lab bouwen en testen we onze eerste typescript klasse. Typescript is taal die gebruikt wordt binnen Angular projecten. Gegeven is deze repo. Hierin staat een Angular project. **Navigeer naar deze folder via de CLI** en voer volgend commando uit: ```npm install```

Bovenstaand commando installeert alle dependencies die nodig zijn om het project uit te voeren. Vervolgens voer je, nog steeds in deze folder, het commando ```ng serve -o``` uit. Hiermee zal de applicatie gestart worden en gaat er automatisch een browser open. Moest dit laatste niet het geval zijn, surf je naar http://localhost:4200. Je krijgt een webpagina met een ```H1```tag in waarin de tekst "hallo wereld" staat. Bij elke aanpassing in de code zal de browser automatisch refreshen.

![alt_text](https://i.imgur.com/TT9FcyW.png "image_tooltip") Zoek in de code waar je deze HTML kan terug vinden!

Open het project een een IDE. Maak in de folder ```./src/app``` een nieuw bestand aan met als naam ```contact.model.ts```. 

![alt_text](https://i.imgur.com/TT9FcyW.png "image_tooltip") Er zullen 4 properties aangemaakt worden, welke datatypes voorzie je voor elk van deze properties?
 * Name:
 * Email:
 * Phone:
 * isFavorite:



Voorzie volgende typescript code in de file contact.model.ts:

```typescript
class Contact {
	name: string;
	email: string;
	phone: string;
	isFavorite: boolean;
}
```

De klasse is nu aangemaakt, maar kan nog niet gebruikt worden. Wil je deze klasse gebruiken in een ander bestand, dan moet je de klassen exporteren. Voorzie het ```export``` keyword voor de class definitie als volgt:
```typescript
export class Contact{
    ...
}
```

Voor het gemak voeg je ook nog onderstaande constructor toe aan de Contact klasse:
```typescript
  constructor(name: string, email: string, phone: string, isFavorite: boolean = false){
		this.name = name;
		this.email = email;
		this.phone = phone;
    this.isFavorite = isFavorite;
  }
```

De contact klasse is nu klaar voor gebruik. Ga naar de file ```./src/app/app.component.ts```. In de methode ```ngOnInit``` voorzie je onderstaande code:

```typescript
    const c1: Contact = new Contact("Dries Swinnen", "dries.swinnen@pxl.be", "12345");
    const c2: Contact = new Contact("Tom Schuyten", "tom.schuyten@pxl.be", "678901234", true);
    console.log(c1);
    console.log(c2);
```

Bovenstaande code werkt enkel na de import van de Contact klasse. Voorzie deze! Tip: gebruik de auto-import functie van je IDE.

![alt_text](https://i.imgur.com/TT9FcyW.png "image_tooltip") Bekijk het resultaat in de console van de development tools in de browser. Kan je de objecten terugvinden? Wat is het verschil tussen de 2?


