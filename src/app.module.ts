import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from '@app/app.controller'
import { AppService } from '@app/app.service'
import { FileModule } from '@app/file/file.module'
import { ProductModule } from '@app/product/product.module'
import { ReviewModule } from '@app/review/review.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		FileModule,
		ProductModule,
		ReviewModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {
}
