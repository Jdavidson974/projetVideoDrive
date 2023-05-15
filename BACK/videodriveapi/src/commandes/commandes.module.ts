import { Module } from '@nestjs/common';
import { CommandesService } from './commandes.service';
import { CommandesController } from './commandes.controller';
import { Commande } from './entities/commande.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuyList } from './entities/buyList.entity';
import { Client } from 'src/clients/entities/client.entity';
import { Produit } from 'src/produits/entities/produit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Commande, BuyList, Client, Produit])],
  controllers: [CommandesController],
  providers: [CommandesService]
})
export class CommandesModule { }
