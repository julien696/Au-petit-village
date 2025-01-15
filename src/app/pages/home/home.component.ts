import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
   figurines: any[] = [];
  constructor(private productsService: ProductsService) {
    
  }

  ngOnInit(): void {
    this.figurines = this.productsService.figurines
  }
}
