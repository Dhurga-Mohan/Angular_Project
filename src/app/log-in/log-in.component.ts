import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDetailsService } from '../login-details.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit{
  loginForm!: FormGroup;
  constructor(private loginService:LoginDetailsService, private route: Router) { }
  // userDetail:any = this.loginDetail.loginDetails;
  submit(){
    console.log(this.loginForm.value);
    if(this.loginService.loginValidate(this.loginForm.value)) {
      this.route.navigateByUrl('');
    } else {
      alert('Login Failed')
    }
  }
  ngOnInit(): void {
    this.loginForm=new FormGroup({
      'UserName': new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      'Password': new FormControl(null, [Validators.required, Validators.maxLength(6)])
    })
  }
}
