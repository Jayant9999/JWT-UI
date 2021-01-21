"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ForgetPasswordComponent = void 0;
var core_1 = require("@angular/core");
var http_client_service_service_1 = require("../http-client-service.service");
var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(HttpClientService, router) {
        this.HttpClientService = HttpClientService;
        this.router = router;
        this.isDisplay = false;
        this.user = new http_client_service_service_1.User(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    }
    ForgetPasswordComponent.prototype.onOptionsSelected = function (value) {
        if (value != "0") {
            this.isDisplay = true;
        }
        else {
            this.isDisplay = false;
        }
    };
    ForgetPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgetPasswordComponent.prototype.onOptionsSelected_Forget = function (value) {
        if (value == "1") {
            this.user.security_q_id = "1";
            this.isDisplay = true;
        }
        else if (value == "2") {
            this.user.security_q_id = "2";
            this.isDisplay = true;
        }
        else if (value == "3") {
            this.user.security_q_id = "3";
            this.isDisplay = true;
        }
        else if (value == "4") {
            this.user.security_q_id = "4";
            this.isDisplay = true;
        }
        else if (value == "5") {
            this.user.security_q_id = "5";
            this.isDisplay = true;
        }
    };
    ForgetPasswordComponent.prototype.forget = function () {
        var _this = this;
        this.HttpClientService.forget(this.user).subscribe(function (res) {
            if (res != 0) {
                // alert("Password Successfully Changed");
                _this.router.navigate(['login']);
            }
            else {
                // alert("Invalid Inputs");
            }
        });
    };
    ForgetPasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-forget-password',
            templateUrl: './forget-password.component.html',
            styleUrls: ['./forget-password.component.css']
        })
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());
exports.ForgetPasswordComponent = ForgetPasswordComponent;
