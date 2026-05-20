export interface ProductType {
    id: number
    title: string
    description: string
    category: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    tags: string[]
    brand?: string
    sku: string
    weight: number
    dimensions: object
    warrantyInformation: string
    shippingInformation: string
    availabilityStatus: string
    reviews: object[]
    returnPolicy: string
    minimumOrderQuantity: number
    meta: object
    images: string[]
    thumbnail: string
}

export type MedicineType = {
    id: number
    name: string
    location: string
    startDate: string
    endDate: string
    success: boolean
    process: string
    total: string
    status: Array<number>
}[]
