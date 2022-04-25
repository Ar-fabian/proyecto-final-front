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

export interface MallResponse{
    ok:boolean,
    total?:string,
    malls?:Mall[],
    mall?:Mall[],
    product?:Mall,
    msg?:string
}
export interface Mall{
    mall:string,
    store:string,
    _id:string,
    storeDescription:string,
    productName:string,
    price:string,
    cant:number,
    unit?:number,
    storeImage?:string
}
export interface Params{
    mallSelected:string,
    productSearch:string
}


