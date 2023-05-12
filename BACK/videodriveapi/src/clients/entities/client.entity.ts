import { Commande } from "src/commandes/entities/commande.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fistName: string;

    @Column()
    lastName: string;

    @Column({ unique: true })
    email: string;

    @OneToMany(() => Commande, (commandes) => commandes.client)
    commandes: Commande[]
}
