import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
import { }

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

    addNewQuote(quote: Quotes) {
       
      this.quotes.push(quote)
    }

  toggleDetails(index: string | number) {
      
      this.quotes[index].const showDetails = !this.quotes[index].showDetails;
    }  

    deletingQuote(deleteQuote: any, index: number){
      if(deleteQuote){
          let toDelete =confirm("Are you sure you want to delete this quote?")

          if(toDelete){
              this.quotes.splice(index,1)
          }
      }
  }

  highlightHighest() {
        
    let quotesUpvote = []
    let highestUpVote: number
    for (let j = 0; j < this.quotes.length; j++) {
      quotesUpvote.push(this.quotes[j].upvote)
    }

    quotesUpvote.sort(function (a, b) {
      //if b>a then b-a>0 and will return a positive number
    return b - a
  })
  highestUpVote = quotesUpvote[0]
  return highestUpVote;
}

  constructor() { }

  ngOnInit(): void {
  }

}
