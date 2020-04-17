import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-doctor-forgotton-pw',
  templateUrl: './doctor-forgotton-pw.component.html',
  styleUrls: ['./doctor-forgotton-pw.component.css']
})
export class DoctorForgottonPwComponent implements OnInit {
    myForm: FormGroup;
  constructor(private fb:FormBuilder) { }

    ngOnInit(): void {
        this.myForm = this.fb.group({
            email: '',
            secretQuestion: '',
            answer:''
        })

    }
    save() {
        return this.myForm.value;

    }

}
