import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { NoticeUpdateComponent } from './notice-update/notice-update.component';
import { AttendanceUpdateComponent } from './attendance-update/attendance-update.component';
import { attendance } from './http-client-service.service';
import { AttendanceComponent } from './attendance/attendance.component';
import { ResultComponent } from './result/result.component';
import { RouteGaurdService } from './route-gaurd.service';
const routes: Routes = [
  { path: '', component: HomepageComponent, canActivate: [RouteGaurdService] },
  {
    path: 'homepage',
    component: HomepageComponent,
    canActivate: [RouteGaurdService],
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'forget',
    component: ForgetPasswordComponent,
    canActivate: [RouteGaurdService],
  },
  {
    path: 'viewProfile',
    component: ViewProfileComponent,
    canActivate: [RouteGaurdService],
  },
  {
    path: 'userHome',
    component: UserHomePageComponent,
    canActivate: [RouteGaurdService],
  },
  {
    path: 'noticeUpdate',
    component: NoticeUpdateComponent,
    canActivate: [RouteGaurdService],
  },
  {
    path: 'applyAttendance',
    component: AttendanceUpdateComponent,
    canActivate: [RouteGaurdService],
  },
  {
    path: 'attendance',
    component: AttendanceComponent,
    canActivate: [RouteGaurdService],
  },
  {
    path: 'result',
    component: ResultComponent,
    canActivate: [RouteGaurdService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
