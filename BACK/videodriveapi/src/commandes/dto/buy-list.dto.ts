import { Produit } from "src/produits/entities/produit.entity";
import { Commande } from "../entities/commande.entity";

export class BuyListDTO {
    produits: Produit;
    commandes: Commande[];
    quantite: number;
}