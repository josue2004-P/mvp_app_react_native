// src/domain/repositories/ProductRepository.ts
import { Product } from '../entities/Product';

export interface ProductRepository {
  getProducts(): Promise<Product[]>;
}
