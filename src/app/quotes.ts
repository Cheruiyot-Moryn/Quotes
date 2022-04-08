export class Quotes {
  public id!:number;
  public quote!: string; 
  public author!: string;
  public upvote!:number;
  public downvote!:number;

  
constructor(id:number, quote:string, author:string,upvotes:number, downvotes:number){
  this.id = id;
  this.quote = quote;
  this.author = author;
  this.upvote = upvotes;
  this.downvote = downvotes;
}
}
