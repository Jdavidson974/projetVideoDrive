import { Injectable } from '@nestjs/common';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
import Stripe from 'stripe';

@Injectable()
export class ProduitsService {
  constructor() {
    this.stripe = new Stripe(process.env.SK_TEST_STRIPE, { apiVersion: '2022-11-15' })
  }
  private stripe: Stripe;



  findAll() {
    return this.stripe.products.list({ expand: ['data.default_price'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} produit`;
  }

}
