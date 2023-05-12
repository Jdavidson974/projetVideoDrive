import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProduitsModule } from './produits/produits.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { ClientsModule } from './clients/clients.module';
import { CommandesModule } from './commandes/commandes.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'videodrive',
    autoLoadEntities: true,
    synchronize: true,
  }), ProduitsModule, CategoriesModule, ClientsModule, CommandesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
