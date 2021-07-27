import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import jsPDF from 'jspdf';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  auth = false;
  @ViewChild('content') content!: ElementRef; 

  constructor(private toastr: ToastrService, private dB: AngularFirestore) { }

  ngOnInit(): void {
    this.getUsers();
  }

  authenticate(f: NgForm) {
    if (f.value.pass == 'a') {
      this.auth = true;
    } else {
      this.toastr.error('Mauvais mot de passe.')
    }
  }

  getUsers() {
    this.dB.collection('inscrits').get().subscribe(result => {
      result.forEach(doc => this.users.push(doc.data()));
      console.log(this.users)
    })
  }

  dlpdf() {
    const DATA=this.content.nativeElement;  

    const doc: jsPDF = new jsPDF("l", "mm", "a4");   
    doc.html(DATA, {
      html2canvas: {
        scale: 0.185

      },
      callback: (doc) => {
        doc.save("inscrits");
      }
   }); 
  }

}
