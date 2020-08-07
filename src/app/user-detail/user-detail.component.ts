import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  paramsId: any;
  userDetails: any;
  constructor(private routes: ActivatedRoute, private userSer: UsersService) { }

  ngOnInit(): void {
     this.geUserDetail();
     this.getParams();
  }

  // tslint:disable-next-line:typedef
  getParams() {
     this.routes.params.subscribe(res => {
        const id = res.id;
        this.paramsId = id;
     });
  }

  // tslint:disable-next-line:typedef
  geUserDetail() {
    this.userSer.getUserById(this.paramsId).subscribe(res => {
        this.userDetails = res;
        console.log(this.userDetails);
    });
  }
}
