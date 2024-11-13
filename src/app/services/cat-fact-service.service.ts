import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatFactServiceService {

  constructor() { }

  catFactUrl = "https://catfact.ninja/fact"
  async getCatFact() {
    const data = await fetch(this.catFactUrl);
    return (await data.json()) ?? [];
  }
}
