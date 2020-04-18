import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {

    myForm: FormGroup;
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.myForm = this.fb.group({
            email: '',
            password: ''
        })

    }

    save() {
        return this.myForm.value;
    }

}
