import { IsString, IsNotEmpty } from "class-validator";

export class BrandDto {
	@IsString()
	@IsNotEmpty()
	name: string;
}