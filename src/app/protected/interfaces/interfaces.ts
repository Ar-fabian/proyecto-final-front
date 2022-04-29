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
    productName:string,
    price:string,
    cant:number,
    storeDescription:string,
    storeInfo?:StoreInfo,
    storeImage?:string,
    productInfo?:string,
    productDescription:string,
    productImage?:string,
    unit?:number,
    _id:string,

}
export interface StoreInfo{
    webSite:string,
    timeTable:string,
    floor:string
}
export interface Params{
    mallSelected:string,
    productSearch:string
}


