
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faculty, HttpClientServiceService, result, student } from '../http-client-service.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [DatePipe]
})
export class ResultComponent implements OnInit {

  isP = false;
  examDate: string;
  examSubject: string;
  maxMarks: number;
  isStu = false;
  Student: student[];
  stu: student = new student;
  Result: result[];
  updateResult: result[];
  role_id: number;
  Faculty: faculty = new faculty(null, null, null, null, null);
  isDisplay = false;
  constructor(private Http: HttpClientServiceService, private router: Router, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.Http.getUser(sessionStorage.getItem('id')).subscribe(res => {
      this.role_id = res.role_id;
      if (this.role_id == 1) {
        this.isDisplay = true;
        this.getStudentToUpdateResult();
      }
      else if (this.role_id == 2) {
        this.isStu = true;
        this.isDisplay = false;
        this.getres();
      } else if (this.role_id == 3) {
        this.isStu = true;
        this.isDisplay = false;
        this.isP = true;
      }
    })

    this.GetChildByUid();

  }

  GetChildByUid() {
    this.Http.GetChildByUid(sessionStorage.getItem('id')).subscribe(res => {
      this.Student = res;

    })
  }


  getres() {

    this.Http.getResult(sessionStorage.getItem('id')).subscribe(res => {
      this.Result = res;
      for (var i = 0; i < res.length; i++) {
        res[i].exam_date = res[i].exam_date.slice(0, 2) + "/" + res[i].exam_date.slice(2, 4) + "/" + res[i].exam_date.slice(4, 8);
      }
    })
  }

  back() {
    this.router.navigate(['userHome']);
  }




  getStudentToUpdateResult() {
    this.Http.getClass(sessionStorage.getItem('id')).subscribe(res => {
      this.Faculty.teaching_class = res.teaching_class;

      this.Http.StudentList(this.Faculty.teaching_class).subscribe(res => {

        this.updateResult = res;
        for (var i = 0; i < res.length; i++) {
          this.updateResult[i].student_id = res[i].user_id_student;
        }
      })
    })
  }

  classResUpdate() {
    this.examDate = this.datePipe.transform(this.examDate, 'ddMMyyyy');
    for (var i = 0; i < this.updateResult.length; i++) {
      this.updateResult[i].exam_date = this.examDate;
      this.updateResult[i].subject = this.examSubject;
      this.updateResult[i].max_marks = this.maxMarks;


    }
    this.Http.updateResult(this.updateResult).subscribe(res => {

    })

  }


  getSMarksheet() {
    this.Http.getResult(this.stu.user_id_student).subscribe(res => {
      this.Result = res;

    })
  }



}


