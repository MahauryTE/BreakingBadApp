import { Component, OnInit } from '@angular/core';
import {PersonnageService} from "../service/personnage.service";

@Component({
  selector: 'app-personnages',
  templateUrl: './personnages.component.html',
  styleUrls: ['./personnages.component.scss']
})
export class PersonnagesComponent implements OnInit {

  constructor(public personnageService: PersonnageService) { }

  ngOnInit(): void {
  }

  filterPersonnages($event: any) {
    this.personnageService.getPersonnages($event.target.value);
  }

  changePage($event: any) {
    this.personnageService.getAllPersonnages(parseInt($event.target.textContent) - 1);
  }
}
