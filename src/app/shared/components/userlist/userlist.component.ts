import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  userList :User[] = [];
  userNumber: number = 10;
  isLoading:boolean = false;
  isShowLoadMore:boolean = true;
  constructor(private userServices : UserService) { }

  ngOnInit(): void {
    this.getUserList(this.userNumber)
  }

  getUserList(number:number):void{
    this.isLoading = false;
    this.userServices.getUsers(number)
      .subscribe(users => {
        this.userList = users.data;
        this.isLoading = true;
    })
  }

  loadMore():void{
    this.userNumber += 10;
    if(this.userNumber === 50){
      this.isShowLoadMore =false;
      this.getUserList(this.userNumber);
    }else{
      this.getUserList(this.userNumber);
    }
  }
}
