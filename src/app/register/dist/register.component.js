"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var http_client_service_service_1 = require("../http-client-service.service");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(datePipe, httpClientService, router) {
        this.datePipe = datePipe;
        this.httpClientService = httpClientService;
        this.router = router;
        /* isDisplay = false;
        Display()
         {
           this.isDisplay=!this.isDisplay;
          
         }
       */
        this.isDisplay = false;
        this.isFaculty = false;
        this.user = new http_client_service_service_1.User(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    }
    RegisterComponent.prototype.onOptionsSelected = function (value) {
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
    };
    RegisterComponent.prototype.onSecurityOptionsSelected_s = function (value) {
        if (value == "1") {
            this.user.securityQuestionId_S = "1";
        }
        else if (value == "2") {
            this.user.securityQuestionId_S = "2";
        }
        else if (value == "3") {
            this.user.securityQuestionId_S = "3";
        }
        else if (value == "4") {
            this.user.securityQuestionId_S = "4";
        }
        else if (value == "5") {
            this.user.securityQuestionId_S = "5";
        }
    };
    RegisterComponent.prototype.onClassSelected = function (cls) {
        this.user.student_class = cls;
    };
    RegisterComponent.prototype.onClassSelectedFaculty = function (cls) {
        this.user.faculty_class = cls;
    };
    RegisterComponent.prototype.onSecurityOptionsSelected_f = function (value) {
        if (value == "1") {
            this.user.securityQuestionId_F = "1";
        }
        else if (value == "2") {
            this.user.securityQuestionId_F = "2";
        }
        else if (value == "3") {
            this.user.securityQuestionId_F = "3";
        }
        else if (value == "4") {
            this.user.securityQuestionId_F = "4";
        }
        else if (value == "5") {
            this.user.securityQuestionId_F = "5";
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('id')) {
            this.router.navigate(['userHome']);
        }
        this.getCountries();
    };
    RegisterComponent.prototype.Register = function () {
        var _this = this;
        this.user.dob = this.datePipe.transform(this.user.dob, 'ddMMyyyy');
        // alert(this.user.dob);
        this.httpClientService.Register(this.user).subscribe(function (res) {
            //  alert("Successfully Registered");
            _this.user.fName = "";
            _this.user.lName = "";
            _this.user.email_id = "";
            _this.user.mobile_no = "";
            _this.user.address = "";
            _this.user.city = "";
            _this.user.state = "";
            _this.user.fName_f = "";
            _this.user.lName_f = "";
            _this.user.email_id_f = "";
            _this.user.mobile_no_f = "";
            _this.user.dob = "";
            _this.user.gender = "";
            _this.user.student_class = null;
            _this.user.faculty_class = null;
            _this.user.joining_date = "";
            _this.user.password = "";
            console.log(_this.user.fName, _this.user.lName, _this.user.email_id, _this.user.mobile_no, _this.user.address, _this.user.state);
        });
    };
    RegisterComponent.prototype.getCountries = function () {
        var _this = this;
        this.httpClientService.getCountries().subscribe(function (res) {
            _this.countries = res;
            console.log(res);
        });
    };
    RegisterComponent.prototype.getState = function () {
        var _this = this;
        this.httpClientService.getState(this.user.country).subscribe(function (res) {
            _this.state = res;
            console.log(res);
        });
    };
    RegisterComponent.prototype.getCity = function () {
        var _this = this;
        this.httpClientService.getCity(this.user.country, this.user.state).subscribe(function (res) {
            _this.city = res;
            console.log(res);
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css'],
            providers: [common_1.DatePipe]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
