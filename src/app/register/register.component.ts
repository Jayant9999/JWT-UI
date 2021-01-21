import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Countries, HttpClientServiceService, User } from '../http-client-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [DatePipe]
})
export class RegisterComponent implements OnInit {
  countries: Countries[];
  state: Countries[];
  city: Countries[];
  futureDateError: boolean;

  /* isDisplay = false;
  Display()
   {
     this.isDisplay=!this.isDisplay;
    
   }
 */
  isDisplay = false;
  isFaculty = false;


  onOptionsSelected(value: string) {
    if (value == "Student") {
      this.isFaculty = false;
      this.isDisplay = true;
      this.user.role_id = 2;
    }
    else if (value == "Faculty") {
      this.isDisplay = false;
      this.isFaculty = true;
      this.user.role_id = 1;
    }
    else {
      this.isDisplay = false;
      this.isFaculty = false;
    }
  }
  onSecurityOptionsSelected_s(value: string) {
    if (value == "1") {
      this.user.securityQuestionId_S = "1";
    }
    else if (value == "2") {
      this.user.securityQuestionId_S = "2";
    } else if (value == "3") {
      this.user.securityQuestionId_S = "3";
    } else if (value == "4") {
      this.user.securityQuestionId_S = "4";
    } else if (value == "5") {

      this.user.securityQuestionId_S = "5";
    }

  }

  onClassSelected(cls: number) {
    this.user.student_class = cls;
  }
  onClassSelectedFaculty(cls: number) {
    this.user.faculty_class = cls;
  }

  onSecurityOptionsSelected_f(value: string) {

    if (value == "1") {
      this.user.securityQuestionId_F = "1";
    }
    else if (value == "2") {
      this.user.securityQuestionId_F = "2";
    } else if (value == "3") {
      this.user.securityQuestionId_F = "3";
    } else if (value == "4") {
      this.user.securityQuestionId_F = "4";
    } else if (value == "5") {
      this.user.securityQuestionId_F = "5";

    }

  }

  rePassword: string;
  user: User = new User(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
  constructor(private datePipe: DatePipe, private httpClientService: HttpClientServiceService, private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('id')) {
      this.router.navigate(['userHome']);
    }
    this.getCountries();
  }

  Register() {
    this.user.dob = this.datePipe.transform(this.user.dob, 'ddMMyyyy');

    // alert(this.user.dob);
    this.httpClientService.Register(this.user).subscribe(res => {
      //  alert("Successfully Registered");
      this.user.fName = "";
      this.user.lName = "";
      this.user.email_id = "";
      this.user.mobile_no = "";
      this.user.address = "";
      this.user.city = "";
      this.user.state = "";
      this.user.fName_f = "";
      this.user.lName_f = "";
      this.user.email_id_f = "";
      this.user.mobile_no_f = "";
      this.user.dob = "";
      this.user.gender = "";
      this.user.student_class = null;
      this.user.faculty_class = null;
      this.user.joining_date = "";
      this.user.password = "";
      console.log(this.user.fName, this.user.lName, this.user.email_id, this.user.mobile_no, this.user.address, this.user.state);
    })
  }
  getCountries() {
    this.httpClientService.getCountries().subscribe(res => {
      this.countries = <Countries[]><unknown>res;
      console.log(res);
    });
  }

  getState() {
    this.httpClientService.getState(this.user.country).subscribe(res => {
      this.state = <Countries[]><unknown>res;
      console.log(res);
    });
  }

  getCity() {
    this.httpClientService.getCity(this.user.country, this.user.state).subscribe(res => {


      this.city = <Countries[]><unknown>res;

      console.log(res);

    });

  }





}
