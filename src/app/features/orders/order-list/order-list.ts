import {
  Component,
  OnInit,
  inject,
  ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { finalize } from 'rxjs';

import { OrderService } from '../../../core/services/order.service';
import { Order } from '../../../core/services/models/order';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  templateUrl: './order-list.html',
  styleUrl: './order-list.css'
})
export class OrderList implements OnInit {
  private orderService = inject(OrderService);
  private cdr = inject(ChangeDetectorRef);

  orders: Order[] = [];
  loading = false;
  errorMessage = '';

  displayedColumns: string[] = [
    'id',
    'userId',
    'orderDate',
    'totalAmount',
    'status',
    'items'
  ];

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.loading = true;
    this.errorMessage = '';

    this.orderService.getOrders()
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: (data) => {
          console.log('Orders received:', data);

          this.orders = Array.isArray(data) ? data : [];
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Failed to load orders:', error);

          this.errorMessage =
            error.status === 401
              ? 'Your session is invalid or expired. Please log in again.'
              : 'Unable to load orders. Please try again.';

          this.cdr.detectChanges();
        }
      });
  }
}