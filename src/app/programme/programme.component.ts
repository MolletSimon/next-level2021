import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-programme',
    templateUrl: './programme.component.html',
    styleUrls: ['./programme.component.scss']
})
export class ProgrammeComponent implements OnInit {
    tabs : string = "v";
    constructor() { }
    
    ngOnInit(): void {
    }
    
}
