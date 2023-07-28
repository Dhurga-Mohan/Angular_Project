import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
import { LoginDetailsService } from '../login-details.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private cart:CartService, private apiCall:ApiService, private loginService: LoginDetailsService) { }
  Item:any=[];
 get totalProduct() {
  return this.cart.totalProductValue;
 }
  get isUserLoggedIn() {
    return this.loginService.isUserLoggedIn();
   }
  
  searchData(){
    this.apiCall.getProducts();
  }
  ngOnInit(): void {
  }

}
