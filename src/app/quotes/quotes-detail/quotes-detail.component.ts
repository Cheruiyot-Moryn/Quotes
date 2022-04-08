import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '@angular/compiler';
import { Quotes } from 'src/app/quotes';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {
    
  @Input()
  quote!: Quotes;

    @Output() deleteQuote = new EventEmitter<boolean>();

    quoteDelete(deleteyes:boolean){
        this.deleteQuote.emit(deleteyes);
    }
    
 constructor() { }

 upVote(){
  this.quote.upvote++;
}
downVote(){
  this.quote.downvote++;
}
  ngOnInit(): void {
  }

}
