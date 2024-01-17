import Line from "./Line";
import User from "./User";

export default class Order {  

      // 1. Typage de l'Order
      id: number;
      quantity: number;
      // 2. Définition des valeurs par défaut de l'Order
      constructor(
       id: number,
       quantity: number,
      ) {
       // 3. Initialisation Order
       this.id = id;
       this.quantity = quantity;
      }
    }
