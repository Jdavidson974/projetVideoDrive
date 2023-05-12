import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Commande {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'datetime',
        default: () => 'NOW()',
    })
    buyTime: Date
}
