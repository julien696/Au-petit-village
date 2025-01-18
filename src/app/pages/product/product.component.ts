import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  figurine: any;
 
  productsService = inject(ProductsService);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.figurine = this.productsService.getFigurinetById(id)
  }

}
