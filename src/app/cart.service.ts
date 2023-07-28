import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private items:any = [];
  
  public totalProductValue = 0;
  

  addToCart(product: any){
    this.items.push(product);
    this.totalProductValue = this.items.length;
  }

  getItems(){
   return this.items;
  }


  clearCart(){
    this.items=[];
    this.totalProductValue = 0;
    return this.items;
  }

  
}
