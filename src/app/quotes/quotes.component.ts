import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

    // Quotes Array
    quotes:Quotes[]=[
        new Quotes('How you love yourself is how you teach others to love you.','Rupi Kaur','Stephanie Osmanski', new Date(2022,2,10),2,1),
        new Quotes('Dont forget to tell yourself positive things daily!<br>You must love yourself internally to glow externally.','Hannah Bronfman','Karla Pope',new Date(2021,11,30),4,3),
        new Quotes('To fall in love with yourself is the first secret to happiness','Robert Morley', 'Julia Ludlam',new Date(2022,2,11),3,4),
        new Quotes('You were born to be real,not to be perfect.','Unknown', 'Rachel Sharpe',new Date(2021,12,23),1,0),
        new Quotes('You need your own love to save your heart','Rithvik Singh','Pinterest',new Date(2021,2,24),9,2),
        new Quotes('Be your own version to smile','Anyoymous', 'Ananya Bhatt',new Date(2020,7,4),1,0),
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
