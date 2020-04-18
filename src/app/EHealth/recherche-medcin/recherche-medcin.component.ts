import { Component, OnInit } from '@angular/core';
import { DoctorSearch } from '../../Models/doctor-search';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recherche-medcin',
  templateUrl: './recherche-medcin.component.html',
  styleUrls: ['./recherche-medcin.component.css']
})
export class RechercheMedcinComponent implements OnInit {
    doctors: DoctorSearch[] = [];
    filteredDoctors: DoctorSearch[];
    myForm: FormGroup;
  constructor(private fb:FormBuilder) { }

    ngOnInit(): void {

        this.myForm = this.fb.group({
            ville: '',
            codePostal: '',
            specialite:''
        })

        this.doctors.push(new DoctorSearch(1, 'Rebai', 'Maher', '01/01/1985', 'chirugien', '55225125', '5412', 'Paris', 'Rue de triomphe'));
        this.doctors.push(new DoctorSearch(2, 'Derbeli', 'Yahya', '01/01/1985', 'genecologue', '55225125', '8020', 'Tunis', 'Rue de Qatar'))
        this.doctors.push(new DoctorSearch(3, 'Derbeli', 'Dhia', '01/02/1985', 'orthopediste', '55225125', '8021', 'Tunis', 'Rue des Fleurs'))
        this.doctors.push(new DoctorSearch(4, 'Rebai', 'Hammadi', '01/03/1985', 'chirugien', '55225125', '5452', 'Nantes', 'Rue de triomphe'))
        
    }
    filterDoctors() {

        return this.doctors.filter(doctor => 
            (doctor.codePostal.startsWith(this.myForm.value.codePostal) || this.myForm.value.codePostal == '') &&
            (doctor.ville.toLowerCase().startsWith(this.myForm.value.ville.toLowerCase()) || this.myForm.value.ville == '') &&
            (doctor.specialite.toLowerCase().startsWith(this.myForm.value.specialite.toLowerCase()) || this.myForm.value.specialite == '')
        )

    }

    reset() {
        this.myForm.reset();
        this.myForm.value.ville = '';
        this.myForm.value.codePostal = '';

        this.myForm.value.specialite = '';

        
    }




}



