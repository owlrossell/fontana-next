import {CategoryApi, CategoryLocal, toCategoryLocal} from "@/api/models/category";

const API_URL = process.env.API_URL;

export const getAllCategories = async (): Promise<CategoryLocal[]> => {
    const response = await fetch(`${API_URL}/categories`);
    const {data} = await response.json();
    return data.map((category: CategoryApi) => toCategoryLocal(category));
}