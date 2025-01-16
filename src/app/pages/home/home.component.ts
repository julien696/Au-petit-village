import { Component, inject, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";
import { ProductsService } from '../../services/products.service';
import { SortByPricePipe } from '../../pipe/sort-by-price.pipe';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CommonModule, SortByPricePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  productsService = inject(ProductsService)

   figurines: any[] = [];

  constructor() {
    this.figurines = this.productsService.getAll()
  }

  sortOrder : string = 'asc';

  changeSortOrder(order : string){
    this.sortOrder = order
  }

}
