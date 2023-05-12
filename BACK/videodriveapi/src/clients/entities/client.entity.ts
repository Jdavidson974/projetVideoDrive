import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
