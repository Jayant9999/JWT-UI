import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { attendance, HttpClientServiceService, student } from '../http-client-service.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
  providers: [DatePipe]
})
export class AttendanceComponent implements OnInit {
  attDate: string;
  attStatus: number;
  cls: number;
  isP = false;
  isDisplay = false;
  isOther = false;
  role_id: number;
  att: attendance[];
  students: student[];
  stu: student = new student;
  constructor(private Http: HttpClientServiceService, private router: Router, private datePipe: DatePipe) { }

  ngOnInit(): void {

    this.getdetails();


  }

  getdetails() {
    this.Http.getUser(sessionStorage.getItem('id')).subscribe(res => {
      this.role_id = res.role_id;
      if (this.role_id == 1) {
        this.isDisplay = true;
        this.isOther = false;
      }
      else {
        this.isOther = true;
        this.isDisplay = false;
      }
      if (this.role_id == 1) {
        this.Http.getFacultyClass(sessionStorage.getItem('id')).subscribe(res => {
          this.cls = res.teaching_class;
          this.listToUpdateAttendance();
        })
      }
      if (this.role_id == 2) {
        this.Http.getStudentClas(sessionStorage.getItem('id')).subscribe(res => {
          this.cls = res.student_class;
          this.showdata();
        })
      }

      if (this.role_id == 3) {

        this.isOther = true;
        this.isP = true;
        this.GetChildByUid();

      }

    })





  }

  showdata() {
    this.Http.getAttendance(sessionStorage.getItem('id')).subscribe(res => {
      this.att = res;
      for (var i = 0; i < res.length; i++) {
        res[i].att_date = res[i].att_date.slice(0, 2) + "/" + res[i].att_date.slice(2, 4) + "/" + res[i].att_date.slice(4, 8);

        //notice.date_to = notice.date_to.slice(0, 2) + "/" + notice.date_to.slice(2, 4) + "/" + notice.date_to.slice(4, 8);
        if (res[i].present == 0 && res[i].studentleave == 0) {
          this.att[i].attendance_colour = 'red';
        }
        if (res[i].present == 0 && res[i].studentleave == 1) {
          this.att[i].attendance_colour = 'orange';
        }
        if (res[i].present == 1 && res[i].studentleave == 0) {
          this.att[i].attendance_colour = 'green';
        }

      }

    })
  }

  back() {
    this.router.navigate(['userHome']);
  }



  listToUpdateAttendance() {

    this.Http.StudentList1(this.cls).subscribe(res => {
      this.att = res;

      for (var i = 0; i < this.att.length; i++) {
        if (!this.att[i].status)
          this.att[i].status = "red";

        this.att[i].student_id = res[i].user_id_student;
      }


    })

  }


  applyAtt(att: attendance) {

    if (att.status === 'red') {
      att.status = 'green';
    }
    else if (att.status === 'green') {
      att.status = 'orange';
    }
    else if (att.status === 'orange') {
      att.status = 'red';
    }
  }


  submitResult() {
    this.attDate = this.datePipe.transform(this.attDate, 'ddMMyyyy');
    for (var i = 0; i < this.att.length; i++) {

      this.att[i].att_date = this.attDate;

      if (this.att[i].status === 'red') {
        this.att[i].present = 0;
        this.att[i].studentleave = 0;
      }
      if (this.att[i].status === 'orange') {
        this.att[i].present = 0;
        this.att[i].studentleave = 1;
      }
      if (this.att[i].status === 'green') {
        this.att[i].present = 1;
        this.att[i].studentleave = 0;
      }


    }
    this.Http.submitAttendance(this.att).subscribe(res => {
      // alert("submited");
    })


  }

  GetChildByUid() {
    this.Http.GetChildByUid(sessionStorage.getItem('id')).subscribe(res => {
      this.students = res;

    })
  }


  getSAttendence() {
    this.Http.getAttendance(this.stu.user_id_student).subscribe(res => {
      this.att = res;
    })
  }

}
