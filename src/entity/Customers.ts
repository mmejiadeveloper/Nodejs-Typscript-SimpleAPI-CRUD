import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Customers {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    public setData (data : any){
        this.email = data.email;
        this.name = data.name;
    }

}