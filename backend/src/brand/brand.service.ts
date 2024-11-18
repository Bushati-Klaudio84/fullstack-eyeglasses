import { HttpStatus, Injectable } from '@nestjs/common';
import { BrandEntity } from './entity/brand.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceHandler } from 'src/errorHandler/service.error';
import { BrandDto } from "./dto/brand.dto";

@Injectable()
export class BrandService {
	constructor(@InjectRepository(BrandEntity) private readonly brandRepository: Repository<BrandEntity>) { }

	public async getAllBrands(): Promise<BrandEntity[]> {
		try {
			const result = await this.brandRepository.find();
			return result;
		} catch (error) {
			throw new ServiceHandler(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	public async createBrand(data: BrandDto): Promise<BrandEntity> {
		try {
			const result = await this.brandRepository.save(data);
			return result;
		} catch (error) {
			throw new ServiceHandler(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	public async updateBrand (data: BrandDto, id: number): Promise<BrandEntity> {
		try {
			let result = this.brandRepository.findOne({ where: { id } });
			if (!result) {
				throw new ServiceHandler("this brand does not exist", HttpStatus.NOT_FOUND);
			}
			await this.brandRepository.update(id, data);
			const updatedCategory = await this.brandRepository.findOne({ where: { id } });

			return updatedCategory;
			return result;
		} catch (error) {
			throw new ServiceHandler(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	public async getBrandById(id: number): Promise<BrandEntity> {
		try {
			const result = await this.brandRepository.findOne({ where: { id } });
			return result;
		} catch (error) {
			throw new ServiceHandler("this brand does not exist", HttpStatus.NOT_FOUND);
		}
	}

	public async deleteBrand (id: number): Promise<any> {
		try {
			const result = await this.brandRepository.findOne({ where: { id } });
			if (!result) {
				throw new ServiceHandler("this brand does not exist", HttpStatus.NOT_FOUND);
			}
			await this.brandRepository.delete(id);
		} catch (error) {
			throw new ServiceHandler(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
