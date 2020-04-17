import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.component.html',
  styleUrls: ['./doctor-signup.component.css']
})
export class DoctorSignupComponent implements OnInit {
    myForm: FormGroup;
    specialities = ['surgeon', 'genecologue', 'neurologue'];
    myFormResult;
  constructor(private fb:FormBuilder) { }

    ngOnInit(): void {
        this.myForm = this.fb.group(
            {
                nom: '',
                prenom: '',
                date: '',
                specialite: '',
                telephone: '',
                email: '',
                password: '',
                codePostal: '',
                ville: '',
                adresse: '',
                secretQuestion: '',
                answer:''
            }
        )
  }


    save() {
        this.myFormResult = this.myForm.value;
        console.log(this.myFormResult)
    }
}
