import { Produit } from "src/produits/entities/produit.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BuyList } from "./buyList.entity";
import { Client } from "src/clients/entities/client.entity";

@Entity()
export class Commande {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'datetime',
        default: () => 'NOW()',
    })
    buyTime: Date

    @ManyToMany(() => BuyList, (buyList) => buyList.commandes)
    commandes: BuyList[];

    @ManyToOne(() => Client, (client) => client.commandes)
    client: Client;
}
