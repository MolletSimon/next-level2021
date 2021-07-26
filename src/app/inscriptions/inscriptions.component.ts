import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.scss']
})
export class InscriptionsComponent implements OnInit {

  step = 1;
  public user: any;
  constructor(private dB: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveForm(f: NgForm) {
    this.dB.collection('inscrits').add({
      nom: f.value.nom,
      prenom: f.value.prenom
    })
  }

  step2(f: NgForm) {
    this.user = f.value;
    this.step++;
  }

  openModal() {
    let span = document.getElementsByClassName("close")[0] as HTMLElement;
    let modal = document.getElementById("modal-valid") as HTMLElement;
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
