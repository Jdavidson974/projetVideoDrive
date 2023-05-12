import { Produit } from "src/produits/entities/produit.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { BuyList } from "./buyList.entity";

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
}
