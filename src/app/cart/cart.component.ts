import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { LoginDetailsService } from '../login-details.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private cartItems:CartService, private loginService:LoginDetailsService, private route:Router) { }

  Items:any=(this.cartItems.getItems());
  
  loggedInUser:any=[];
  selectedOption: number=1;

  options = [
    { name: "option1", value: 1 },
    { name: "option2", value: 2 }
  ]
  cartClr(){
    this.cartItems.clearCart();
    this.Items= this.cartItems.getItems();
  }
  remove(i:number){
    
    this.Items.splice(i,1);
    this.cartItems.totalProductValue=(this.Items.length);
    }
    checkOut(){
      this.loggedInUser = this.loginService.isUserLoggedIn()
      if(this.loggedInUser===1){
       this.route.navigateByUrl('checkout');
      }else{
       alert('Login to continue');
       this.route.navigateByUrl('');
      }
     }
  ngOnInit(): void {
    console.log(this.Items);
  }
}
