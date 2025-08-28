import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { ProductDetail } from './components/product-detail/product-detail';

export const routes: Routes = [
    {path: '', component: ProductList},
    // {path: 'produto/:id', component: ProductDetail }
    {
    path: 'produto/:id', loadComponent: () => import('./components/product-detail/product-detail')
        .then(m => m.ProductDetail)
    }

    
];
