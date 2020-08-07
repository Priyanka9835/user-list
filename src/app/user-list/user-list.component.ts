import { Component, OnInit } from '@angular/core';

import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usersData: any;
  searchText: string;

  constructor(private userSer: UsersService) { }

  ngOnInit(): void {
    this.refreshUserList();
  }

  // tslint:disable-next-line:typedef
  refreshUserList() {
    this.userSer.getUserDetails().subscribe(res => {
      this.usersData = res;
    });
  }

}
