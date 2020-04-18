export class DoctorSearch {
    id: number;
    nom: string;
    prenom: string;
    date: string;
    specialite: string;
    telephone: string;
    email: string;
    password: string;
    codePostal: string;
    ville: string;
    adresse: string;
    secretQuestion: string;
    answer: string;

    constructor(id: number, nom: string, prenom: string, date:string, specialite: string, telephone: string, codePostal: string, ville: string, adress: string) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.date = date;
        this.specialite = specialite;
        this.telephone = telephone;
        this.codePostal = codePostal;
        this.ville = ville;
        this.adresse = adress

    }



}
