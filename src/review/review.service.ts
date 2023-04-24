import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '@app/prisma.service'

@Injectable()
export class ReviewService {
	constructor(private prismaService: PrismaService) {}

	findAll() {
		return this.prismaService.review.findMany({
			orderBy: {
				createdAt: 'desc'
			}
		})
	}

	async findById(id: number) {
		const review = await this.prismaService.review.findUnique({
			where: { id }
		})

		if (!review) throw new NotFoundException('Review not found!')

		return review
	}
}
