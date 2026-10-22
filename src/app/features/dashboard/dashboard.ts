
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink],
  template: `
    <h1>Microservices Dashboard</h1>
    <p>Manage products and orders from one application.</p>

    <div class="cards">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Products</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          View products and available stock.
        </mat-card-content>
        <mat-card-actions>
          <a mat-button routerLink="/products">View Products</a>
        </mat-card-actions>
      </mat-card>

      <mat-card>
        <mat-card-header>
          <mat-card-title>Orders</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          Create and view customer orders.
        </mat-card-content>
        <mat-card-actions>
          <a mat-button routerLink="/orders">View Orders</a>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
      margin-top: 24px;
    }
  `]
})
export class Dashboard {}