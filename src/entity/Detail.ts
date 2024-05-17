import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserDetail {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    address: string
}