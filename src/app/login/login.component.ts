import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:FormGroup;
  constructor(private fb:FormBuilder,private _taskdata:TaskService,private _router:Router) { }

  ngOnInit() {
    this.login=this.fb.group({
      user_email:new FormControl(),
      user_password:new FormControl()
    });
  }
  onLoginsubmit(){
    this._taskdata.login(this.login.value.user_email,this.login.value.user_password);
    this._router.navigate(['/task']);
  }

}
