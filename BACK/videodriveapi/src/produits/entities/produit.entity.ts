import { BuyList } from "src/commandes/entities/buyList.entity";
import { Commande } from "src/commandes/entities/commande.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Produit {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    idStripe: string;
    @Column()
    name: string;
    @Column()
    price: number;
    @Column()
    description: string;

    @ManyToMany(() => BuyList, (commande) => commande.produits)
    commandes: BuyList[];

}
