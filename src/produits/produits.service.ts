import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProduitDto } from './dto/create-produit.dto.js';
import { UpdateProduitDto } from './dto/update-produit.dto.js';
import { Produit } from './entities/produit.entity.js';

@Injectable()
export class ProduitsService {
  private produits: Produit[] = [];
  private nextId = 1;

  // Create a product
  create(createProduitDto: CreateProduitDto) {
    const produit: Produit = {
      ...createProduitDto,
      id: this.nextId++,
    };

    this.produits.push(produit);

    return {
      status: 201,
      message: 'Product created successfully',
      data: produit,
    };
  }

  // Retrieve all products
  findAll() {
    return {
      status: 200,
      message: 'Products retrieved successfully',
      data: this.produits,
    };
  }

  // Retrieve a product by ID
  findOne(id: number) {
    const produit = this.produits.find((produit) => produit.id === id);

    if (!produit) {
      throw new NotFoundException('Product not found');
    }

    return {
      status: 200,
      message: 'Product retrieved successfully',
      data: produit,
    };
  }

  // Update a product
  update(id: number, updateProduitDto: UpdateProduitDto) {
    const produit = this.produits.find((produit) => produit.id === id);

    if (!produit) {
      throw new NotFoundException('Product not found');
    }

    Object.assign(produit, updateProduitDto);

    return {
      status: 200,
      message: 'Product updated successfully',
      data: produit,
    };
  }

  // Delete a product
  remove(id: number) {
    const index = this.produits.findIndex(
      (produit) => produit.id === id,
    );

    if (index === -1) {
      throw new NotFoundException('Product not found');
    }

    const produit = this.produits[index];

    this.produits.splice(index, 1);

    return {
      status: 200,
      message: 'Product deleted successfully',
      data: produit,
    };
  }
}