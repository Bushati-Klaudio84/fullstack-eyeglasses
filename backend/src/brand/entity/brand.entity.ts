import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from "typeorm";
import { ProductEntity } from "src/product/entity/product.enity";

@Entity('brands')
export class BrandEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@OneToMany(() => ProductEntity, product => product.brand)
	products: ProductEntity[]
}