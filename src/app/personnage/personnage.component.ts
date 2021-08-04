import { Component, OnInit } from '@angular/core';
import {Personnage} from "../business/personnage";
import {Router} from "@angular/router";
import {Location} from '@angular/common';
import {PersonnageService} from "../service/personnage.service";

@Component({
  selector: 'app-personnage',
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.scss']
})
export class PersonnageComponent implements OnInit {

  private _personnage : Personnage;

  constructor(private router: Router, public todoService: PersonnageService, private location: Location) {
    let id = +this.router.url.replace('/personnages/', '');
    this._personnage = this.todoService.getPersonnage(id);
  }


  get personnage(): Personnage {
    return this._personnage;
  }

  set personnage(value: Personnage) {
    this._personnage = value;
  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

}
