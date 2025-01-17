import { Injectable } from '@angular/core';
import { figurine } from '../model/figurine.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  figurines: figurine[] = []

  constructor() {
    this.figurines = [
      {id: 1, name: 'Astérix', price: 20, description: 'Superbe figurine artisanale du célébre Astérix.', imageSrc: '/assets/img/figurine_astérix.jpeg', imageAlt: `figurine d'Astérix`},
      {id: 2, name: 'Obélix', price: 19, description: 'Superbe figurine artisanale du célébre Obélix.', imageSrc: '/assets/img/figurine_Obélix.jpeg', imageAlt: `figurine d'Obélix`},
      {id: 3, name: 'Idéfix', price: 18, description: 'Superbe figurine artisanale du célébre Idéfix', imageSrc: '/assets/img/figurine_idéfix.jpeg', imageAlt: `figurine d'Idéfix`},
      {id: 4, name: 'Panoramix', price: 17, description: 'Superbe figurine artisanale du célébre Panoramix', imageSrc: '/assets/img/figurine_panoramix.jpeg', imageAlt: `figurine de Panoramix`},
      {id: 5, name: 'Assurancetourix', price: 16, description: 'Superbe figurine artisanale du célébre Assurancetourix', imageSrc: '/assets/img/figurine_assurancetourix.jpg', imageAlt: `figurine d'Assurancetourix`}
    ]   
  }
  
  getAll(){
    return this.figurines
  }

  

}
