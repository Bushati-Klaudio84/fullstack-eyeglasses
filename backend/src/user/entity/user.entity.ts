import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class UserEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	lastname: string;

	@Column()
	email: string;

	@Column({ default: false })
	is_admin: boolean;

	@Column()
	password: string;

}