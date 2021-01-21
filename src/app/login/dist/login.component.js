"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var http_client_service_service_1 = require("../http-client-service.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(HttpClientService, router) {
        this.HttpClientService = HttpClientService;
        this.router = router;
        this.user = new http_client_service_service_1.User(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('id')) {
            this.router.navigate(['userHome']);
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.HttpClientService.login(this.user).subscribe(function (res) {
            if (res != null) {
                if (res.role_id == 0 && res.isApproved == 0) {
                    // alert("Waiting for approval");
                    _this.router.navigate(['homepage']);
                }
                else if (res.role_id == 0 && res.isApproved == 1) {
                    sessionStorage.setItem("id", res.userId);
                    _this.router.navigate(['userHome']);
                }
                if (res.role_id == 1 && res.isApproved == 0) {
                    // alert("Waiting for approval");
                    _this.router.navigate(['homepage']);
                }
                else if (res.role_id == 1 && res.isApproved == 1) {
                    sessionStorage.setItem("id", res.userId);
                    _this.router.navigate(['userHome']);
                }
                if (res.role_id == 2 && res.isApproved == 0) {
                    // alert("Waiting for approval");
                    _this.router.navigate(['homepage']);
                }
                else if (res.role_id == 2 && res.isApproved == 1) {
                    sessionStorage.setItem("id", res.userId);
                    _this.router.navigate(['userHome']);
                }
                if (res.role_id == 3 && res.isApproved == 0) {
                    //alert("Waiting for approval");
                    _this.router.navigate(['homepage']);
                }
                else if (res.role_id == 3 && res.isApproved == 1) {
                    sessionStorage.setItem("id", res.userId);
                    _this.router.navigate(['userHome']);
                }
            }
            else {
                //alert("Wrong Credentials");
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
