import { NestFactory } from '@nestjs/core'
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from '@app/app.module'
import { PrismaService } from '@app/prisma.service'

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { cors: true })

	// const config = new DocumentBuilder()
	// 	.setTitle('Itsaln API')
	// 	.setDescription('The api of my portfolio project')
	// 	.setVersion('1.0')
	// 	.build()

	// const document = SwaggerModule.createDocument(app, config)
	// SwaggerModule.setup('api', app, document)

	const prismaService = app.get(PrismaService)
	await prismaService.enableShutdownHooks(app)

	app.setGlobalPrefix('api')
	await app.listen(process.env.PORT || 5000)
	console.log(`Application is running on: ${await app.getUrl()}`)
}

let ignore = bootstrap()
