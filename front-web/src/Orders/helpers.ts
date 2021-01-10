import { Product } from "./types";

export function checkIsSelected(selectedProducts:Product[], product:Product){
    return selectedProducts.some(item => item.id === product.id);
}

export function formatPrice(price: number){
    const formater = new Intl.NumberFormat('pt-Br',{
        style:'currency',
        currency:'BRL',
        minimumFractionDigits: 2
    });
    return formater.format(price);
}
