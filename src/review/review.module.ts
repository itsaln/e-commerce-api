import { Module } from '@nestjs/common'
import { PrismaService } from '@app/prisma.service'
import { ReviewController } from '@app/review/review.controller'
import { ReviewService } from '@app/review/review.service'

@Module({
	controllers: [ReviewController],
	providers: [ReviewService, PrismaService]
})
export class ReviewModule {}
