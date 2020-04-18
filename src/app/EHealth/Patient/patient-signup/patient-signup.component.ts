import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css']
})
export class PatientSignupComponent implements OnInit {
    myForm: FormGroup;

    myFormResult;
    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.myForm = this.fb.group(
            {
                nom: '',
                prenom: '',
                date: '',
                telephone: '',
                email: '',
                password: '',
                codePostal: '',
                ville: '',
                adresse: '',
                secretQuestion: '',
                answer: ''
            }
        )
    }


    save() {
        return this.myForm.value;
    }
}
