import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

// Se le especifica el nombre de la tabla
@Entity({ name: 'users' })
export class User { 
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text'})
    firstName: string;

    @Column({ type: 'text' })
    lastName: string;

    @Column({ type: 'text', unique: true })
    email: string;

    @Column({ type: 'text', nullable: true })
    photo: string;

    @CreateDateColumn({ type: 'timestamp'})
    createdAt: Date;
}
