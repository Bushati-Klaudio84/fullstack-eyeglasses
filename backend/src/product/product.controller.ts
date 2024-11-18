import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe, UseGuards, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductEntity } from './entity/product.enity';
import { ProductDto } from './dto/product.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ImageNameHelper } from 'src/helpers/imageName.helper';
import { Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';

@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService) { }

	@Get('all')
	public async getAll() {
		return await this.productService.getAllProducts()
	}

	@UseGuards(AuthGuard)
	@Post('create')
	@UseInterceptors(FileInterceptor('image', {
		storage: diskStorage({
			destination: './uploads',
			filename: (req, image, cb) => {
				const imageName = new ImageNameHelper(image.originalname).getImageName();
				cb(null, imageName);
			}
		}),
	}))
	public async cretePost(@Body() param: any, @UploadedFile() file: Express.Multer.File): Promise<any> {
		return await this.productService.createProducts(param, file.filename);
	}

	@UseGuards(AuthGuard)
	@Put('update/:id')
	@UseInterceptors(FileInterceptor('image', {
		storage: diskStorage({
			destination: './uploads',
			filename: (req, image, cb) => {
				const imageName = new ImageNameHelper(image.originalname).getImageName();
				cb(null, imageName);
			}
		}),
	}))
	public async update(@Body() bodyParam: ProductDto, @Param('id', ParseIntPipe) id: number, @UploadedFile() file: Express.Multer.File): Promise<any> {
		const product = await this.productService.getProductById(id);
		console.log(bodyParam);
		console.log(file);
		if (product) {
			if (file) {
				const files = await fs.promises.readdir('uploads');
				fs.unlinkSync('uploads/' + files[0]);
				return await this.productService.updateProduct(bodyParam, id, file.filename);
			} else {
				await this.productService.updateProduct(bodyParam, id, product.image);
			}
		}
	}

	@Get(':id')
	public async getById(@Param('id', ParseIntPipe) id: number): Promise<ProductEntity> {
		return await this.productService.getProductById(id);
	}

	@UseGuards(AuthGuard)
	@Delete('delete/:id')
	public async deleteCategory(@Param('id', ParseIntPipe) id: number): Promise<any> {
		const product = await this.productService.getProductById(id);
		if (product) {

			const files = await fs.promises.readdir('uploads');
			fs.unlinkSync('uploads/' + files[0]);
			await this.productService.deleteProduct(id);

		}
	}

	@UseGuards(AuthGuard)
	@Get('uploads/:path')
	public getImage(@Param() path, @Res() res: Response) {
		res.sendFile(path.path, { root: 'uploads' });
	}
}