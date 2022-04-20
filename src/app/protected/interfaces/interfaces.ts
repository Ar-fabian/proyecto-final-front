export interface CrudResponse{
    total?:number;
    ok:boolean;
    products?:Product[];
    product?:Product;
    msg?:string;
}

export interface Product{
    "productName":string;
    "stock":string;
    "store":string;
    "pid"?:string;
}
