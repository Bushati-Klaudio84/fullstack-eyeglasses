import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe,UseGuards } from '@nestjs/common';
import { BrandService } from '../brand/brand.service';
import { BrandEntity } from './entity/brand.entity';
import { BrandDto } from '../brand/dto/brand.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('brand')
export class BrandController {
	constructor(private readonly brandService: BrandService) { }

	@Get('all')
	public async getAll(): Promise<BrandEntity[]> {
		return await this.brandService.getAllBrands();
	}

	@Post('create')
	public async create(@Body() bodyParam: BrandDto): Promise<BrandEntity> {
		return await this.brandService.createBrand(bodyParam);
	}

	@Put('update/:id')
	public async update(@Body() bodyParam: BrandDto, @Param('id', ParseIntPipe) id: number): Promise<BrandEntity> {
		return await this.brandService.updateBrand(bodyParam, id);
	}

	@Get('get/:id')
	public async getById(@Param('id', ParseIntPipe) id: number): Promise<BrandEntity> {
		return await this.brandService.getBrandById(id);
	}

	@Delete('delete/:id')
	public async deleteCategory(@Param('id', ParseIntPipe) id: number): Promise<any> {
		return await this.brandService.deleteBrand(id);
	}
}