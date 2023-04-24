import { Controller, Get, Param, Query } from '@nestjs/common'
import { ProductService } from '@app/product/product.service'

@Controller('products')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Get()
	findAll(@Query('searchTerm') searchTerm?: string) {
		return this.productService.findAll(searchTerm)
	}

	@Get('/slug/:slug')
	findBySlug(@Param('slug') slug: string) {
		return this.productService.findBySlug(slug)
	}

	@Get('/relatives/:id')
	findRelatives(@Param('id') id: string) {
		return this.productService.findRelatives(+id)
	}

	@Get(':id')
	findById(@Param('id') id: string) {
		return this.productService.findById(+id)
	}
}
