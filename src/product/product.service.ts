import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '@app/prisma.service'

@Injectable()
export class ProductService {
	constructor(private prismaService: PrismaService) {}

	findAll(searchTerm?: string) {
		return this.prismaService.product.findMany(
			searchTerm
				? {
						where: {
							OR: [
								{
									name: {
										contains: searchTerm
									}
								},
								{
									description: {
										contains: searchTerm
									}
								}
							]
						}
				  }
				: undefined
		)
	}

	async findById(id: number) {
		const product = await this.prismaService.product.findUnique({
			where: {
				id
			},
			include: {
				reviews: true
			}
		})

		if (!product) throw new NotFoundException('Product not found!')

		return product
	}

	async findBySlug(slug: string) {
		const product = await this.prismaService.product.findUnique({
			where: { slug }
		})

		if (!product) throw new NotFoundException('Product not found!')

		return product
	}

	async findRelatives(currentProductId: number) {
		const product = await this.prismaService.product.findMany({
			where: {
				id: {
					not: currentProductId
				}
			}
		})

		if (!product) throw new NotFoundException('Product not found!')

		return product
	}
}
