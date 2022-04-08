import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuotes = new Quotes ("","","",new Date(),0,0);
  @Output() addQuotes = new EventEmitter < Quotes > ();

  submittingQuote(){

    this.addQuotes.emit(this.newQuotes);
    this.newQuotes = new Quotes("","","",new Date(),0,0)
}
  
  constructor() { }

  ngOnInit(): void {
  }

}
