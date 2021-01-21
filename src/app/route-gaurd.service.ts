import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { HttpClientServiceService } from './http-client-service.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RouteGaurdService implements CanActivate {
  constructor(private http: HttpClientServiceService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return new Observable<boolean>((o) => {
      this.http.validate().subscribe(
        () => {
          o.next(true);
        },
        () => {
          this.router.navigate(['login']);
        },
        () => {
          o.complete();
        }
      );
    });
  }
}
