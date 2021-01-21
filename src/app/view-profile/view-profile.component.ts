import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientServiceService, User } from '../http-client-service.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  user: User = new User();

  isStudent = false;
  isFaculty = false;

  constructor(private HttpClientService: HttpClientServiceService, private router: Router) { }

  ngOnInit(): void {

    const id = sessionStorage.getItem('id');

    this.HttpClientService.getUser(id).subscribe(res => {
      this.user = res;
      this.user.dob = this.user.dob.slice(0, 2) + "-" + this.user.dob.slice(2, 4) + "-" + this.user.dob.slice(4, 8);

    })
  }

  //   if(this.user.role_id == 1)
  //   {
  //     this.isFaculty=true;
  //     this.isStudent=false;
  //   }
  //   else if(this.user.role_id==2)
  //   {
  //     this.isStudent=true;
  //     this.isFaculty=false;
  //   }
  //   else{
  //     this.isFaculty=false;
  //     this.isStudent=false;
  //   }
  // }

  back() {
    this.router.navigate(['userHome']);
  }


  save() {


  }

}
