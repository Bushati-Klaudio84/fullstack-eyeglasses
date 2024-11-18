import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entity/product.enity';
import { Repository } from 'typeorm';
import { ServiceHandler } from 'src/errorHandler/service.error';
import { ProductDto } from "./dto/product.dto";

@Injectable()
export class ProductService {
	constructor(@InjectRepository(ProductEntity) private readonly productEntity: Repository<ProductEntity>) { }

	public async getAllProducts(): Promise<ProductEntity[]> {
		try {
			const result = await this.productEntity.find({
				relations: ['category', 'brand']
			});
			return result;
		} catch (error) {
			throw new ServiceHandler(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	public async createProducts(data: ProductDto, file: string): Promise<ProductDto> {
		try {
			const product = {
				title: data.title,
				description: data.description,
				price: data.price,
				category_id: data.category_id,
				brand_id: data.brand_id,
				image: file
			}
			const result = await this.productEntity.save(product);
			return result;
		} catch (error) {
			throw new ServiceHandler(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	public async updateProduct(data: ProductDto, id: number, file: string): Promise<ProductEntity> {
		try {
			const product = {
				title: data.title,
				description: data.description,
				price: data.price,
				category_id: data.category_id,
				brand_id: data.brand_id,
				image: file
			}

			const category = await this.productEntity.findOne({ where: { id } });
			if (!category) {
				throw new ServiceHandler("This is category does not longer Exist", HttpStatus.NOT_FOUND);
			}
			await this.productEntity.update(id, product);
			const updatedCategory = await this.productEntity.findOne({ where: { id } });
			return updatedCategory;
		} catch (error) {
			throw new ServiceHandler(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	public async getProductById(id: number): Promise<ProductEntity> {
		try {
			const result = this.productEntity.findOne({ where: { id } })
			if (!result) {
				throw new ServiceHandler("this category does not exist", HttpStatus.NOT_FOUND);
			}
			return result
		} catch (error) {
			throw new ServiceHandler(error.message, HttpStatus.NOT_FOUND);
		}
	}

	public async deleteProduct(id: number): Promise<any> {
		try {
			const result = this.productEntity.findOne({ where: { id } });
			if (!result) {
				throw new ServiceHandler("this product does not exist", HttpStatus.NOT_FOUND);
			}
			await this.productEntity.delete(id);
			return result;
		} catch (error) {
			throw new ServiceHandler(error.message, HttpStatus.NOT_FOUND);
		}
	}

	getProductbySearch(search: string): Promise<ProductEntity[]> {
		throw new Error('Method not implemented.');
	}
}
