import { Module } from '@nestjs/common';
import { CommandesService } from './commandes.service';
import { CommandesController } from './commandes.controller';
import { Commande } from './entities/commande.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuyList } from './entities/buyList.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Commande, BuyList])],
  controllers: [CommandesController],
  providers: [CommandesService]
})
export class CommandesModule { }
