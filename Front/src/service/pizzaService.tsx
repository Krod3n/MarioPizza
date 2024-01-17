import Pizza from "../model/pizza";
import AuthenticationService from "./authentication-service";

export default class pizzaService {
  static pizza: Pizza[];

  static async getPizza(): Promise<Pizza[]> {
    return fetch(`http://192.168.1.132:8080/pizza/all`, {
      method: "GET",
      headers: { 'Authorization': AuthenticationService.jwt }
    })
      .then((response) => response.json())
      .catch((error) => this.handleError(error));
  }

  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }

  static handleError(error: Error): void {
    console.error(error);
  }
}