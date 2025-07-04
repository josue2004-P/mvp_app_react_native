// src/core/usecases/getProducts.ts
import { ProductRepository } from '../../domain/repositories/ProductRepository';
import { Product } from '../../domain/entities/Product';

export const getProducts = async (
  repo: ProductRepository
): Promise<Product[]> => {
  return await repo.getProducts();
};
