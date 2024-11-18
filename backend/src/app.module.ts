import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/entity/user.entity';
import { CategoryModule } from './category/category.module';
import { CategoryEntity } from './category/entity/category.entity';
import { BrandModule } from './brand/brand.module';
import { BrandEntity } from './brand/entity/brand.entity';
import { ProductModule } from './product/product.module';
import { ProductEntity } from './product/entity/product.enity';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mediaset84',
      database: 'holberton-fullstack',
      entities: [UserEntity, CategoryEntity, BrandEntity, ProductEntity],
      synchronize: true,
      autoLoadEntities: true
    }),
    UserModule, CategoryModule, BrandModule, ProductModule,AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
