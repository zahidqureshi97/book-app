import { Price } from "./Price";

export class Book{
    ISBN?: number;
    title: string;
    author: string;
    summary?: string;
    image?: string;
    price?: Price;

    constructor(title:string, author:string){
        this.title = title;
        this.author = author;
    } 
}