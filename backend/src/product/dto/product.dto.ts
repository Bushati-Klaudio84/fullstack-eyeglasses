import { IsString, IsNotEmpty, IsNumber, IsBoolean } from "class-validator";
import { Transform } from 'class-transformer';
export class ProductDto {

	@IsNotEmpty()
	@IsString()
	@Transform(({ value }) => String(value))
	title: string;

	@IsNotEmpty()
	@IsString()
	@Transform(({ value }) => String(value))
	description: string;

	@IsNotEmpty()
	@IsNumber()
	@Transform(({ value }) => parseFloat(value))
	price: number;

	@IsNotEmpty()
	@IsBoolean()
	@Transform(({ value }) => value === 'true')
	is_active: boolean;

	@IsNotEmpty()
	@IsNumber()
	@Transform(({ value }) => parseInt(value))
	category_id: number;

	@IsNotEmpty()
	@IsNumber()
	@Transform(({ value }) => parseInt(value))
	brand_id: number;

}