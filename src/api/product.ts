import {ProductApi, ProductLocal, toProductLocal} from "@/api/models/product";

const API_URL = process.env.API_URL;

export const getAllProducts = async (): Promise<ProductLocal[]> => {
    const response = await fetch(`${API_URL}/products`);
    const {data} = await response.json();
    return data.map((product: ProductApi) => toProductLocal(product)).filter((product: ProductLocal) => product.stock > 0);
}