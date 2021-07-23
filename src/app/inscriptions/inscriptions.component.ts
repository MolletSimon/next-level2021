import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.scss']
})
export class InscriptionsComponent implements OnInit {

  constructor(private dB: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveForm(f: NgForm) {
    console.log(f.value);
    this.dB.collection('inscrits').add({
      nom: f.value.nom,
      prenom: f.value.prenom
    })
  }

}
