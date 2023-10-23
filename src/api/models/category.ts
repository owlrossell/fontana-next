export interface CategoryLocal {
    id: number;
    name: string;
}

export interface CategoryApi {
    id: number;
    name: string;
    createdAt: string;
}

export const toCategoryLocal = (categoryApi: CategoryApi): CategoryLocal => ({
    id: categoryApi.id,
    name: categoryApi.name,
});