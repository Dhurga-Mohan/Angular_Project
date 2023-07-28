import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  activeType:string="All Products";
  receivedProducts:any="";
  filteredProducts:any="";
  constructor(private receiceProducts:ApiService, private cartProducts:CartService) { }
  
  ngOnInit(): void {
    this.receiceProducts.getProducts().subscribe(res=>{
      this.receivedProducts=res;
      this.filteredProducts=res;
    }) 
  }
  addItems(product:any){
    this.cartProducts.addToCart(product);
    
}
  setActiveType=(type:string,filteredName:any)=>{
    this.activeType=type;
    if(filteredName===''){
      this.filteredProducts=this.receivedProducts;
    }else{
      this.filteredProducts = this.receivedProducts.filter((item:any)=>{
        return item.category === filteredName;
      })
    }
    
  }

}
