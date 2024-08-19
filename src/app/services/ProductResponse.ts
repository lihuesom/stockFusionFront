import { environment } from "../../environment";
import { GetProduct } from "../services/responses/ProductResponse";

// Obtener lista de productos
export const getProducts  = async (): Promise<GetProduct[]>  => {
    try {
        const response = await fetch(`${environment.API_BASE_URL}products/`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching products list:", error);
        return [];
    }
};

export {};