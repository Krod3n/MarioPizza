export default class Pizza {
  static find(arg0: (item: any) => boolean) {
    throw new Error('Method not implemented.');
  }  

  // 1. Typage des pizza

    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
  static pizzaId: any;
     
    // 2. Définition des valeurs par défaut des pizza
    constructor(
     id: number,
     name: string,
     description: string,
     image: string = `require('/../../assets/images/{image}.jpg')`,
     price: number,

    ) {
     // 3. Initialisation des pizza
     this.id = id;
     this.name = name;
     this.description = description;
     this.image = image;
     this.price = price;
    }
  }