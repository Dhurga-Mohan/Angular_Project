import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private checkOut:CartService) { }

  Items:any=(this.checkOut.getItems());
  checkoutForm!: FormGroup;
  completeOrder(){
    this.checkOut.clearCart();
    this.Items= this.checkOut.getItems();
  }
  ngOnInit(): void {
    this.checkoutForm=new FormGroup({
      'fName': new FormControl(null, [Validators.required]),
      'lName': new FormControl(null, [Validators.required]),
      'address': new FormControl(null, [Validators.required]),
      'phone': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required]),
      'city': new FormControl(null, [Validators.required]),
      'state': new FormControl(null, [Validators.required]),
      'pincode': new FormControl(null, [Validators.required])
    })
  }

}

