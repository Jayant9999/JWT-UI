"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AttendanceComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var http_client_service_service_1 = require("../http-client-service.service");
var AttendanceComponent = /** @class */ (function () {
    function AttendanceComponent(Http, router, datePipe) {
        this.Http = Http;
        this.router = router;
        this.datePipe = datePipe;
        this.isP = false;
        this.isDisplay = false;
        this.isOther = false;
        this.stu = new http_client_service_service_1.student;
    }
    AttendanceComponent.prototype.ngOnInit = function () {
        this.getdetails();
    };
    AttendanceComponent.prototype.getdetails = function () {
        var _this = this;
        this.Http.getUser(sessionStorage.getItem('id')).subscribe(function (res) {
            _this.role_id = res.role_id;
            if (_this.role_id == 1) {
                _this.isDisplay = true;
                _this.isOther = false;
            }
            else {
                _this.isOther = true;
                _this.isDisplay = false;
            }
            if (_this.role_id == 1) {
                _this.Http.getFacultyClass(sessionStorage.getItem('id')).subscribe(function (res) {
                    _this.cls = res.teaching_class;
                    _this.listToUpdateAttendance();
                });
            }
            if (_this.role_id == 2) {
                _this.Http.getStudentClas(sessionStorage.getItem('id')).subscribe(function (res) {
                    _this.cls = res.student_class;
                    _this.showdata();
                });
            }
            if (_this.role_id == 3) {
                _this.isOther = true;
                _this.isP = true;
                _this.GetChildByUid();
            }
        });
    };
    AttendanceComponent.prototype.showdata = function () {
        var _this = this;
        this.Http.getAttendance(sessionStorage.getItem('id')).subscribe(function (res) {
            _this.att = res;
            for (var i = 0; i < res.length; i++) {
                res[i].att_date = res[i].att_date.slice(0, 2) + "/" + res[i].att_date.slice(2, 4) + "/" + res[i].att_date.slice(4, 8);
                //notice.date_to = notice.date_to.slice(0, 2) + "/" + notice.date_to.slice(2, 4) + "/" + notice.date_to.slice(4, 8);
                if (res[i].present == 0 && res[i].studentleave == 0) {
                    _this.att[i].attendance_colour = 'red';
                }
                if (res[i].present == 0 && res[i].studentleave == 1) {
                    _this.att[i].attendance_colour = 'orange';
                }
                if (res[i].present == 1 && res[i].studentleave == 0) {
                    _this.att[i].attendance_colour = 'green';
                }
            }
        });
    };
    AttendanceComponent.prototype.back = function () {
        this.router.navigate(['userHome']);
    };
    AttendanceComponent.prototype.listToUpdateAttendance = function () {
        var _this = this;
        this.Http.StudentList1(this.cls).subscribe(function (res) {
            _this.att = res;
            for (var i = 0; i < _this.att.length; i++) {
                if (!_this.att[i].status)
                    _this.att[i].status = "red";
                _this.att[i].student_id = res[i].user_id_student;
            }
        });
    };
    AttendanceComponent.prototype.applyAtt = function (att) {
        if (att.status === 'red') {
            att.status = 'green';
        }
        else if (att.status === 'green') {
            att.status = 'orange';
        }
        else if (att.status === 'orange') {
            att.status = 'red';
        }
    };
    AttendanceComponent.prototype.submitResult = function () {
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
        this.Http.submitAttendance(this.att).subscribe(function (res) {
            // alert("submited");
        });
    };
    AttendanceComponent.prototype.GetChildByUid = function () {
        var _this = this;
        this.Http.GetChildByUid(sessionStorage.getItem('id')).subscribe(function (res) {
            _this.students = res;
        });
    };
    AttendanceComponent.prototype.getSAttendence = function () {
        var _this = this;
        this.Http.getAttendance(this.stu.user_id_student).subscribe(function (res) {
            _this.att = res;
        });
    };
    AttendanceComponent = __decorate([
        core_1.Component({
            selector: 'app-attendance',
            templateUrl: './attendance.component.html',
            styleUrls: ['./attendance.component.css'],
            providers: [common_1.DatePipe]
        })
    ], AttendanceComponent);
    return AttendanceComponent;
}());
exports.AttendanceComponent = AttendanceComponent;
