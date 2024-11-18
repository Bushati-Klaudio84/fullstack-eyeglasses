import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { CategoryEntity } from "src/category/entity/category.entity";
import { BrandEntity } from "src/brand/entity/brand.entity";

@Entity('products')
export class ProductEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@Column()
	price: number;

	@Column({ default: true })
	is_active: boolean;

	@Column({ nullable: true })
	image: string;

	@ManyToOne(() => CategoryEntity, (category) => category.products, { cascade: true })
	@JoinColumn({ name: 'category_id' })
	category: CategoryEntity;

	@ManyToOne(() => BrandEntity, (brand) => brand.products, { cascade: true })
	@JoinColumn({ name: 'brand_id' })
	brand: BrandEntity;

	@Column({ name: "category_id", nullable: false })
	category_id: number;

	@Column({ name: "brand_id", nullable: false })
	brand_id: number;

}
