export class Quotes {
  public name: string;
  public quote!: string; 
  public author!: string;
  public submissionDate: Date;
  public upvote!:number;
  public downvote!:number;

  
constructor(name:string, quote:string, author:string,submissionDate: Date, upvotes:number, downvotes:number){
  this.name = name;
  this.quote = quote;
  this.author = author;
  this.submissionDate = submissionDate;
  this.upvote = upvotes;
  this.downvote = downvotes;
}
}
