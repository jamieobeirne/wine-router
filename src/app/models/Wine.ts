
import { Food } from "./Food"

export interface Wine {
    name: string;
    imageUrl: string;
    price: number;
    isOnSale: boolean; /***/
    quantityInCart: number;
    foodPairing: Food[];
}
