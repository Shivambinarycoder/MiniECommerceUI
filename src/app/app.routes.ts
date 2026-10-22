import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard')
        .then(m => m.Dashboard)
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/product-list/product-list')
        .then(m => m.ProductList)
  },
  {
    path: 'product-details',
    loadComponent: () =>
      import('./features/products/product-details/product-details')
        .then(m => m.ProductDetails)
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('./features/orders/order-list/order-list')
        .then(m => m.OrderList)
  },
  {
    path: 'create-order',
    loadComponent: () =>
      import('./features/orders/create-order/create-order')
        .then(m => m.CreateOrder)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login')
        .then(m => m.Login)
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
