import Order from "./Order";
import Pizza from "./pizza";

export default class Line {  
  
      // 1. Typage de l'OrderLine

      id: number;
      quantity: number;
       
      // 2. Définition des valeurs par défaut de l'OrderLine
      constructor(
       id: number,
       quantity: number,
  
      ) {
       // 3. Initialisation OrderLine
       this.id = id;
       this.quantity = quantity;
       
      }
    }