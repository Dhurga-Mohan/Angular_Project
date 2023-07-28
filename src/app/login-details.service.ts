import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginDetailsService {

  constructor() { }
  public loggedInUser: any = [];
  public loginDetails:any = [
    {
      UserName: "user1",
      Password: "PS1"
    },
    {
      UserName: "user2",
      Password: "PS2"
    },
    {
      UserName: "user3",
      Password: "PS3"
    },
    {
      UserName: "user4",
      Password: "PS4"
    },
    {
      UserName: "user5",
      Password: "PS5"
    },
    {
      UserName: "user6",
      Password: "PS6"
    },
    {
      UserName: "user7",
      Password: "PS7"
    },
    {
      UserName: "user8",
      Password: "PS8"
    },
    {
      UserName: "user9",
      Password: "PS9"
    },
    {
      UserName: "user10",
      Password: "PS10"
    }
  ]


  loginValidate(userDetail: any) {
    console.log(userDetail, this.loginDetails);
    this.loggedInUser = this.loginDetails.filter((user: any)=> user.UserName === userDetail.UserName && user.Password === userDetail.Password);
    console.log(this.loggedInUser);
    if(this.loggedInUser.length) {
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    return this.loggedInUser.length;
  }

}
