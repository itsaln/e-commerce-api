import { PrismaClient, Prisma } from '@prisma/client'
import * as dotenv from 'dotenv'
import { faker } from '@faker-js/faker'
import { IProductPart, products } from './products.data'

function toSlug(name: string): string {
	return name.replace(/[^a-zA-Z0-9]/gi, '-').toLowerCase()
}

const prisma = new PrismaClient()

const fakerProduct = (product: IProductPart): Prisma.ProductCreateInput => ({
	name: product.name,
	images: product.images,
	description: faker.commerce.productDescription(),
	price: faker.datatype.number({ min: 4, max: 20 }),
	slug: toSlug(product.name),
	reviews: {
		createMany: {
			data: Array.from({
				length: faker.datatype.number({ min: 1, max: 4 })
			}).map(() => ({
				text: faker.lorem.paragraph(),
				rating: faker.datatype.number({ min: 1, max: 5 })
			}))
		}
	}
})

async function main() {
	dotenv.config()
	console.log('Seeding...')

	// Products
	await Promise.all(
		products.map(async product => {
			await prisma.product.create({ data: fakerProduct(product) })
		})
	)
}

main()
	.catch(e => console.error(e))
	.finally(async () => {
		await prisma.$disconnect()
	})
