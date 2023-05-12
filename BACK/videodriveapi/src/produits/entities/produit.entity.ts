import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
