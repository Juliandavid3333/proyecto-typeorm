import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { UserDetail } from "./Detail"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number
    @OneToOne((type) =>UserDetail,{
        eager:true,
        cascade:true,
    })
    @JoinColumn({name:"detail_id"})
    details:UserDetail;

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number
    @Column()
    state: string

}
