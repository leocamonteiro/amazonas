import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../models/models';
import { ProductCard } from '../product-card/product-card';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  imports: [ ProductCard ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList implements OnInit{
  public produtos: Product[] = []

  constructor (
    private productService: ProductService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe( response =>{
      this.produtos = response.products;
      // console.log(this.produtos) Teste para verificar se o array chegou
    })
  }

  verDetalhes(id: number): void {
    this.router.navigate(['/produto', id]);
  }

}
