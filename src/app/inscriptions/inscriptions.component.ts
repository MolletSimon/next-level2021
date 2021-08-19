import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.scss']
})
export class InscriptionsComponent implements OnInit {
  loader = false;
  step = 1;
  users: any[] = [];
  constructor(private dB: AngularFirestore, private toastr: ToastrService) { 
  }

  ngOnInit(): void {
    this.dB.collection('inscrits').get().subscribe(result => {
      result.forEach(doc => this.users.push(doc.data()));
      console.log(this.users)
    })
  }

  saveForm(f: NgForm) {
    if(f.invalid) {
      this.toastr.error('Vous devez saisir tous les champs obligatoires !', 'Attention');
      this.closeModal();
    } else {

      
      this.loader = true;
      f.value.payed = false;
      this.dB.collection('inscrits').add(f.value)
        .then(res => {
          this.toastr.success("Votre inscription a bien été prise en compte !", "Félicitations");
          this.closeModal();
          this.loader = false;
          f.reset();
          this.back();
        })
        .catch(err => {
          this.toastr.error("Une erreur s'est produite ! Veuillez réessayer ou contacter l'administrateur", "Aie aie aie")
        })
    }
    
  }

  start() {
    let step0 = document.getElementById('step0') as HTMLElement
    let step1 = document.getElementById('step1') as HTMLElement
    step0.style.display = 'none';
    step1.style.display = 'block';
  }
  
  next() {
    let step1 = document.getElementById('step1') as HTMLElement
    let step2 = document.getElementById('step2') as HTMLElement
    step1.style.display = 'none';
    step2.style.display = 'block';
  }

  back() {
    let step1 = document.getElementById('step1') as HTMLElement
    let step2 = document.getElementById('step2') as HTMLElement
    step1.style.display = 'block';
    step2.style.display = 'none';
  }

  openModal(id: string) {
    let span = document.getElementsByClassName("close")[0] as HTMLElement;
    let modal = document.getElementById(id) as HTMLElement;
    modal.style.display = "block";

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    span.onclick = function() {
      modal.style.display = "none";
    }
  }

  closeModal() {
    let modal = document.getElementById("modal-valid") as HTMLElement;
    modal.style.display = "none";
  }
  

}
