import { months } from '@/features/tables/config/tablesConfig.ts'

import { type MedicineType, type ProductType } from '../types/productTypes'

export async function getMeditians(page: number): Promise<MedicineType> {
    const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${page === 1 ? 0 : (page - 1) * 10}`
    )

    if (!response) {
        throw new Error('Unable to fetch meditians')
    }

    const data = await response.json()

    return data.products.map((product: ProductType) => {
        return {
            id: product.id,
            name: `${product.id % 2 === 0 ? 'Medicine' + ' #' + (product.id + 349) : 'Vaccine' + ' #' + (product.id + 2991)}`,
            location: product.brand || 'Invitro',
            startDate: `${months[((product.id % 11) + 1).toString()] as keyof typeof months} ${product.stock % 28 > 0 ? product.stock % 28 : 1} 2021`,
            endDate: `${months[((product.id % 11) + 1).toString()]} ${product.stock % 28 > 0 ? product.stock % 28 : 1} 2024`,
            success: product.rating > 4.2 ? true : false,
            process: `${product.stock}`,
            total: `${product.stock + 129}`,
            status: [
                product.rating * 5,
                (product.stock % 25) + 10,
                product.price % 35,
                100 -
                    product.rating * 5 -
                    ((product.stock % 25) + 10) -
                    (product.price % 35),
            ],
        }
    })
}
