import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.css']
})
export class LoginDoctorComponent implements OnInit {
    myForm: FormGroup;
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.myForm = this.fb.group({
            email: '',
            password:''
        })

    }

    save() {
        return this.myForm.value;
    }

}
