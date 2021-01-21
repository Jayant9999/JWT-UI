import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientServiceService, User } from '../http-client-service.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  isDisplay = false;
  user: User = new User(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);

  onOptionsSelected(value: string) {
    if (value != "0") {
      this.isDisplay = true;
    }
    else {
      this.isDisplay = false;
    }
  }
  constructor(private HttpClientService: HttpClientServiceService, private router: Router) { }

  ngOnInit(): void {
  }


  onOptionsSelected_Forget(value: string) {
    if (value == "1") {
      this.user.security_q_id = "1";
      this.isDisplay = true;
    }
    else if (value == "2") {
      this.user.security_q_id = "2";
      this.isDisplay = true;
    } else if (value == "3") {
      this.user.security_q_id = "3";
      this.isDisplay = true;
    } else if (value == "4") {
      this.user.security_q_id = "4";
      this.isDisplay = true;
    } else if (value == "5") {
      this.user.security_q_id = "5";
      this.isDisplay = true;
    }


  }


  forget() {
    this.HttpClientService.forget(this.user).subscribe(res => {
      if (res != 0) {
        // alert("Password Successfully Changed");
        this.router.navigate(['login']);
      } else {
        // alert("Invalid Inputs");
      }
    })
  }


}
