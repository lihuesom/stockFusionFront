export type GetInventory = {
    _id: string;
    product: {
        pk : number,
        name: string
    };
    owner: {
        pk: string,
        fullname: string,
        identification:string
    } ;
    registered_by: {
        pk : number,
        identification: string
    };
    approved_by: {
        pk : number,
        identification: string
    } | null;
    delivery_date: string;
    serie: number;
    status: string | null;
    created_at: string;
    updated_at: string; 
};