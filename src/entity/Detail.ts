import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserDetail {
    @PrimaryGeneratedColumn()
    detail_id: number

    @Column()
    address: string
}