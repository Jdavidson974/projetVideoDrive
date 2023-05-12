import { Produit } from "src/produits/entities/produit.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Commande } from "./commande.entity";

@Entity()
export class BuyList {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantite: number;

    @ManyToMany(() => Produit, (produits) => produits.commandes)
    @JoinTable()
    produits: Produit[];

    @ManyToMany(() => Commande, (commandes) => commandes.commandes)
    @JoinTable()
    commandes: Commande[];
}