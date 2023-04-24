import { Module } from '@nestjs/common'
import { PrismaService } from '@app/prisma.service'
import { ProductController } from '@app/product/product.controller'
import { ProductService } from '@app/product/product.service'

@Module({
	controllers: [ProductController],
	providers: [ProductService, PrismaService]
})
export class ProductModule {}
