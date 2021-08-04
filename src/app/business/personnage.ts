enum Categorie {
  BreakingBad = 1,
  BetterCallSaul = 2,
}

export class Personnage {
  private _id: number;
  private _nom: string;
  private _dateNaissance: Date;
  private _professions: Array<string> = [];
  private _lienImage: string;
  private _statut: string;
  private _surnom: string;
  private _categorie: Categorie;
  private _acteur: string;

  public static fromJson(json: any): Personnage {
    return new Personnage(
      json['char_id'],
      json['name'],
      json['img'],
      json['status'],
      json['nickname'],
      json['category'],
      json['portrayed']);
  }


  constructor(id: number, nom: string, lienImage: string, statut: string, surnom: string, categorie: string, acteur: string) {
    this._id = id;
    this._nom = nom;
    this._lienImage = lienImage;
    this._statut = statut;
    this._surnom = surnom;
    if(categorie === "Breaking Bad"){
      this._categorie = Categorie.BreakingBad;
    } else {
      this._categorie = Categorie.BetterCallSaul;
    }
    this._acteur = acteur;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get dateNaissance(): Date {
    return this._dateNaissance;
  }

  set dateNaissance(value: Date) {
    this._dateNaissance = value;
  }

  get professions(): Array<string> {
    return this._professions;
  }

  get lienImage(): string {
    return this._lienImage;
  }

  set lienImage(value: string) {
    this._lienImage = value;
  }

  get statut(): string {
    return this._statut;
  }

  set statut(value: string) {
    this._statut = value;
  }

  get surnom(): string {
    return this._surnom;
  }

  set surnom(value: string) {
    this._surnom = value;
  }

  get categorie(): Categorie {
    return this._categorie;
  }

  set categorie(value: Categorie) {
    this._categorie = value;
  }

  get acteur(): string {
    return this._acteur;
  }

  set acteur(value: string) {
    this._acteur = value;
  }

  addProfession(profession : string){
    this._professions.push(profession);
  }
}


