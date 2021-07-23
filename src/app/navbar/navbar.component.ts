import { Component, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private animateScrollService: NgAnimateScrollService) { }

  ngOnInit(): void {
  }

  navigateToHeader(id: string) {
    this.animateScrollService.scrollToElement(id, 500)
  }

}
