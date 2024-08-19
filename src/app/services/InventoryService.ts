import { environment } from "../../environment";

// Obtener lista de inventario
export const getInventory = async () => {
    try {
        const response = await fetch(`${environment.API_BASE_URL}inventory/`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching inventory list:", error);
        return [];
    }
};

export const createInventoryItem = async (itemData: any) => {
    try {
        const response = await fetch(`${environment.API_BASE_URL}inventory/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(itemData),
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error creating inventory item:", error);
        return null;
    }
};

export const updateInventoryItem = async (updatedData: any) => {
    try {
        const response = await fetch(`${environment.API_BASE_URL}inventory/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error updating inventory`, error);
        return null;
    }
};

export const deleteInventoryItem = async (id: string) => {
    try {
        const response = await fetch(`${environment.API_BASE_URL}inventory/${id}/`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return true; // El item fue eliminado exitosamente
    } catch (error) {
        console.error(`Error deleting inventory item with id ${id}:`, error);
        return false;
    }
};

export {};
