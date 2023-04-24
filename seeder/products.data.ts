import { Product } from '@prisma/client'

export interface IProductPart extends Pick<Product, 'name' | 'images'> {}

export const products: IProductPart[] = [
	{
		name: 'Sugar Cookie Almondmilk Frappuccino® Blended Beverage',
		images: [
			'/uploads/images/products/001.png',
			'/uploads/images/products/002.png',
			'/uploads/images/products/003.png'
		]
	},
	{
		name: 'Mocha Cookie Crumble Frappuccino®',
		images: [
			'/uploads/images/products/002.png',
			'/uploads/images/products/003.png',
			'/uploads/images/products/001.png'
		]
	},
	{
		name: 'Matcha Crème Frappuccino® Blended Beverage',
		images: ['/uploads/images/products/003.png']
	},
	{
		name: 'Irish Cream Cold Brew',
		images: ['/uploads/images/products/004.png']
	}
]
