"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HttpClientServiceService = exports.City = exports.Countries = exports.result = exports.notice = exports.student = exports.faculty = exports.attendance = exports.contactMail = exports.User = void 0;
var core_1 = require("@angular/core");
var User = /** @class */ (function () {
    function User(userId, fName, lName, email_id, mobile_no, address, country, city, state, role_id, fName_f, lName_f, email_id_f, mobile_no_f, dob, gender, student_class, faculty_class, joining_date, password, isApproved, status, securityQuestionId_S, securityQuestionId_F, sQanswer_S, sQanswer_F, security_q_A, security_q_id) {
        if (status === void 0) { status = "red"; }
        this.userId = userId;
        this.fName = fName;
        this.lName = lName;
        this.email_id = email_id;
        this.mobile_no = mobile_no;
        this.address = address;
        this.country = country;
        this.city = city;
        this.state = state;
        this.role_id = role_id;
        this.fName_f = fName_f;
        this.lName_f = lName_f;
        this.email_id_f = email_id_f;
        this.mobile_no_f = mobile_no_f;
        this.dob = dob;
        this.gender = gender;
        this.student_class = student_class;
        this.faculty_class = faculty_class;
        this.joining_date = joining_date;
        this.password = password;
        this.isApproved = isApproved;
        this.status = status;
        this.securityQuestionId_S = securityQuestionId_S;
        this.securityQuestionId_F = securityQuestionId_F;
        this.sQanswer_S = sQanswer_S;
        this.sQanswer_F = sQanswer_F;
        this.security_q_A = security_q_A;
        this.security_q_id = security_q_id;
    }
    return User;
}());
exports.User = User;
var contactMail = /** @class */ (function () {
    function contactMail(id, name, contactPersonEmail, subject, message) {
        this.id = id;
        this.name = name;
        this.contactPersonEmail = contactPersonEmail;
        this.subject = subject;
        this.message = message;
    }
    return contactMail;
}());
exports.contactMail = contactMail;
var attendance = /** @class */ (function () {
    function attendance(compid, att_date, student_id, student_class, present, studentleave, attendance_colour, user_id_student, dOB, fname, lanme, gender, user_id_parent, status) {
        if (status === void 0) { status = 'red'; }
        this.compid = compid;
        this.att_date = att_date;
        this.student_id = student_id;
        this.student_class = student_class;
        this.present = present;
        this.studentleave = studentleave;
        this.attendance_colour = attendance_colour;
        this.user_id_student = user_id_student;
        this.dOB = dOB;
        this.fname = fname;
        this.lanme = lanme;
        this.gender = gender;
        this.user_id_parent = user_id_parent;
        this.status = status;
    }
    return attendance;
}());
exports.attendance = attendance;
var faculty = /** @class */ (function () {
    function faculty(user_id_faculty, teaching_class, joining_date, dob, gender) {
        this.user_id_faculty = user_id_faculty;
        this.teaching_class = teaching_class;
        this.joining_date = joining_date;
        this.dob = dob;
        this.gender = gender;
    }
    return faculty;
}());
exports.faculty = faculty;
var student = /** @class */ (function () {
    function student(user_id_student, student_class, gender, dob, user_id_parent, fName, lName) {
        this.user_id_student = user_id_student;
        this.student_class = student_class;
        this.gender = gender;
        this.dob = dob;
        this.user_id_parent = user_id_parent;
        this.fName = fName;
        this.lName = lName;
    }
    return student;
}());
exports.student = student;
var notice = /** @class */ (function () {
    function notice(notice_id, msg, date_from, date_to, student_class) {
        this.notice_id = notice_id;
        this.msg = msg;
        this.date_from = date_from;
        this.date_to = date_to;
        this.student_class = student_class;
    }
    return notice;
}());
exports.notice = notice;
var result = /** @class */ (function () {
    function result(compid, student_class, exam_date, max_marks, obt_marks, student_id, subject, fName, lName, user_id_student, dob, user_id_parent, gender) {
        this.compid = compid;
        this.student_class = student_class;
        this.exam_date = exam_date;
        this.max_marks = max_marks;
        this.obt_marks = obt_marks;
        this.student_id = student_id;
        this.subject = subject;
        this.fName = fName;
        this.lName = lName;
        this.user_id_student = user_id_student;
        this.dob = dob;
        this.user_id_parent = user_id_parent;
        this.gender = gender;
    }
    return result;
}());
exports.result = result;
var requestBody = {
    headers: {
        'Content-type': 'application/json',
        'X-CSCAPI-KEY': 'OFI5cHlMUFExZm5mbW9vWFl0T0lyRnZNZkNIUWZkc1RUSmlzYVlFNQ==',
        'Access-Control-Allow-Origin': '*'
    }
};
var Countries = /** @class */ (function () {
    function Countries(id, name, iso2) {
        this.id = id;
        this.name = name;
        this.iso2 = iso2;
    }
    return Countries;
}());
exports.Countries = Countries;
var City = /** @class */ (function () {
    function City(id) {
        this.id = id;
    }
    return City;
}());
exports.City = City;
var HttpClientServiceService = /** @class */ (function () {
    function HttpClientServiceService(httpClient) {
        this.httpClient = httpClient;
    }
    HttpClientServiceService.prototype.Register = function (user) {
        alert(user.securityQuestionId_F);
        return this.httpClient.post("http://localhost:8080/user_reg", user);
    };
    HttpClientServiceService.prototype.login = function (user) {
        return this.httpClient.post("http://localhost:8080/login", user);
    };
    HttpClientServiceService.prototype.StudentList = function (cls) {
        return this.httpClient.get("http://localhost:8080/student_List/" + cls);
    };
    HttpClientServiceService.prototype.StudentList1 = function (cls) {
        return this.httpClient.get("http://localhost:8080/student_List/" + cls);
    };
    HttpClientServiceService.prototype.forget = function (user) {
        return this.httpClient.post("http://localhost:8080/forget", user);
    };
    HttpClientServiceService.prototype.getClass = function (id) {
        return this.httpClient.get("http://localhost:8080/get_class/" + id);
    };
    HttpClientServiceService.prototype.getUser = function (id) {
        return this.httpClient.get("http://localhost:8080/userDetails/" + id);
    };
    HttpClientServiceService.prototype.getClassNotice = function (Notice) {
        return this.httpClient.post("http://localhost:8080/notice/class", Notice);
    };
    HttpClientServiceService.prototype.getAttendance = function (cls) {
        return this.httpClient.get("http://localhost:8080/get_attendanceId/" + cls);
    };
    HttpClientServiceService.prototype.getStudentClas = function (id) {
        return this.httpClient.get("http://localhost:8080/getStudentclass/" + id);
    };
    HttpClientServiceService.prototype.getResult = function (id) {
        return this.httpClient.get("http://localhost:8080/getResult/" + id);
    };
    HttpClientServiceService.prototype.getGlobalNotice = function (Notice) {
        return this.httpClient.post("http://localhost:8080/notice/class", Notice);
    };
    HttpClientServiceService.prototype.updateResult = function (Result) {
        return this.httpClient.post("http://localhost:8080/updateResult", Result);
    };
    HttpClientServiceService.prototype.getFacultyClass = function (id) {
        return this.httpClient.get("http://localhost:8080/get_class/" + id);
    };
    HttpClientServiceService.prototype.submitAttendance = function (att) {
        return this.httpClient.post("http://localhost:8080/submit_Attendance", att);
    };
    HttpClientServiceService.prototype.sendQuery = function (cm) {
        return this.httpClient.post("http://localhost:8080/insertQuery", cm);
    };
    HttpClientServiceService.prototype.getCountries = function () {
        return this.httpClient.get("https://api.countrystatecity.in/v1/countries", requestBody);
    };
    HttpClientServiceService.prototype.getState = function (code) {
        return this.httpClient.get("https://api.countrystatecity.in/v1/countries/" + code + "/states", requestBody);
    };
    HttpClientServiceService.prototype.getCity = function (codec, code) {
        return this.httpClient.get("https://api.countrystatecity.in/v1/countries/" + codec + "/states/" + code + "/cities", requestBody);
    };
    HttpClientServiceService.prototype.GetChildByUid = function (uid) {
        return this.httpClient.get("http://localhost:8080/getStudent/" + uid);
    };
    HttpClientServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], HttpClientServiceService);
    return HttpClientServiceService;
}());
exports.HttpClientServiceService = HttpClientServiceService;
