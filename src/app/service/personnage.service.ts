import { Injectable } from '@angular/core';
import {Personnage} from "../business/personnage";
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs/operators";
import {Observable} from "rxjs";

const apiURL: string = 'https://breakingbadapi.com/api';
const routes = {
  personnages : `${apiURL}/characters`,
}

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  private _personnages: Personnage[] = [];

  constructor(private http: HttpClient) {
    this.getAllPersonnages(0);
  }

  get personnages(): Personnage[] {
    return this._personnages;
  }

  set personnages(value: Personnage[]) {
    this._personnages = value;
  }

  //Appel de l'API pour récupérer tous les personnages à l'adresse https://breakingbadapi.com/api/characters en GET
  getAllPersonnages(page : number): void {
    this._personnages = [];

    this.http.get(`${routes.personnages}?limit=6&offset=${6*page}`).pipe(
      map(
        (jsonArray: any) => jsonArray.map((jsonItem : any) => Personnage.fromJson(jsonItem))
      )
    ).subscribe(
      value => {
        value.forEach((personnage : Personnage) => this._personnages.push(personnage));
      },
    );

  }

  getPersonnage(id: number): Personnage {
    let personnage : Personnage;

    for(let i = 0; i < this._personnages.length; i++) {
      if(this._personnages[i].id == id) {
        personnage = this._personnages[i];
        break;
      }
    }
    return personnage;
  }

  getPersonnages(filtre : string): void {
    if (!(filtre === "")){
      this._personnages = [];

      this.http.get(`${routes.personnages}?name=${filtre}`).pipe(
        map(
          (jsonArray: any) => jsonArray.map((jsonItem : any) => Personnage.fromJson(jsonItem))
        )
      ).subscribe(
        value => {
          value.forEach((personnage : Personnage) => this._personnages.push(personnage));
        },
      );
    } else{
      this.getAllPersonnages(1);
    }
  }
}





