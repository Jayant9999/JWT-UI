import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientServiceService, User } from '../http-client-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private HttpClientService: HttpClientServiceService,
    private router: Router
  ) {}
  user: User = new User(
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  );

  ngOnInit(): void {
    if (sessionStorage.getItem('id')) {
      this.router.navigate(['userHome']);
    }
  }

  login() {
    this.HttpClientService.login(this.user).subscribe((res) => {
      if (res != null) {
        if (res.role_id == 0 && res.isApproved == 0) {
          alert('Waiting for approval');
          this.router.navigate(['homepage']);
        } else if (res.role_id == 0 && res.isApproved == 1) {
          // sessionStorage.setItem("id", res.userId);
          this.router.navigate(['userHome']);
        }

        if (res.role_id == 1 && res.isApproved == 0) {
          alert('Waiting for approval');
          this.router.navigate(['homepage']);
        } else if (res.role_id == 1 && res.isApproved == 1) {
          // sessionStorage.setItem("id", res.userId);
          this.router.navigate(['userHome']);
        }

        if (res.role_id == 2 && res.isApproved == 0) {
          alert('Waiting for approval');
          this.router.navigate(['homepage']);
        } else if (res.role_id == 2 && res.isApproved == 1) {
          // sessionStorage.setItem("id", res.userId);
          this.router.navigate(['userHome']);
        }

        if (res.role_id == 3 && res.isApproved == 0) {
          alert('Waiting for approval');
          this.router.navigate(['homepage']);
        } else if (res.role_id == 3 && res.isApproved == 1) {
          // sessionStorage.setItem("id", res.userId);
          this.router.navigate(['userHome']);
        }
      } else {
        alert('Wrong Credentials');
      }
    });
  }
}
