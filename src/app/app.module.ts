import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
import { FormsModule } from '@angular/forms';
import * as firebase from "firebase/app";
import {AngularFireAnalyticsModule} from '@angular/fire/analytics';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ToastrModule } from 'ngx-toastr';
import { PageComponent } from './page/page.component';
import { UsersComponent } from './users/users.component';


const config = {
  apiKey: "AIzaSyBaWuy1COJznzGtuvdfN7VfsFmCIbIf2OI",
  authDomain: "next-level2021.firebaseapp.com",
  databaseURL: "https://next-level2021-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "next-level2021",
  storageBucket: "next-level2021.appspot.com",
  messagingSenderId: "963954977865",
  appId: "1:963954977865:web:598f45fcaeeb4796802398",
  measurementId: "G-6V63BWYFVH"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InscriptionsComponent,
    PageComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
