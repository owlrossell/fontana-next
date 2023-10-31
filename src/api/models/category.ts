export interface CategoryLocal {
    id: number;
    name: string;
    icon: string;
}

export interface CategoryApi {
    id: number;
    name: string;
    createdAt: string;
    icon:string;
}

export const toCategoryLocal = (categoryApi: CategoryApi): CategoryLocal => ({
    id: categoryApi.id,
    name: categoryApi.name,
    icon: categoryApi.icon,
});