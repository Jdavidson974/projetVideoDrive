import { Injectable } from '@nestjs/common';
import { CreateCommandeDto } from './dto/create-commande.dto';
import { UpdateCommandeDto } from './dto/update-commande.dto';
import Stripe from 'stripe';

@Injectable()
export class CommandesService {
  constructor() {
    this.stripe = new Stripe(process.env.SK_TEST_STRIPE, { apiVersion: '2022-11-15' })
  }
  private stripe: Stripe;

  checkAndCreatePayment(idSession: string, payment: string, customer: any) {
    return this.stripe.paymentIntents.retrieve(payment).then(
      payement => {
        if (payement.status == "succeeded") {
          return this.stripe.checkout.sessions.listLineItems(idSession).then(
            session => {
              const products = session.data.map(item => item.price.product
              );
              console.log(products);
              //FAIRE LE FIND POUR TROUVER LES 
              // PRODUIT AVEC IN
              // + CREE CLIENT 
              // + CREER NEW COMMANDE 
              // + LIER LE TOUT
              return session;
            }
          )
          // TODO CREATE COMMANDE 
          // console.log(payement);
          // console.log(customer);
        }

      }
    );
  }
  createCheckout(createCommandeDto: CreateCommandeDto) {
    // permet de creer un objet line item pour chaque price 
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = createCommandeDto.pricesProducts.map(item => {
      return { price: item, quantity: 1 }
    })

    return this.stripe.checkout.sessions.create(
      {
        mode: 'payment',
        success_url: 'http://localhost:4200/',
        line_items: lineItems,
        custom_fields: [{
          "key": "nom",
          "label": {
            "type": "custom",
            "custom": "Nom"
          },
          "optional": false,
          "type": "text",

        },
        {
          "key": "prenom",
          "label": {
            "type": "custom",
            "custom": "Prenom"
          },
          "optional": false,
          "type": "text",

        }
        ]
      });
  }

  findAll() {
    return `This action returns all commandes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commande`;
  }

  update(id: number, updateCommandeDto: UpdateCommandeDto) {
    return `This action updates a #${id} commande`;
  }

  remove(id: number) {
    return `This action removes a #${id} commande`;
  }
}
