import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { SortByPricePipe } from '../../pipe/sort-by-price.pipe';
import { FormsModule } from '@angular/forms';
import { SortByNamePipe } from '../../pipe/sort-by-name.pipe';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [CommonModule, SortByPricePipe, SortByNamePipe, FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  productsService = inject(ProductsService)
  
  figurines: any[] = [];
  filteredFigurines: any[] = [];

  sortOrder: string = 'asc';
  searchTerm: string = '';


  constructor() {}
  
  ngOnInit(){
    this.figurines = this.productsService.getAll();
    this.filteredFigurines = this.figurines;
  }


   changeSortOrder(order : string){
    this.sortOrder = order
  }


  
  

}
