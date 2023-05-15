import { Injectable } from '@nestjs/common';
import { CommandeDto, CreateCommandeDto } from './dto/create-commande.dto';
import { UpdateCommandeDto } from './dto/update-commande.dto';
import Stripe from 'stripe';
import { InjectRepository } from '@nestjs/typeorm';
import { Commande } from './entities/commande.entity';
import { In, Repository } from 'typeorm';
import { Produit } from 'src/produits/entities/produit.entity';
import { Client } from 'src/clients/entities/client.entity';
import { CreateClientDto } from 'src/clients/dto/create-client.dto';
import { BuyList } from './entities/buyList.entity';
import { BuyListDTO } from './dto/buy-list.dto';

@Injectable()
export class CommandesService {
  constructor(@InjectRepository(Commande)
  private commandeRepo: Repository<Commande>,
    @InjectRepository(Produit)
    private produitRepo: Repository<Produit>,
    @InjectRepository(Client)
    private clientRepo: Repository<Client>,
    @InjectRepository(BuyList)
    private buyListRepo: Repository<BuyList>

  ) {

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

              //FAIRE LE FIND POUR TROUVER LES PRODUIT AVEC IN
              this.produitRepo.find({ where: { idStripe: In(products) } }).then(
                products => {
                  console.log(customer);
                  // + CHERCHE SI CLIENT EXISTE
                  this.clientRepo.findOneBy({ email: customer.email }).then(
                    client => {
                      if (client) {
                        // + CREER NEW COMMANDE 
                        const commande: CommandeDto = { client: client, }
                        this.commandeRepo.save(commande).then(
                        ).then(
                          commande => {
                            products.forEach(item => {
                              const buyList: BuyListDTO = { commandes: [commande], produits: item, quantite: 1 }
                              console.log(buyList);
                              this.buyListRepo.save(buyList).then(
                                buyList => {
                                  commande.buyList = [buyList]
                                  this.commandeRepo.save(commande)
                                }
                              )
                            })
                          }
                        )
                      } else {
                        // + CREE CLIENT
                        const client: CreateClientDto = { email: customer.email, fistName: customer.prenom, lastName: customer.nom }
                        this.clientRepo.save(client).then(
                          newClient => {
                            // + CREER NEW COMMANDE
                            const commande: CommandeDto = { client: newClient, }
                            this.commandeRepo.save(commande).then(
                              commande => {
                                products.forEach(item => {
                                  const buyList: BuyListDTO = { commandes: [commande], produits: item, quantite: 1 }
                                  this.buyListRepo.save(buyList).then(
                                    buyList => {
                                      commande.buyList = [buyList]
                                      this.commandeRepo.save({ ...commande })
                                    }
                                  )
                                })
                              }
                            )
                          }
                        )
                      }
                    }
                  )
                }
              )
              // + LIER LE TOUT
              return session;
            }
          )
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
    return this.commandeRepo.find({ relations: { client: true, buyList: { produits: true } } });
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
