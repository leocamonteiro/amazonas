import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { Checkout } from './components/checkout/checkout';

export const routes: Routes = [
    {path: '', component: ProductList},
    {path: 'checkout', component: Checkout},
    {path: 'produto/:id', loadComponent: () => import('./components/product-detail/product-detail')
        .then(m => m.ProductDetail)
    }

    
];
