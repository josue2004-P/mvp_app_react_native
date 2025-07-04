// src/data/repositories/FakeProductRepository.ts
import { Product } from '../../domain/entities/Product';
import { ProductRepository } from '../../domain/repositories/ProductRepository';

export class FakeProductRepository implements ProductRepository {
  async getProducts(): Promise<Product[]> {
    return [
      { id: 1, name: 'Teclado', price: 300 },
      { id: 2, name: 'Mouse', price: 200 },
      { id: 3, name: 'Pantalla', price: 1200 },
    ];
  }
}
