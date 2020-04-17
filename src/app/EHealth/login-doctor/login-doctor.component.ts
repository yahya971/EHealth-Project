import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.css']
})
export class LoginDoctorComponent implements OnInit {
    test: string;
    tests = ['a', 'b', 'c'];
  constructor() { }

    ngOnInit() {
        this.test = 'hello World';

  }

}
