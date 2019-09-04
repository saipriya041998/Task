import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TaskService } from './task.service';

@Injectable({
  providedIn: 'root'
})
export class TaskGuardService implements CanActivate {

  constructor(private _taskdata:TaskService,private _router:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    return this.isUserLoggedIn();
  }
  isUserLoggedIn(){
    if(this._taskdata.isLogged){
      return true;
    }
    alert('Login Please');
    this._router.navigate(['/login']);
    return false;

  }
}
