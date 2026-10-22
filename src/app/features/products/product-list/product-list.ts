
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../core/services/models/product';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {
  private productService = inject(ProductService);
  private cdr = inject(ChangeDetectorRef);

  products: Product[] = [];

  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'price',
    'stockQuantity',
    'createdDate'
  ];

  loading = false;
  errorMessage = '';

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading = true;
    this.errorMessage = '';

    this.productService.getProducts().subscribe({
      next: (response: Product[]) => {
        console.log('API response:', response);

        this.products = response;
        this.loading = false;

        this.cdr.detectChanges();
      },

      error: (error) => {
        console.error('Product API error:', error);

        this.errorMessage =
          `Failed to load products. HTTP ${error.status}`;

        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
}