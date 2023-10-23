import {CategoryApi} from "@/api/models/category";

export interface ProductLocal {
    id: number;
    name: string;
    description: string;
    stock: number;
    regularPrice: number;
    salePrice: number;
    isPromotional: boolean;
    category: CategoryApi;
    photos?: {
        id: number;
        created: string;
        type: boolean;
        formatsPhotos: {
            id: number;
            width: number;
            height: number;
            src: string;
            created: string;
        }[];
    }[]
}

export interface ProductApi {
    id: number;
    name: string;
    description: string;
    stock: number;
    regularPrice: number;
    salePrice: number;
    tags?: {
        label: string;
        value: string;
    }[];
    tax: number;
    state: string;
    isPromotional: boolean;
    category: CategoryApi;
    photos?: {
        id: number;
        created: string;
        type: boolean;
        formatsPhotos: {
            id: number;
            width: number;
            height: number;
            src: string;
            created: string;
        }[];
    }[]
}

export const toProductLocal = (productApi: ProductApi): ProductLocal => ({
    id: productApi.id,
    name: productApi.name,
    description: productApi.description,
    stock: productApi.stock,
    regularPrice: productApi.regularPrice,
    salePrice: productApi.salePrice,
    isPromotional: productApi.isPromotional,
    category: productApi.category,
    photos: productApi.photos,
});