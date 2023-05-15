import { Injectable } from '@nestjs/common';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
import Stripe from 'stripe';
import { InjectRepository } from '@nestjs/typeorm';
import { Produit } from './entities/produit.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProduitsService {
  constructor(@InjectRepository(Produit) private produitRepo: Repository<Produit>) {
    this.stripe = new Stripe(process.env.SK_TEST_STRIPE, { apiVersion: '2022-11-15' })
  }
  private stripe: Stripe;



  findAll() {
    return this.stripe.products.list({ expand: ['data.default_price'] });
  }

  findOne(idProduct: string) {
    return this.produitRepo.findOne({ where: { idStripe: idProduct } }).then(
      produitDB => {
        return this.stripe.products.retrieve(produitDB.idStripe,).then(
          product => {
            return this.stripe.prices.retrieve(product.default_price.toString()).then(
              price => {
                const produit = { ...product, prix: price, description: produitDB.description }
                return produit;
              }
            )
          }
        );
      }
    )

  }

}
