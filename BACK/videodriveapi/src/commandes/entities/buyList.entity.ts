import { Produit } from "src/produits/entities/produit.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Commande } from "./commande.entity";

@Entity()
export class BuyList {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantite: number;

    @ManyToOne(() => Produit, (produits) => produits.commandes)
    @JoinTable()
    produits: Produit;


    @ManyToMany(() => Commande, (commandes) => commandes.buyList)
    @JoinTable()
    commandes: Commande[];
}
