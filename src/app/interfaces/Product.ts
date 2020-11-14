export interface Product {
    _id: string;
    name: string;
    description: string;
    sku: string
    price: number
}

export interface ProductsPaginator {
    docs: Product[];
    // docs:[
    //     {[k:string]:string | number}
    // ],
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter?: number; //Opcional
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number;
    nextPage: number;
}